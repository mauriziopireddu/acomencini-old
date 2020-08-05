import Hamburger from './Hamburger';
import { NavigationItem } from './NavigationItem';

const Navigation = () => (
  <nav className="flex items-center justify-between flex-wrap">
    <div className="flex items-center flex-shrink-0 text-outline mr-6">
      <span className="font-semibold text-2xl tracking-tight">AC</span>
    </div>
    <Hamburger />
    <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div className="text-sm lg:flex-grow"></div>
      <div>
        <NavigationItem text="About Me" />
        <NavigationItem text="Blog" />
        <NavigationItem text="Portfolio" />
        <NavigationItem text="Contact" />
      </div>
    </div>
  </nav>
);

export default Navigation;
