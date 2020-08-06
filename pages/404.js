import Head from 'next/head';
import Content from '../src/Content';
import SideHero from '../src/SideHero/SideHero';

const NotFound = () => (
  <>
    <Head>
      <title>Not Found | Alessandra Comencini</title>
    </Head>
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
      <SideHero />
      <Content heading="404 | Not Found" />
    </div>
  </>
);

export default NotFound;
