import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <NavLink to='/login' className={"main-nav-item"}>
                Sign in
            </NavLink>
            <NavLink to='/login'>
                Sign in
            </NavLink>
        </div>
    );
}
  
export default Navbar;