import PropTypes from 'prop-types';
import Link from 'next/link';

export const NavigationItem = ({ text, path }) => (
  <Link href={path}>
    <a className="inline text-secondary ml-8">{text}</a>
  </Link>
);

NavigationItem.propTypes = {
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
