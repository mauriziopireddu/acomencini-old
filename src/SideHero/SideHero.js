import Navigation from './Navigation/Navigation';
import SocialSection from './SocialSection';

const SideHero = () => (
  <div className="bg-primary p-8">
    <div className="relative h-full">
      <Navigation />
      <SocialSection />
    </div>
  </div>
);

export default SideHero;
