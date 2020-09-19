import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

export const MobileNavigationItem = ({
  text,
  path,
  toggleMobileNavigation,
}) => {
  const router = useRouter();

  const handleClick = async e => {
    e.preventDefault();
    await router.push(path);
    toggleMobileNavigation();
  };

  return (
    <li>
      <a href={path} className="text-secondary text-3xl" onClick={handleClick}>
        {text}
      </a>
    </li>
  );
};

MobileNavigationItem.propTypes = {
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  toggleMobileNavigation: PropTypes.func.isRequired,
};
