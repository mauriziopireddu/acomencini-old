import {
  faFacebookSquare,
  faGoodreads,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import SocialIcon from './SocialIcon';
import config from '../../config/config';

const { facebook, instagram, linkedin, goodreads } = config.social;

const SocialSection = () => (
  <div className="absolute bottom-0">
    <SocialIcon icon={faFacebookSquare} link={facebook} />
    <SocialIcon icon={faInstagram} link={instagram} />
    <SocialIcon icon={faLinkedin} link={linkedin} />
    <SocialIcon icon={faGoodreads} link={goodreads} />
  </div>
);

export default SocialSection;
