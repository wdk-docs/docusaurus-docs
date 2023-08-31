/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import clsx from "clsx";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import Link from "@docusaurus/Link";
import Translate, { translate } from "@docusaurus/Translate";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl, { useBaseUrlUtils } from "@docusaurus/useBaseUrl";

import Image from "@theme/IdealImage";
import Layout from "@theme/Layout";

import Tweet from "@site/src-zh/components/Tweet";
import Tweets, { type TweetItem } from "@site/src-zh/data/tweets";
import Quotes from "@site/src-zh/data/quotes";
import Features, { type FeatureItem } from "@site/src-zh/data/features";

import ProductHuntCard from "@site/src-zh/components/ProductHuntCard";
import HackerNewsIcon from "@site/src-zh/components/HackerNewsIcon";
import styles from "./styles.module.css";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import Heading from "@theme/Heading";
import React from "react";

function HeroBanner() {
  return (
    <div className={styles.hero} data-theme="dark">
      <div className={styles.heroInner}>
        <Heading as="h1" className={styles.heroProjectTagline}>
          <img
            alt={translate({ message: "Docusaurus with Keytar" })}
            className={styles.heroLogo}
            src={useBaseUrl("/img/docusaurus_keytar.svg")}
            width="200"
            height="200"
          />
          <span
            className={styles.heroTitleTextHtml}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: translate({
                id: "homepage.hero.title",
                message: "快速构建<b>优化的</b>网站<b>，专注于你的<b>内容</b>",
                description: "首页英雄标题，可以包含简单的html标签",
              }),
            }}
          />
        </Heading>
        <div className={styles.indexCtas}>
          <Link className="button button--primary" to="/docs">
            <Translate>开始</Translate>
          </Link>
          <Link className="button button--info" to="https://docusaurus.new">
            <Translate>尝试演示</Translate>
          </Link>
          <span className={styles.indexCtasGitHubButtonWrapper}>
            <iframe
              className={styles.indexCtasGitHubButton}
              src="https://ghbtns.com/github-btn.html?user=facebook&amp;repo=docusaurus&amp;type=star&amp;count=true&amp;size=large"
              width={160}
              height={30}
              title="GitHub Stars"
            />
          </span>
        </div>
      </div>
    </div>
  );
}

function MigrationAnnouncement() {
  return (
    <div className={clsx(styles.announcement, styles.announcementDark)} data-theme="dark">
      <div className={styles.announcementInner}>
        <Translate
          values={{
            docusaurusV1Link: (
              <Link to="https://v1.docusaurus.io/">
                <Translate>Docusaurus v1</Translate>
              </Link>
            ),
            migrationGuideLink: (
              <Link to="/docs/migration">
                <Translate>V1到v2的迁移指南</Translate>
              </Link>
            ),
          }}
        >
          {`来自{docusaurusV1Link}? 查看我们的 {migrationGuideLink}.`}
        </Translate>
      </div>
    </div>
  );
}

