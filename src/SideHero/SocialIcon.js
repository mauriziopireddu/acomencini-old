import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

export const SocialIcon = ({ icon }) => (
  <FontAwesomeIcon icon={icon} className="text-outline mr-3" size="lg" />
);

SocialIcon.propTypes = {
  icon: PropTypes.object.isRequired,
};
