import Head from 'next/head';
import SideHero from '../src/SideHero/SideHero';

const Index = () => (
  <>
    <Head>
      <title>Alessandra Comencini</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen">
      <SideHero />
      <div className="">2</div>
    </div>
  </>
);

export default Index;
