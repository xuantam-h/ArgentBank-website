import { NavLink } from 'react-router-dom';

const Logo = ({imageSrc, imageAlt, imageClass}) => {
    return (
        <NavLink to='/' className="main-nav-logo">
            <img src={imageSrc} className={imageClass} alt={imageAlt} />
        </NavLink>
    );
}
  
export default Logo;