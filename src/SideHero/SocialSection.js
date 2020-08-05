import {
  faFacebookSquare,
  faGoodreads,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { SocialIcon } from './SocialIcon';

const SocialSection = () => (
  <div className="absolute bottom-0">
    <SocialIcon icon={faFacebookSquare} />
    <SocialIcon icon={faInstagram} />
    <SocialIcon icon={faLinkedin} />
    <SocialIcon icon={faGoodreads} />
  </div>
);

export default SocialSection;
