import PropTypes from 'prop-types';

const HalfScreen = ({ children, className }) => (
  <div className={`w-1/2 ${className}`}>{children}</div>
);

HalfScreen.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

HalfScreen.defaultProps = {
  className: '',
};

export default HalfScreen;
