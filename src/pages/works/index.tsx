import { motion, type Variants } from 'framer-motion';
import Head from 'next/head';
import React from 'react';

import withPageTransition from '../../components/hoc/with-page-transition';
import Page from '../../components/page/Page';
import PageBody from '../../components/page-body/PageBody';
import PageHeader from '../../components/page-header/PageHeader';
import WorksList, {
  WorksListProps
} from '../../works/components/works-list/WorksList.component';
import WorksSlider, {
  WorkSliderItem
} from '../../works/components/works-slider/WorksSlider';

/**
 * Animtion variations for the slider container.
 */
const sliderContainerVariants: Variants = {
  initial: {
    opacity: 0,
    transform: 'translateY(100%)'
  },
  enter: {
    opacity: 1,
    transform: 'translateY(0px)',
    transition: {
      when: 'beforeChildren',
      delay: 0.6,
      duration: 1,
      ease: 'easeOut'
    }
  }
};

/**
 * Represents the works page of the application.
 */
const WorksPage: React.FC<React.PropsWithChildren> = () => {
  const openSourceWorksList: WorksListProps = {
    title: 'Open Source',
    description:
      'I love doing open source stuff in my spare time. These are stuff that I have created as OS projects or contributions to existing ones.',
    works: [
      {
        name: 'Article Date Extract',
        url: 'https://github.com/itskrsna/article-date-extract',
        description: `I am the <span class="text-secondary">author</span> on this project. It is based on <span class="text-secondary">Python</span> package. A must have package for extracting the date from articles.`
      },
      {
        name: 'NewsPaper Demo',
        url: 'https://github.com/itskrsna/newspaper-demo',
        description: `This is a demo of a plugin NewPaper. It has over <span class="text-secondary">28</span> stars.`
      },
      {
        name: 'Predicting the Fake News Article',
        url: 'https://github.com/itskrsna/Predicting-Fake-News-Articles',
        description: `This is a repo for predicting the fake news articles, Its a capstone project`
      },
      {
        name: 'Botpress',
        url: 'https://github.com/itskrsna/botpress',
        description: `Created some custom modules and its a fork project ,deployed this  custom build to the Azure and integrated with third-party solutions`
      }
    ]
  };

  const worksSliderItems: WorkSliderItem[] = [
    {
      title: 'Open Source',
      component: WorksList,
      props: openSourceWorksList
    },
    {
      title: 'Blogs',
      component: WorksList,
      props: {
        title: 'Blogs',
        description:
          'I love to write blogs in my free time. Started out with wordpress and then moved to DEV.to. Now, trying to combine DEV.to and my personal site.',
        works: [
          {
            name: 'https://blueshirtdeveloper.wordpress.com',
            url: 'https://blueshirtdeveloper.wordpress.com/',
            description: `This was my first blog and where most of my writings have happened so far and has over <span class="text-secondary">1000</span> views.`
          },
          {
            name: 'DEV.to',
            url: 'https://dev.to/webrusterkk',
            description: `I started writing here for better SEO and seems it did work out well. It has a lonely post with over <span class="text-secondary">2500</span> views.`
          }
        ]
      }
    }
  ];

  return (
    <Page>
      <Head>
        <title>Works - Things I&apos;ve done.</title>

        <meta property="og:title" content="Works - Things I've done." />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_FRONT_END_DOMAIN}/works}`}
        />

        <meta name="twitter:title" content="Works - Things I've done." />
        <meta
          name="twitter:description"
          content="These are some of the stuff I have done over the years."
        />
      </Head>
      <PageHeader
        title="Works"
        description="These are some of the activities I have done over the years. I love to program and at the same time I love to experiment new languages as well. So it'll be kinda all over the place."
      />
      <PageBody>
        <motion.div variants={sliderContainerVariants} className="mt-32">
          <WorksSlider items={worksSliderItems} />
        </motion.div>
      </PageBody>
    </Page>
  );
};

export default withPageTransition(WorksPage);
