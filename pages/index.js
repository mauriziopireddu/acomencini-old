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
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
      <SideHero />
      <Content heading="Hi, I'm Alessandra" />
    </div>
  </>
);

export default Index;
