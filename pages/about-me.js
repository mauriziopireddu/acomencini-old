import Head from 'next/head';
import getTitle from '../lib/title';
import Content from '../src/Content';
import SideHero from '../src/SideHero/SideHero';

const PAGE_NAME = 'About Me';
const title = getTitle(PAGE_NAME);

const AboutMe = () => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
      <SideHero />
      <Content heading={PAGE_NAME} />
    </div>
  </>
);

export default AboutMe;
