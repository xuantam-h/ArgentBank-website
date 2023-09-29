import Logo from '../Logo';
import Navbar from '../Navbar';

const Header = () => {
    return (
        <nav className="main-nav">
            <Logo imageSrc="." imageClass="main-nav-logo-image" imageAlt="Argent Bank Logo" />
            <Navbar/>
        </nav>
    );
  }
  
export default Header;