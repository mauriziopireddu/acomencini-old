import {
  faGoodreads,
  faInstagram,
  faLinkedin,
  faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons';
import SocialIcon from './SocialIcon';
import { config } from '../../../config/config';

const { twitter, instagram, linkedin, goodreads } = config.social;

const SocialSection = () => (
  <div className="absolute bottom-0 z-10">
    <SocialIcon icon={faLinkedin} link={linkedin} />
    <SocialIcon icon={faTwitterSquare} link={twitter} />
    <SocialIcon icon={faInstagram} link={instagram} />
    <SocialIcon icon={faGoodreads} link={goodreads} />
  </div>
);

export default SocialSection;
