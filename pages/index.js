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
    <Content heading="Hi, I'm Alessandra">
      <p className="mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        eleifend quis lectus sed fermentum. Praesent dignissim eleifend est ac
        mollis. Aliquam mattis, felis eget ultrices iaculis, sem nibh tincidunt
        lacus, eu malesuada nisl ex id sem. Sed eget sagittis urna. Pellentesque
        habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas. Quisque viverra pulvinar justo, sit amet sagittis dui fermentum
        vitae. Vestibulum in tellus metus.
      </p>
      <p className="text-xl font-semibold italic">Something catchy</p>
    </Content>
  </>
);

export default Index;
