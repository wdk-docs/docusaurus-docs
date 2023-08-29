"use strict";
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateOptions = void 0;
const tslib_1 = require("tslib");
const path_1 = tslib_1.__importDefault(require("path"));
const webpack_1 = tslib_1.__importDefault(require("webpack"));
const webpackbar_1 = tslib_1.__importDefault(require("webpackbar"));
const terser_webpack_plugin_1 = tslib_1.__importDefault(require("terser-webpack-plugin"));
const workbox_build_1 = require("workbox-build");
const utils_1 = require("@docusaurus/utils");
const utils_2 = require("@docusaurus/core/lib/webpack/utils");
const theme_translations_1 = require("@docusaurus/theme-translations");
const isProd = process.env.NODE_ENV === 'production';
function getSWBabelLoader() {
    return {
        loader: 'babel-loader',
        options: {
            babelrc: false,
            configFile: false,
            presets: [
                [
                    require.resolve('@babel/preset-env'),
                    {
                        useBuiltIns: 'entry',
                        corejs: '3',
                        // See https://twitter.com/jeffposnick/status/1280223070876315649
                        targets: 'chrome >= 56',
                    },
                ],
            ],
        },
    };
}
function pluginPWA(context, options) {
    const { outDir, baseUrl, i18n: { currentLocale }, } = context;
    const { debug, offlineModeActivationStrategies, injectManifestConfig, pwaHead, swCustom, swRegister, } = options;
    return {
        name: 'docusaurus-plugin-pwa',
        getThemePath() {
            return '../lib/theme';
        },
        getTypeScriptThemePath() {
            return '../src/theme';
        },
        getClientModules() {
            return isProd && swRegister ? [swRegister] : [];
        },
        getDefaultCodeTranslationMessages() {
            return (0, theme_translations_1.readDefaultCodeTranslationMessages)({
                locale: currentLocale,
                name: 'plugin-pwa',
            });
        },
        configureWebpack(config) {
            if (!isProd) {
                return {};
            }
            return {
                plugins: [
                    new webpack_1.default.EnvironmentPlugin({
                        PWA_DEBUG: debug,
                        PWA_SERVICE_WORKER_URL: path_1.default.posix.resolve(`${config.output?.publicPath || '/'}`, 'sw.js'),
                        PWA_OFFLINE_MODE_ACTIVATION_STRATEGIES: offlineModeActivationStrategies,
                    }),
                ],
            };
        },
        injectHtmlTags() {
            const headTags = [];
            if (isProd) {
                pwaHead.forEach(({ tagName, ...attributes }) => {
                    ['href', 'content'].forEach((attribute) => {
                        const attributeValue = attributes[attribute];
                        if (!attributeValue) {
                            return;
                        }
                        const attributePath = !!path_1.default.extname(attributeValue) && attributeValue;
                        if (attributePath && !attributePath.startsWith(baseUrl)) {
                            attributes[attribute] = (0, utils_1.normalizeUrl)([baseUrl, attributeValue]);
                        }
                    });
                    return headTags.push({
                        tagName,
                        attributes,
                    });
                });
            }
            return { headTags };
        },
        async postBuild(props) {
            if (!isProd) {
                return;
            }
            const swSourceFileTest = /\.m?js$/;
            const swWebpackConfig = {
                entry: require.resolve('./sw.js'),
                output: {
                    path: outDir,
                    filename: 'sw.js',
                    publicPath: baseUrl,
                },
                target: 'webworker',
                mode: debug ? 'development' : 'production',
                devtool: debug ? 'source-map' : false,
                optimization: {
                    splitChunks: false,
                    minimize: !debug,
                    // See https://developers.google.com/web/tools/workbox/guides/using-bundlers#webpack
                    minimizer: debug
                        ? []
                        : [
                            new terser_webpack_plugin_1.default({
                                test: swSourceFileTest,
                            }),
                        ],
                },
                plugins: [
                    new webpack_1.default.EnvironmentPlugin({
                        // Fallback value required with Webpack 5
                        PWA_SW_CUSTOM: swCustom ?? '',
                    }),
                    new webpackbar_1.default({
                        name: 'Service Worker',
                        color: 'red',
                    }),
                ],
                module: {
                    rules: [
                        {
                            test: swSourceFileTest,
                            exclude: /node_modules/,
                            use: getSWBabelLoader(),
                        },
                    ],
                },
            };
            await (0, utils_2.compile)([swWebpackConfig]);
            const swDest = path_1.default.resolve(props.outDir, 'sw.js');
            await (0, workbox_build_1.injectManifest)({
                ...injectManifestConfig,
                globPatterns: [
                    '**/*.{js,json,css,html}',
                    '**/*.{png,jpg,jpeg,gif,svg,ico}',
                    '**/*.{woff,woff2,eot,ttf,otf}',
                    // @ts-expect-error: internal API?
                    ...(workbox_build_1.injectManifest.globPatterns ?? []),
                ],
                // Those attributes are not overrideable
                swDest,
                swSrc: swDest,
                globDirectory: props.outDir,
            });
        },
    };
}
exports.default = pluginPWA;
var options_1 = require("./options");
Object.defineProperty(exports, "validateOptions", { enumerable: true, get: function () { return options_1.validateOptions; } });
