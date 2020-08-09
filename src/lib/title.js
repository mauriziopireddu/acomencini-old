import { config } from '../../config/config';

const { persona } = config;

const SEPARATOR = ' | ';

export const getTitle = pageName => {
  if (!pageName) {
    return persona;
  }
  return `${pageName}${SEPARATOR}${persona}`;
};
