import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
  thingy: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Digital Media',
    Svg: require('@site/static/img/digital-media.svg').default,
    thingy: '/docs/category/digital-media',
    description: (
      <>
        Shared digital media, including images, templates, scripts, code snippets, logos, ... 
      </>
    ),
  },
  {
    title: 'Ref',
    Svg: require('@site/static/img/text-books.svg').default,
    thingy: '/docs/category/ref',
    description: (
      <>
        Reference docs
      </>
    ),
  },
  {
    title: 'annebrown.ca',
    Svg: require('@site/static/img/logo-ab.svg').default,
    thingy: 'https://www.annebrown.ca',
    description: (
      <>
      Personal dev 
      </>
    ),
  },
];

function Feature({title, Svg, description, thingy}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
     <a href={thingy}> <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3" style={{color: '#ffffff'}}>{title}</Heading>
        <p style={{color: '#ffffff'}}>{description}</p>
      </div></a>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
