import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

const SocialIcon = ({ icon, link }) => (
  <a href={link} target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon
      icon={icon}
      className="text-secondary mr-3 mb-8"
      size="lg"
    />
  </a>
);

export default SocialIcon;

SocialIcon.propTypes = {
  icon: PropTypes.object.isRequired,
  link: PropTypes.string.isRequired,
};
