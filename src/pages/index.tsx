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
    </Layout>
  );
}
