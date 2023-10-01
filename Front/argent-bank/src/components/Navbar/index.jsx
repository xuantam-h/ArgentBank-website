import { NavLink } from "react-router-dom";
import Icon from "../Icon";

const Navbar = () => {
    return (
        <div>
            <NavLink to='/login' className={"main-nav-item"}>
                <Icon iconClass="fa fa-user-circle"/> Sign in
            </NavLink>
            <NavLink to='/login' className={"main-nav-item"}>
                Sign Out
            </NavLink>
        </div>
    );
}
  
export default Navbar;