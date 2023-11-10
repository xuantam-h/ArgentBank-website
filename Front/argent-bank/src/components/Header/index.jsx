import Logo from '../Logo';
import Navbar from '../Navbar';
import LogoImg from '../../assets/img/argentBankLogo.webp';

const Header = () => {
    return (
        <nav className="main-nav">
            <Logo imageSrc={LogoImg} imageClass="main-nav-logo-image" imageAlt="Argent Bank Logo" />
            <Navbar/>
        </nav>
    );
  }
  
export default Header;