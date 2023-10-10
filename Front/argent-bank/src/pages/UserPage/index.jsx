import { useEffect } from 'react';
import Account from '../../components/Account';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setEditMode } from '../../features/users/userSlice';
import EditNameForm from '../../components/EditNameForm';

const UserPage = () => {

    const isLogged = useSelector((state) => state.user.userLogged);
    const user = useSelector((state) => state.user.userProfile);
    const editMode = useSelector((state) => state.user.setEdit);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const toogleEditMode = () => {
      dispatch(setEditMode());
    }

    // If the user is not logged in, you will be automatically redirected to Login component
    useEffect(() => {
      if (!isLogged) {
        navigate("/login");
      }
    }, [isLogged, navigate]);

    return (
      <div className="UserPage">
          {editMode ? (
            <EditNameForm/>
          ) : (
            <>
            <h1>Welcome back <br/>{user.firstName} {user.lastName}!</h1>
            <h2 className="sr-only">Accounts</h2>
            <button className="edit-button" onClick={toogleEditMode}>Edit Name</button>
            </>
          )}

          <Account 
          accountAmount={"$2,082.79"}
          accountDescription={"Available Balance"}
          accountType={"Argent Bank Checking (x8349)"}
          />
          <Account 
          accountAmount={"$10,928.42"}
          accountDescription={"Available Balance"}
          accountType={"Argent Bank Savings (x6712)"}
          />
          <Account 
          accountAmount={"$184.30"}
          accountDescription={"Available Balance"}
          accountType={"Argent Bank Checking (x8349)"}
          />
      </div>
    );
  }
  
  export default UserPage;