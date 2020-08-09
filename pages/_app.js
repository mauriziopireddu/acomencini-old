import PropTypes from 'prop-types';
import { ViewportProvider } from '../src/providers/viewportProvider';
import '../styles/index.css';

const MyApp = ({ Component, ...props }) => (
  <ViewportProvider>
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
      <Component {...props} />
    </div>
  </ViewportProvider>
);

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default MyApp;
