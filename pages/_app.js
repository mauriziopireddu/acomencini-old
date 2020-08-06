import PropTypes from 'prop-types';
import '../styles/index.css';

const MyApp = ({ Component, ...props }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
    <Component {...props} />
  </div>
);

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default MyApp;
