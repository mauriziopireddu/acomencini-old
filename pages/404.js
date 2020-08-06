import Head from 'next/head';
import config from '../config/config';
import getTitle from '../lib/title';
import Content from '../src/Content';
import SideHero from '../src/SideHero/SideHero';

const { name: pageName } = config.pages.notFound;
const title = getTitle(pageName);

const NotFound = () => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    <SideHero />
    <Content heading="404 | Not Found" />
  </>
);

export default NotFound;
