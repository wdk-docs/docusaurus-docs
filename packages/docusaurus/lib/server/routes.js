"use strict";
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadRoutes = exports.handleDuplicateRoutes = exports.genChunkName = void 0;
const tslib_1 = require("tslib");
const querystring_1 = tslib_1.__importDefault(require("querystring"));
const lodash_1 = tslib_1.__importDefault(require("lodash"));
const logger_1 = tslib_1.__importDefault(require("@docusaurus/logger"));
const utils_1 = require("@docusaurus/utils");
const utils_2 = require("./utils");
/** Indents every line of `str` by one level. */
function indent(str) {
    return `  ${str.replace(/\n/g, `\n  `)}`;
}
const chunkNameCache = new Map();
const chunkNameCount = new Map();
/**
 * Generates a unique chunk name that can be used in the chunk registry.
 *
 * @param modulePath A path to generate chunk name from. The actual value has no
 * semantic significance.
 * @param prefix A prefix to append to the chunk name, to avoid name clash.
 * @param preferredName Chunk names default to `modulePath`, and this can supply
 * a more human-readable name.
 * @param shortId When `true`, the chunk name would only be a hash without any
 * other characters. Useful for bundle size. Defaults to `true` in production.
 */
function genChunkName(modulePath, prefix, preferredName, shortId = process.env.NODE_ENV === 'production') {
    let chunkName = chunkNameCache.get(modulePath);
    if (!chunkName) {
        if (shortId) {
            chunkName = (0, utils_1.simpleHash)(modulePath, 8);
        }
        else {
            let str = modulePath;
            if (preferredName) {
                const shortHash = (0, utils_1.simpleHash)(modulePath, 3);
                str = `${preferredName}${shortHash}`;
            }
            const name = (0, utils_1.docuHash)(str);
            chunkName = prefix ? `${prefix}---${name}` : name;
        }
        const seenCount = (chunkNameCount.get(chunkName) ?? 0) + 1;
        if (seenCount > 1) {
            chunkName += seenCount.toString(36);
        }
        chunkNameCache.set(modulePath, chunkName);
        chunkNameCount.set(chunkName, seenCount);
    }
    return chunkName;
}
exports.genChunkName = genChunkName;
/**
 * Takes a piece of route config, and serializes it into raw JS code. The shape
 * is the same as react-router's `RouteConfig`. Formatting is similar to
 * `JSON.stringify` but without all the quotes.
 */
function serializeRouteConfig({ routePath, routeHash, exact, subroutesCodeStrings, props, }) {
    const parts = [
        `path: '${routePath}'`,
        `component: ComponentCreator('${routePath}', '${routeHash}')`,
    ];
    if (exact) {
        parts.push(`exact: true`);
    }
    if (subroutesCodeStrings) {
        parts.push(`routes: [
${indent(subroutesCodeStrings.join(',\n'))}
]`);
    }
    Object.entries(props).forEach(([propName, propValue]) => {
        const isIdentifier = /^[$_\p{ID_Start}][$\u200c\u200d\p{ID_Continue}]*$/u.test(propName);
        const key = isIdentifier ? propName : JSON.stringify(propName);
        parts.push(`${key}: ${JSON.stringify(propValue)}`);
    });
    return `{
${indent(parts.join(',\n'))}
}`;
}
const isModule = (value) => typeof value === 'string' ||
    (typeof value === 'object' &&
        // eslint-disable-next-line no-underscore-dangle
        !!value?.__import);
/**
 * Takes a {@link Module} (which is nothing more than a path plus some metadata
 * like query) and returns the string path it represents.
 */
function getModulePath(target) {
    if (typeof target === 'string') {
        return target;
    }
    const queryStr = target.query ? `?${querystring_1.default.stringify(target.query)}` : '';
    return `${target.path}${queryStr}`;
}
function genChunkNames(routeModule, prefix, name, res) {
    if (isModule(routeModule)) {
        // This is a leaf node, no need to recurse
        const modulePath = getModulePath(routeModule);
        const chunkName = genChunkName(modulePath, prefix, name);
        res.registry[chunkName] = (0, utils_1.escapePath)(modulePath);
        return chunkName;
    }
    if (Array.isArray(routeModule)) {
        return routeModule.map((val, index) => genChunkNames(val, `${index}`, name, res));
    }
    return lodash_1.default.mapValues(routeModule, (v, key) => genChunkNames(v, key, name, res));
}
function handleDuplicateRoutes(pluginsRouteConfigs, onDuplicateRoutes) {
    if (onDuplicateRoutes === 'ignore') {
        return;
    }
    const allRoutes = (0, utils_2.getAllFinalRoutes)(pluginsRouteConfigs).map((routeConfig) => routeConfig.path);
    const seenRoutes = new Set();
    const duplicatePaths = allRoutes.filter((route) => {
        if (seenRoutes.has(route)) {
            return true;
        }
        seenRoutes.add(route);
        return false;
    });
    if (duplicatePaths.length > 0) {
        logger_1.default.report(onDuplicateRoutes) `Duplicate routes found!${duplicatePaths.map((duplicateRoute) => logger_1.default.interpolate `Attempting to create page at url=${duplicateRoute}, but a page already exists at this route.`)}
This could lead to non-deterministic routing behavior.`;
    }
}
exports.handleDuplicateRoutes = handleDuplicateRoutes;
/**
 * This is the higher level overview of route code generation. For each route
 * config node, it returns the node's serialized form, and mutates `registry`,
 * `routesPaths`, and `routesChunkNames` accordingly.
 */
function genRouteCode(routeConfig, res) {
    const { path: routePath, component, modules = {}, context, routes: subroutes, priority, exact, ...props } = routeConfig;
    if (typeof routePath !== 'string' || !component) {
        throw new Error(`Invalid route config: path must be a string and component is required.
${JSON.stringify(routeConfig)}`);
    }
    if (!subroutes) {
        res.routesPaths.push(routePath);
    }
    const routeHash = (0, utils_1.simpleHash)(JSON.stringify(routeConfig), 3);
    res.routesChunkNames[`${routePath}-${routeHash}`] = {
        // Avoid clash with a prop called "component"
        ...genChunkNames({ __comp: component }, 'component', component, res),
        ...(context &&
            genChunkNames({ __context: context }, 'context', routePath, res)),
        ...genChunkNames(modules, 'module', routePath, res),
    };
    return serializeRouteConfig({
        routePath: routePath.replace(/'/g, "\\'"),
        routeHash,
        subroutesCodeStrings: subroutes?.map((r) => genRouteCode(r, res)),
        exact,
        props,
    });
}
/**
 * Routes are prepared into three temp files:
 *
 * - `routesConfig`, the route config passed to react-router. This file is kept
 * minimal, because it can't be code-splitted.
 * - `routesChunkNames`, a mapping from route paths (hashed) to code-splitted
 * chunk names.
 * - `registry`, a mapping from chunk names to options for react-loadable.
 */
function loadRoutes(routeConfigs, baseUrl, onDuplicateRoutes) {
    handleDuplicateRoutes(routeConfigs, onDuplicateRoutes);
    const res = {
        // To be written by `genRouteCode`
        routesConfig: '',
        routesChunkNames: {},
        registry: {},
        routesPaths: [(0, utils_1.normalizeUrl)([baseUrl, '404.html'])],
    };
    // `genRouteCode` would mutate `res`
    const routeConfigSerialized = routeConfigs
        .map((r) => genRouteCode(r, res))
        .join(',\n');
    res.routesConfig = `import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
${indent(routeConfigSerialized)},
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
`;
    return res;
}
exports.loadRoutes = loadRoutes;
