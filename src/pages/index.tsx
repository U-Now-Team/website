import type { ReactNode } from "react";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import Translate, { translate } from "@docusaurus/Translate";
import Link from "@docusaurus/Link";

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
          <Translate id="homepage.subtitle">U Know, U Now</Translate>
        </p>
        <div className={styles.heroButtons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/ai-dev/">
            <Translate id="homepage.getStarted">开始使用</Translate>
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="https://github.com/U-Now-Team"
            target="_blank">
            <Translate id="homepage.viewGithub">查看 GitHub</Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

function Feature({
  title,
  description,
  to,
}: {
  title: string;
  description: string;
  to?: string;
}): ReactNode {
  const content = (
    <>
      <Heading as="h3">{title}</Heading>
      <p>{description}</p>
    </>
  );

  return (
    <div className={clsx("col col--4")}>
      <div className="padding-horiz--md padding-vert--lg">
        {to ? (
          <Link to={to} style={{ textDecoration: "none", color: "inherit" }}>
            {content}
          </Link>
        ) : (
          content
        )}
      </div>
    </div>
  );
}

function HomepageFeatures(): ReactNode {
  const features = [
    {
      title: translate({
        id: "homepage.feature.ai-dev.title",
        message: "AI 开发",
      }),
      description: translate({
        id: "homepage.feature.ai-dev.desc",
        message: "开源 AI 助手与编程工具",
      }),
      isCategory: true,
    },
  ];

  const aiFeatures = [
    {
      title: translate({
        id: "homepage.feature.openclaw.title",
        message: "OpenClaw",
      }),
      description: translate({
        id: "homepage.feature.openclaw.desc",
        message: "开源 AI 助手框架，支持多平台集成",
      }),
      to: "/docs/ai-dev/openclaw/",
    },
    {
      title: translate({
        id: "homepage.feature.opencode.title",
        message: "OpenCode",
      }),
      description: translate({
        id: "homepage.feature.opencode.desc",
        message: "新一代 AI 编程助手，提升开发效率",
      }),
      to: "/docs/ai-dev/opencode/",
    },
  ];

  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {features.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <div className="row">
          {aiFeatures.map((props, idx) => (
            <Feature key={idx} {...props} />
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
