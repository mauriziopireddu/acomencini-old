import PropTypes from 'prop-types';
import { useViewport } from '../../hooks/useViewport';
import { Sizes } from './ShowFromSize';

export const HideFromSize = ({ children, size }) => {
  const { width } = useViewport();

  if (width <= Sizes[size]) {
    return children;
  }

  return null;
};

HideFromSize.propTypes = {
  children: PropTypes.element.isRequired,
  size: PropTypes.oneOf(Object.keys(Sizes)).isRequired,
};
