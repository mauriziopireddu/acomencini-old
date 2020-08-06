import Head from 'next/head';
import config from '../config/config';
import getTitle from '../lib/title';
import Content from '../src/Content';
import SideHero from '../src/SideHero/SideHero';

const { name: pageName } = config.pages.portfolio;
const title = getTitle(pageName);

const Portfolio = () => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    <SideHero />
    <Content heading={pageName} />
  </>
);

export default Portfolio;
