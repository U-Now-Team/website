import type { ReactNode } from "react";
import { useState } from "react";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import Translate, { translate } from "@docusaurus/Translate";

import styles from "./index.module.css";

function HomepageHeader() {
  const [showEmojis, setShowEmojis] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const handleClick = () => {
    setShowEmojis(true);
    setLikeCount((prev) => prev + 1);
    setTimeout(() => setShowEmojis(false), 1500);
  };

  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          <Translate id="homepage.title">U·Now 文档</Translate>
        </Heading>
        <button 
          className={styles.subtitleButton} 
          onClick={handleClick}
          type="button"
        >
          <Translate id="homepage.subtitle">不必多言，当下正好</Translate>
          {showEmojis && (
            <span className={styles.emojiPop}>
              ❤️ 👍 🎉
            </span>
          )}
        </button>
        {likeCount > 0 && (
          <div className={styles.likeCount}>
            {likeCount} ❤️
          </div>
        )}
      </div>
    </header>
  );
}

function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}): ReactNode {
  return (
    <div className={styles.featureCard}>
      <h3 className={styles.featureTitle}>{title}</h3>
      <p className={styles.featureDesc}>{description}</p>
    </div>
  );
}

function HomepageFeatures(): ReactNode {
  const features = [
    {
      title: translate({
        id: "homepage.feature.opensource.title",
        message: "开源",
      }),
      description: translate({
        id: "homepage.feature.opensource.desc",
        message: "开放共享，推动技术进步",
      }),
    },
    {
      title: translate({
        id: "homepage.feature.passion.title",
        message: "热爱",
      }),
      description: translate({
        id: "homepage.feature.passion.desc",
        message: "专注创新，追求极致",
      }),
    },
    {
      title: translate({
        id: "homepage.feature.frontier.title",
        message: "前沿",
      }),
      description: translate({
        id: "homepage.feature.frontier.desc",
        message: "探索前沿技术，引领行业",
      }),
    },
  ];

  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.featuresGrid}>
          {features.map((props, idx) => (
            <FeatureCard key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={translate({ id: "homepage.title", message: "U·Now 文档" })}
      description={translate({
        id: "homepage.description",
        message: "U·Now 团队官方文档中心",
      })}
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
