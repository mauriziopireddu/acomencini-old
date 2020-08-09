import { useContext } from 'react';
import { viewportContext } from '../providers/viewportProvider';

export const useViewport = () => useContext(viewportContext);
