import { NavLink, useNavigate } from "react-router-dom";
import { setLogOut } from '../../features/users/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import Icon from "../Icon";

const Navbar = () => {
    // Retrieving state from redux store
    const isLogged = useSelector((state)=> state.user.userLogged);
    const user = useSelector((state) => state.user.userProfile);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    // Sign-out click event -> modifying userLogged state from the redux store, clearing userProfile
    const handleSignOut = () => {
        dispatch(setLogOut());
        // Removing the saved token from the session storage memory
        sessionStorage.removeItem('authToken');
        navigate("/");
    }

    return (
        <div>
            {isLogged && 
            <NavLink to='/user' className={"main-nav-item"}>
                <Icon iconClass="fa fa-user-circle"/> 
                {user?.userName}
            </NavLink>
            }

            {isLogged ? (
            <button className="main-nav-item" onClick={() => handleSignOut()}>
                <Icon iconClass="fa fa-sign-out"/>
                Sign out
            </button>
            ) : ( 
            <NavLink to='/login' className={"main-nav-item"}>
                <Icon iconClass="fa fa-user-circle"/>
                Sign in
            </NavLink>
            )}
        </div>
    );
}
  
export default Navbar;