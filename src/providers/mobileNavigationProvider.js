import { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import MobileNavigation from '../components/MobileNavigation';

export const mobileNavigationContext = createContext({});

export const MobileNavigationProvider = ({ children }) => {
  const [open, setOpen] = useState(true);

  const toggleMobileNavigation = () => setOpen(isOpen => !isOpen);

  return (
    <mobileNavigationContext.Provider value={{ toggleMobileNavigation }}>
      {open && (
        <MobileNavigation toggleMobileNavigation={toggleMobileNavigation}>
          hello
        </MobileNavigation>
      )}
      {!open && children}
    </mobileNavigationContext.Provider>
  );
};

MobileNavigationProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
