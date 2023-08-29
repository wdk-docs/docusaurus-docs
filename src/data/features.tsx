/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import Translate, { translate } from "@docusaurus/Translate";

export type FeatureItem = {
  title: string;
  image: {
    src: string;
    width: number;
    height: number;
  };
  text: JSX.Element;
};

const FEATURES: FeatureItem[] = [
  {
    title: translate({
      message: "由MDX驱动",
      id: "homepage.features.powered-by-mdx.title",
    }),
    image: {
      src: "/img/undraw_typewriter.svg",
      width: 1009.54,
      height: 717.96,
    },
    text: (
      <Translate id="homepage.features.powered-by-mdx.text">
        节省时间，专注于文本文档。只需用MDX编写文档和博客文章，Docusaurus就会将它们构建成静态HTML文件，随时可以提供服务。多亏了MDX，你甚至可以在Markdown中嵌入React组件。
      </Translate>
    ),
  },
  {
    title: translate({
      message: "使用React构建",
      id: "homepage.features.built-using-react.title",
    }),
    image: {
      src: "/img/undraw_react.svg",
      width: 1108,
      height: 731.18,
    },
    text: (
      <Translate id="homepage.features.built-using-react.text">
        通过编写React组件来扩展和定制项目的布局。利用可插拔架构，设计您自己的网站，同时重用由Docusaurus插件创建的相同数据。
      </Translate>
    ),
  },
  {
    title: translate({
      message: "准备翻译",
      id: "homepage.features.ready-for-translations.title",
    }),
    image: {
      src: "/img/undraw_around_the_world.svg",
      width: 1137,
      height: 776.59,
    },
    text: (
      <Translate id="homepage.features.ready-for-translations.text">
        本地化是开箱即用的。使用git、Crowdin或任何其他翻译管理器来翻译文档并单独部署它们。
      </Translate>
    ),
  },
  {
    title: translate({
      message: "文档版本管理",
      id: "homepage.features.document-versioning.title",
    }),
    image: {
      src: "/img/undraw_version_control.svg",
      width: 1038.23,
      height: 693.31,
    },
    text: (
      <Translate id="homepage.features.document-versioning.text">
        支持项目所有版本的用户。文档版本控制可以帮助您保持文档与项目版本同步。
      </Translate>
    ),
  },
  {
    title: translate({
      message: "内容搜索",
      id: "homepage.features.content-search.title",
    }),
    image: {
      src: "/img/undraw_algolia.svg",
      width: 1137.97,
      height: 736.21,
    },
    text: (
      <Translate id="homepage.features.content-search.text">
        让您的社区能够轻松地在您的文档中找到他们需要的内容。我们自豪地支持Algolia文档搜索。
      </Translate>
    ),
  },
];

export default FEATURES;
