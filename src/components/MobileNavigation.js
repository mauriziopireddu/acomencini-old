import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { config } from '../../config/config';
import { MobileNavigationItem } from './MobileNavigationLink';

const {
  pages: { index, about, blog, portfolio, contact },
} = config;

const closeMenuIcon = {
  position: 'absolute',
  top: '40px',
  right: '40px',
};

const MobileNavigation = ({ toggleMobileNavigation }) => (
  <div className="relative h-screen bg-primary flex justify-center items-center">
    <FontAwesomeIcon
      aria-label="Close navigation menu"
      icon={faTimes}
      style={closeMenuIcon}
      className="text-secondary cursor-pointer"
      size="2x"
      onClick={toggleMobileNavigation}
    />

    <ul className="space-y-10">
      <MobileNavigationItem
        text={index.name}
        path={index.path}
        toggleMobileNavigation={toggleMobileNavigation}
      />
      <MobileNavigationItem
        text={about.name}
        path={about.path}
        toggleMobileNavigation={toggleMobileNavigation}
      />
      <MobileNavigationItem
        text={blog.name}
        path={blog.path}
        toggleMobileNavigation={toggleMobileNavigation}
      />
      <MobileNavigationItem
        text={portfolio.name}
        path={portfolio.path}
        toggleMobileNavigation={toggleMobileNavigation}
      />
      <MobileNavigationItem
        text={contact.name}
        path={contact.path}
        toggleMobileNavigation={toggleMobileNavigation}
      />
    </ul>
  </div>
);

MobileNavigation.propTypes = {
  toggleMobileNavigation: PropTypes.func.isRequired,
};

export default MobileNavigation;
