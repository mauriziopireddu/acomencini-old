import Head from 'next/head';
import { getTitle } from '../src/common/title';
import Content from '../src/components/Content';
import SideHero from '../src/components/SideHero/SideHero';
import { config } from '../config/config';

const { name: pageName, illustration } = config.pages.about;
const title = getTitle(pageName);

const About = () => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    <SideHero illustration={illustration} />
    <Content heading={pageName} />
  </>
);

export default About;
