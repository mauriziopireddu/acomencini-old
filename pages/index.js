import Head from 'next/head';
import Content from '../src/components/Content';
import { getTitle } from '../src/lib/title';
import SideHero from '../src/components/SideHero/SideHero';
import { config } from '../config/config';

const { illustration } = config.pages.index;

const title = getTitle();

const Index = () => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    <SideHero illustration={illustration} />
    <Content heading="Hi, I'm Alessandra.">
      <p className="mb-6 text-xl">
        I'm a digital marketer.
        <br />
        Originally from Italy, currently in Ireland.
        <br />
        I’m a Bookworm, Dog Lover and a Hopeless Romantic.
        <br />
        I am as attracted to minimalism as to small (and useless) design
        objects.
        <br />
        You can find me frequenting small cafes or stationary shops.
      </p>
    </Content>
  </>
);

export default Index;
