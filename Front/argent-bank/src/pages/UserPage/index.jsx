import { useEffect } from 'react';
import Account from '../../components/Account';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setEditMode } from '../../features/users/userSlice';
import EditNameForm from '../../components/EditNameForm';

const UserPage = () => {
    // Retrieving states from the redux store
    const isLogged = useSelector((state) => state.user.userLogged);
    const user = useSelector((state) => state.user.userProfile);
    const editMode = useSelector((state) => state.user.setEdit);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Toggle edit mode
    const toogleEditMode = () => {
      dispatch(setEditMode());
    }

    // If the user is not logged in, you will be automatically redirected to the homepage
    useEffect(() => {
      if (!isLogged) {
        navigate("/");
      }
    }, [isLogged, navigate]);

    return (
      <main className="main bg-dark">
        <div className="UserPage">

            {editMode ? (
              <EditNameForm/>
            ) : (
              <div className="header">
                <h1>Welcome back <br/>{user?.firstName} {user?.lastName}!</h1>
                <h2 className="sr-only">Accounts</h2>
                <button className="edit-button" onClick={toogleEditMode}>Edit Name</button>
              </div>
            )}

            <Account 
            accountCurrency={"$"}
            accountAmount={"2,082.79"}
            accountDescription={"Available Balance"}
            accountType={"Checking"}
            accountNumber={"(x8349)"}
            />
            <Account 
            accountCurrency={"$"}
            accountAmount={"10,928.42"}
            accountDescription={"Available Balance"}
            accountType={"Savings"}
            accountNumber={"(x6712)"}
            />
            <Account 
            accountCurrency={"$"}
            accountAmount={"184.30"}
            accountDescription={"Available Balance"}
            accountType={"Credit Card"}
            accountNumber={"(x8349)"}
            />
        </div>
      </main>
    );
  }
  
  export default UserPage;