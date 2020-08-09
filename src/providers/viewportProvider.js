import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const viewportContext = createContext({});

export const ViewportProvider = ({ children }) => {
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return (
    <viewportContext.Provider value={{ width, height }}>
      {children}
    </viewportContext.Provider>
  );
};

ViewportProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