function TweetsSection() {
  const tweetColumns: TweetItem[][] = [[], [], []];
  Tweets.filter((tweet) => tweet.showOnHomepage).forEach((tweet, i) => tweetColumns[i % 3]!.push(tweet));

  return (
    <div className={clsx(styles.section, styles.sectionAlt)}>
      <div className="container">
        <Heading as="h2" className={clsx("margin-bottom--lg", "text--center")}>
          <Translate>受到许多工程师的喜爱</Translate>
        </Heading>
        <div className={clsx("row", styles.tweetsSection)}>
          {tweetColumns.map((tweetItems, i) => (
            <div className="col col--4" key={i}>
              {tweetItems.map((tweet) => (
                <Tweet {...tweet} key={tweet.url} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function QuotesSection() {
  return (
    <div className={clsx(styles.section)}>
      <div className="container">
        <div className="row">
          {Quotes.map((quote) => (
            <div className="col" key={quote.name}>
              <div className="avatar avatar--vertical margin-bottom--sm">
                <Image
                  alt={quote.name}
                  className="avatar__photo avatar__photo--xl"
                  img={quote.thumbnail}
                  style={{ overflow: "hidden" }}
                />
                <div className="avatar__intro padding-top--sm">
                  <div className="avatar__name">{quote.name}</div>
                  <small className="avatar__subtitle">{quote.title}</small>
                </div>
              </div>
              <p className="text--center text--italic padding-horiz--md">{quote.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function VideoContainer() {
  return (
    <div className="container text--center margin-bottom--xl">
      <div className="row">
        <div className="col">
          <Heading as="h2">
            <Translate>请在介绍视频中查看</Translate>
          </Heading>
          <div className="video-container">
            <LiteYouTubeEmbed
              id="_An9EsKPhp0"
              params="autoplay=1&autohide=1&showinfo=0&rel=0"
              title="Explain Like I'm 5: Docusaurus"
              poster="maxresdefault"
              webp
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Feature({ feature, className }: { feature: FeatureItem; className?: string }) {
  const { withBaseUrl } = useBaseUrlUtils();

  return (
    <div className={clsx("col", className)}>
      <img
        className={styles.featureImage}
        alt={feature.title}
        width={Math.floor(feature.image.width)}
        height={Math.floor(feature.image.height)}
        src={withBaseUrl(feature.image.src)}
        loading="lazy"
      />
      <Heading as="h3" className={clsx(styles.featureHeading)}>
        {feature.title}
      </Heading>
      <p className="padding-horiz--md">{feature.text}</p>
    </div>
  );
}

function FeaturesContainer() {
  const firstRow = Features.slice(0, 3);
  const secondRow = Features.slice(3);

  return (
    <div className="container text--center">
      <Heading as="h2">
        <Translate>主要特点</Translate>
      </Heading>
      <div className="row margin-bottom--lg">
        {firstRow.map((feature, idx) => (
          <Feature feature={feature} key={idx} />
        ))}
      </div>
      <div className="row">
        {secondRow.map((feature, idx) => (
          <Feature feature={feature} key={idx} className={clsx("col--4", idx === 0 && "col--offset-2")} />
        ))}
      </div>
    </div>
  );
}

function TopBanner() {
  /* TODO restore Ukraine banner after launch
    <Translate
        id="homepage.banner"
        values={{
          link: (
            <Link to="https://opensource.facebook.com/support-ukraine">
              <Translate id="homepage.banner.link">
                Help Provide Humanitarian Aid to Ukraine
              </Translate>
            </Link>
          ),
        }}>
        {'Support Ukraine 🇺🇦 {link}.'}
      </Translate>
   */
  return (
    <div className={styles.topBanner}>
      <div className={styles.topBannerTitle}>
        {"🎉\xa0"}
        <Link to="/blog/2022/08/01/announcing-docusaurus-2.0" className={styles.topBannerTitleText}>
          <Translate id="homepage.banner.launch.2.0">{"Docusaurus\xa02.0 来\xa0了!️"}</Translate>
        </Link>
        {"\xa0🥳"}
      </div>
      <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
        <div style={{ flex: 1, whiteSpace: "nowrap" }}>
          <div className={styles.topBannerDescription}>
            我们开始{" "}
            <b>
              <Link to="https://www.producthunt.com/posts/docusaurus-2-0">ProductHunt</Link> 和{" "}
              <Link to="https://news.ycombinator.com/item?id=32303052">Hacker News</Link> 今天!
            </b>
          </div>
        </div>
        <div
          style={{
            flexGrow: 1,
            flexShrink: 0,
            padding: "0.5rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <ProductHuntCard />
          <HackerNewsIcon />
        </div>
      </div>
    </div>
  );
}

export default function Home(): JSX.Element {
  const {
    siteConfig: { customFields, tagline },
  } = useDocusaurusContext();
  const { description } = customFields as { description: string };
  return (
    <Layout title={tagline} description={description}>
      <main>
        <TopBanner />
        <HeroBanner />
        <MigrationAnnouncement />
        <div className={styles.section}>
          <VideoContainer />
          <FeaturesContainer />
        </div>
        <TweetsSection />
        <QuotesSection />
      </main>
    </Layout>
  );
}
