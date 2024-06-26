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
    title: 'Source',
    Svg: require('@site/static/img/source.svg').default,
    thingy: 'https://github.com/annebrown/home/',
    description: (
      <>
        {/* Source */}
      </>
    ),
  },
  {
    title: 'Dev Env',
    Svg: require('@site/static/img/dev-env.svg').default,
    thingy: 'https://github.com/annebrown/dotfiles/',
    description: (
      <>
      {/* Descr Here */}
      </>
    )
  },
  {
    title: 'Ref',
    Svg: require('@site/static/img/docs.svg').default,
    thingy: 'https://github.com/annebrown/docs-priv/',
    description: (
      <>
        {/* Docs Descr Here */}
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
