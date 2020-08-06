import Head from 'next/head';
import Content from '../src/Content';
import SideHero from '../src/SideHero/SideHero';

const NotFound = () => (
  <>
    <Head>
      <title>Not Found | Alessandra Comencini</title>
    </Head>
    <SideHero />
    <Content heading="404 | Not Found" />
  </>
);

export default NotFound;
