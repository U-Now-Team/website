import type { ReactNode } from "react";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import Translate, { translate } from "@docusaurus/Translate";
import { useHistory } from "@docusaurus/router";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const history = useHistory();
  
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const query = formData.get("search") as string;
    if (query.trim()) {
      window.location.href = `/website/search?q=${encodeURIComponent(query)}`;
    }
  };

  return (
    <div>
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <Heading as="h1" className="hero__title">
            <Translate id="homepage.title">U·Now 文档</Translate>
          </Heading>
          <p className="hero__subtitle">
            <Translate id="homepage.subtitle">不必多言，当下正好</Translate>
          </p>
        </div>
      </header>
      <div className={styles.searchSection}>
        <form onSubmit={handleSearch} className={styles.searchForm}>
          <input
            type="search"
            name="search"
            placeholder={translate({
              id: "homepage.searchPlaceholder",
              message: "搜索文档...",
            })}
            className={styles.searchInput}
          />
          <button type="submit" className={styles.searchButton}>
            <Translate id="homepage.search">搜索</Translate>
          </button>
        </form>
      </div>
    </div>
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
