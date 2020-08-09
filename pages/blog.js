import Head from 'next/head';
import { config } from '../config/config';
import { getTitle } from '../src/lib/title';
import Content from '../src/components/Content';
import SideHero from '../src/components/SideHero/SideHero';

const { name: pageName } = config.pages.blog;
const title = getTitle(pageName);

const AboutMe = () => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    <SideHero />
    <Content heading={pageName} />
  </>
);

export default AboutMe;
