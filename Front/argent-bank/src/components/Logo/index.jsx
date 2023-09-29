import { NavLink } from 'react-router-dom';
import LogoImg from '../../assets/img/argentBankLogo.png'

const Logo = ({imageSrc, imageAlt, imageClass}) => {
    return (
        <NavLink to='/'>
            <img src={LogoImg} className={imageClass} alt={imageAlt} />
        </NavLink>
    );
}
  
export default Logo;