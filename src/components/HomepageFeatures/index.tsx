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
        Global digital media, including images, templates, scripts, code snippets, logos, ... 
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
    title: 'Cheatsheets',
    Svg: require('@site/static/img/W3Schools_logo.svg').default,
    //Svg: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/W3Schools_logo.svg',
    //Svg: require('https://upload.wikimedia.org/wikipedia/commons/a/a0/W3Schools_logo.svg').default,
    thingy: 'https://cheatsheets.w3spaces.com/',
    description: (
      <>
      My Cheatsheets on W3S
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
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
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
