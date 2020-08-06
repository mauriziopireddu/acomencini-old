import Head from 'next/head';
import getTitle from '../lib/title';
import Content from '../src/Content';
import SideHero from '../src/SideHero/SideHero';

const PAGE_NAME = 'Blog';
const title = getTitle(PAGE_NAME);

const AboutMe = () => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    <SideHero />
    <Content heading={PAGE_NAME} />
  </>
);

export default AboutMe;
