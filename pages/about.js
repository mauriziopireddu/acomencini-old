import Head from 'next/head';
import getTitle from '../lib/title';
import Content from '../src/Content';
import SideHero from '../src/SideHero/SideHero';
import config from '../config/config';

const { name: pageName } = config.pages.about;
const title = getTitle(pageName);

const About = () => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    <SideHero />
    <Content heading={pageName} />
  </>
);

export default About;
