const currentYear = new Date().getFullYear();

const Footer = () => {
    return (
        <footer className="footer">
            <p className="footer-text">Copyright {currentYear} Argent Bank</p>
        </footer>
    );
  }
  
export default Footer;