import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import './index.scss'
import LogoV from '../../assets/images/logo-v.png' 
import LogoSubtitle from '../../assets/images/logo-sub.png' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            < img src={LogoV} alt='logo'/>
            < img className='sub-logo' src={LogoSubtitle} alt='vincent'/>
        </Link>
        <nav>
            <NavLink  activeClassName="active" to="/">
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>

            <NavLink  activeClassName="active" className="about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>

            <NavLink activeClassName="active" className="contact-link" to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>

        <ul>
            <li>
                <a 
                target="_black" 
                rel='noreferrer' 
                href='https://www.youtube.com/@VinSentcodes'
                >
                    <FontAwesomeIcon icon={faYoutube}  color="#4d4d4e" />
                </a>    
            </li>
            <li>
                <a 
                target="_black" 
                rel='noreferrer' 
                href='https://github.com/'
                >
                    <FontAwesomeIcon icon={faGithub}  color="#4d4d4e" />
                </a>    
            </li>
            <li>
                <a 
                target="_black" 
                rel='noreferrer' 
                href='https://www.linkedin.com/notifications/?filter=all'
                >
                    <FontAwesomeIcon icon={faLinkedin}  color="#4d4d4e" />
                </a>    
            </li>

            <li>
                <a 
                target="_black" 
                rel='noreferrer' 
                href='https://www.instagram.com/vinsentcodes/reels/'
                >
                    <FontAwesomeIcon icon={faInstagram}  color="#4d4d4e" />
                </a>    
            </li>

        </ul>


    </div>   
);

export default Sidebar