import PropTypes from 'prop-types';
import Navigation from './Navigation/Navigation';
import SocialSection from './SocialSection';

const SideHero = ({ illustration }) => (
  <div className="bg-primary px-8 pt-8 relative">
    <div className="relative h-full">
      <Navigation />
      <SocialSection />
      <img
        src={illustration.path}
        className="lg:absolute bottom-0"
        alt={illustration.alt}
      />
    </div>
  </div>
);

SideHero.propTypes = {
  illustration: PropTypes.shape({
    path: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
};

export default SideHero;
