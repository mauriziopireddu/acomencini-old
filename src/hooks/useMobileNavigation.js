import { useContext } from 'react';
import { mobileNavigationContext } from '../providers/mobileNavigationProvider';

export const useMobileNavigation = () => useContext(mobileNavigationContext);
