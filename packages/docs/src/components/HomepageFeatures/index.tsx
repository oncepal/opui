import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg?: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Apply your own theming decisions.',
    // Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        ShitUI provides a simple way to customize the default themes, you can change the colors, fonts, breakpoints and
        everything you need.
      </>
    ),
  },
  {
    title: 'Do more Write less',
    // Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        ShitUI components have been created with the Developer's experience in mind, avoiding having to import multiple
        components to display just one.
      </>
    ),
  },
  {
    title: 'Customization made easy',
    // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Thanks to ShitUI is built on top of the amazing CSS-in-JS library Emotion, you can customize any components in
        several ways eather using the css prop, styled function or native CSS selectors.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')} style={{ marginTop: '3em' }}>
      <div className='text--center'>{/* <Svg className={styles.featureSvg} role='img' /> */}</div>
      <div className='text--center padding-horiz--md'>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className={clsx('skewY', 'container')}>
        <div className='row'>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
