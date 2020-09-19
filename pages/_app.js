import PropTypes from 'prop-types';
import { MobileNavigationProvider } from '../src/providers/mobileNavigationProvider';
import { ViewportProvider } from '../src/providers/viewportProvider';
import '../styles/index.css';

const MyApp = ({ Component, ...props }) => (
  <ViewportProvider>
    <MobileNavigationProvider>
      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
        <Component {...props} />
      </div>
    </MobileNavigationProvider>
  </ViewportProvider>
);

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default MyApp;
