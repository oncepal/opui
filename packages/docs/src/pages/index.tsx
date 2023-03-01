import React from 'react';
import clsx from 'clsx';
import { App, Text } from '@sui/core';
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
        <h1 className='hero__title'>
          <Text h1 gradient='linear-gradient(to right, #fa709a 0%, #fee140 100%)'>
            组件，工具
          </Text>
        </h1>
        <h1 className='hero__title'>
          <Text gradient=''>为了开发者</Text>
        </h1>
        <p className='hero__subtitle'>丰富的组件功能和卓越的开发者工具彻底改变React应用的用户体验</p>
        <div className={styles.buttons}>
          <Link className={clsx('button button--primary button--lg', styles.gradient)} to='/docs/guide/intro'>
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
        <App>
          <HomepageFeatures />
        </App>
      </main>
    </Layout>
  );
}
