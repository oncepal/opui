import React from 'react';
import clsx from 'clsx';
import { App } from '@sui/core';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className='container'>
        <h1 className='hero__title'>{siteConfig.title}</h1>
        <p className='hero__subtitle'>
          🚀 The React UI tools helps you create the <span className={styles.best}>best</span> web app
        </p>
        <div className={styles.buttons}>
          <Link className={clsx('button button--primary button--lg', styles.gradient)} to='/docs/intro'>
            Get Started
          </Link>
          <Link> {'>'} npm install @sui/core @emotion/react</Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title}`} description='🚀 The React UI tools helps you create the best web app'>
      <HomepageHeader />

      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
