import Head from 'next/head';
import HalfScreen from '../src/HalfScreen';
import Navigation from '../src/Navigation/Navigation';

const Index = () => (
  <>
    <Head>
      <title>Alessandra Comencini</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className="flex h-screen">
      <HalfScreen className="bg-orange-900">
        <Navigation />
        <p>Hero section</p>
      </HalfScreen>

      <HalfScreen>
        <div>
          <h2>Welcome all'amore</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            vel metus a urna feugiat molestie. Integer eget vestibulum urna.
            Nulla ultrices turpis ac odio auctor ultricies. Nunc ut purus
            commodo, feugiat metus sit amet, fermentum libero. Quisque id erat
            eu turpis hendrerit viverra quis sit amet tortor. Praesent ac purus
            vitae justo dapibus maximus vitae quis massa. Quisque vitae
            tincidunt nibh.
          </p>
        </div>
      </HalfScreen>
    </div>
  </>
);

export default Index;
