import type { ReactNode } from "react";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import Translate, { translate } from "@docusaurus/Translate";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          <Translate id="homepage.title">U·Now 文档</Translate>
        </Heading>
        <p className="hero__subtitle">
          <Translate id="homepage.subtitle">不必多言，当下正好</Translate>
        </p>
        <div className={styles.searchBox}>
          <input
            type="search"
            placeholder={translate({
              id: "homepage.searchPlaceholder",
              message: "搜索文档...",
            })}
            className={styles.searchInput}
          />
        </div>
      </div>
    </header>
  );
}

function TutorialCard({
  title,
  description,
  to,
}: {
  title: string;
  description: string;
  to: string;
}): ReactNode {
  return (
    <div className={styles.tutorialCard}>
      <a href={to}>
        <h3>{title}</h3>
        <p>{description}</p>
      </a>
    </div>
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
      to: "/docs/ai-dev/openclaw/",
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
      to: "/docs/ai-dev/opencode/",
    },
  ];

  return (
    <section className={styles.tutorialSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>
          <Translate id="homepage.tutorials">教程</Translate>
        </h2>
        <div className={styles.carousel}>
          {tutorials.map((tutorial, idx) => (
            <TutorialCard key={idx} {...tutorial} />
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
