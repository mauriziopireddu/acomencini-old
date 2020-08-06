import Head from 'next/head';
import Content from '../src/Content';
import SideHero from '../src/SideHero/SideHero';
import getTitle from '../lib/title';

const title = getTitle();

const Index = () => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    <SideHero />
    <Content heading="Hi, I'm Alessandra" />
  </>
);

export default Index;
