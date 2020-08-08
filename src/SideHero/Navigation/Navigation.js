import Link from 'next/link';
import Hamburger from './Hamburger';
import { NavigationItem } from './NavigationItem';
import config from '../../../config/config';

const { about, blog, portfolio, contact } = config.pages;

const Navigation = () => (
  <nav className="flex items-center justify-between flex-wrap">
    <div className="flex items-center flex-shrink-0 text-secondary mr-6">
      <span className="font-semibold text-2xl tracking-tight">
        <Link href="/">
          <a>{config.acronym}</a>
        </Link>
      </span>
    </div>
    <Hamburger />
    <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div className="text-sm lg:flex-grow"></div>
      <div>
        <NavigationItem text={about.name} path={about.path} />
        <NavigationItem text={blog.name} path={blog.path} />
        <NavigationItem text={portfolio.name} path={portfolio.path} />
        <NavigationItem text={contact.name} path={contact.path} />
      </div>
    </div>
  </nav>
);

export default Navigation;
