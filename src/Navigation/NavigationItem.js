import PropTypes from 'prop-types';

export const NavigationItem = ({ text }) => (
  <a
    href="#responsive-header"
    className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4"
  >
    {text}
  </a>
);

NavigationItem.propTypes = {
  text: PropTypes.string.isRequired,
};
