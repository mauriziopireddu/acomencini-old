import Head from 'next/head';
import Content from '../src/Content';
import SideHero from '../src/SideHero/SideHero';

const AboutMe = () => (
  <>
    <Head>
      <title>Blog | Alessandra Comencini</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
      <SideHero />
      <Content heading="Blog" />
    </div>
  </>
);

export default AboutMe;
