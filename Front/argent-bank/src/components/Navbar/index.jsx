import { NavLink } from "react-router-dom";
import Icon from "../Icon";
import { setLogOut } from '../../features/users/userSlice';
import { useDispatch, useSelector } from 'react-redux';

const Navbar = () => {

    const isLogged = useSelector((state)=> state.user.userLogged);
    const dispatch = useDispatch();

    const handleSignOut = () => {
        dispatch(setLogOut());
    }

    return (
        <div>
            {isLogged ?
            <button className="main-nav-item" onClick={() => handleSignOut()}>
                <Icon iconClass="fa fa-sign-out"/> Sign out
            </button>
            : 
            <NavLink to='/login' className={"main-nav-item"}>
                <Icon iconClass="fa fa-user-circle"/> Sign in
            </NavLink>
            }
        </div>
    );
}
  
export default Navbar;