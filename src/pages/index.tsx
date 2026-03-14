import type { ReactNode } from "react";
import { useState, useEffect } from "react";
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

function TutorialCard({
  title,
  description,
  gradient,
  to,
}: {
  title: string;
  description: string;
  gradient: string;
  to: string;
}): ReactNode {
  return (
    <a href={to} className={styles.tutorialCard}>
      <div className={styles.cardImage} style={{ background: gradient }}>
        <span className={styles.cardTitle}>{title}</span>
      </div>
      <div className={styles.cardContent}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </a>
  );
}

function TutorialCarousel(): ReactNode {
  const tutorials = [
    {
      title: translate({
        id: "homepage.tutorial.openclaw.title",
        message: "OpenClaw",
      }),
      description: translate({
        id: "homepage.tutorial.openclaw.desc",
        message: "开源 AI 助手框架",
      }),
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      to: "/website/docs/openclaw/",
    },
    {
      title: translate({
        id: "homepage.tutorial.opencode.title",
        message: "OpenCode",
      }),
      description: translate({
        id: "homepage.tutorial.opencode.desc",
        message: "AI 编程助手",
      }),
      gradient: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
      to: "/website/docs/opencode/",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % tutorials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [tutorials.length]);

  return (
    <section className={styles.carouselSection}>
      <div className="container">
        <div className={styles.carouselWrapper}>
          <div 
            className={styles.carouselTrack}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {tutorials.map((tutorial, idx) => (
              <TutorialCard key={idx} {...tutorial} />
            ))}
          </div>
        </div>
        <div className={styles.carouselDots}>
          {tutorials.map((_, idx) => (
            <span 
              key={idx}
              className={clsx(styles.dot, idx === currentIndex && styles.dotActive)}
              onClick={() => setCurrentIndex(idx)}
            />
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
        <TutorialCarousel />
      </main>
    </Layout>
  );
}
