import PropTypes from 'prop-types';
import '../styles/index.css';

const MyApp = ({ Component, ...props }) => <Component {...props} />;

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default MyApp;
