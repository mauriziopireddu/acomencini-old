import PropTypes from 'prop-types';

export const NavigationItem = ({ text }) => (
  <a
    href="#responsive-header"
    className="block mt-4 md:inline-block lg:mt-0 text-outline ml-8"
  >
    {text}
  </a>
);

NavigationItem.propTypes = {
  text: PropTypes.string.isRequired,
};
