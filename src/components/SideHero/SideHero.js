import PropTypes from 'prop-types';
import Navigation from './Navigation/Navigation';
import SocialSection from './SocialSection';

const SideHero = ({ illustration }) => (
  <div className="bg-primary p-8 relative">
    <div className="relative h-full">
      <Navigation />
      <SocialSection />
      <img
        src={illustration.path}
        className="absolute"
        alt={illustration.alt}
        style={{ marginBottom: -20, width: 670, right: -55, bottom: -30 }}
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
