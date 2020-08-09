import Link from 'next/link';
import Hamburger from './Hamburger';
import { NavigationItem } from './NavigationItem';
import { config } from '../../../../config/config';
import { ShowFromSize } from '../../../common/responsive/ShowFromSize';
import { HideFromSize } from '../../../common/responsive/HideFromSize';

const { about, blog, portfolio, contact } = config.pages;

const Navigation = () => (
  <nav className="flex items-center justify-between flex-wrap">
    <div className="flex items-center flex-shrink-0 text-secondary">
      <span className="font-semibold text-2xl tracking-tight">
        <Link href="/">
          <a>{config.acronym}</a>
        </Link>
      </span>
    </div>
    <HideFromSize size="lg">
      <Hamburger />
    </HideFromSize>
    <ShowFromSize size="lg">
      <div className="inline">
        <NavigationItem text={about.name} path={about.path} />
        <NavigationItem text={blog.name} path={blog.path} />
        <NavigationItem text={portfolio.name} path={portfolio.path} />
        <NavigationItem text={contact.name} path={contact.path} />
      </div>
    </ShowFromSize>
  </nav>
);

export default Navigation;
