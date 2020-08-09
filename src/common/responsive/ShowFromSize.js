import PropTypes from 'prop-types';
import { useViewport } from '../../hooks/useViewport';

export const Sizes = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
};

export const ShowFromSize = ({ children, size }) => {
  const { width } = useViewport();

  if (width >= Sizes[size]) {
    return children;
  }

  return null;
};

ShowFromSize.propTypes = {
  children: PropTypes.element.isRequired,
  size: PropTypes.oneOf(Object.keys(Sizes)),
};
