import { useEffect } from 'react';
import Account from '../../components/Account';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const UserPage = () => {

    const isLogged = useSelector((state) => state.user.userLogged);
    const user = useSelector((state) => state.user.userProfile);
    const navigate = useNavigate();

    // If the user is not logged in, you will be automatically redirected to Login component
    useEffect(() => {
      if (!isLogged) {
        navigate("/login");
      }
    }, [isLogged, navigate]);

    return (
      <div className="UserPage">
          <h1>Welcome back <br/>{user.firstName} {user.lastName}!</h1>
          <h2 className="sr-only">Accounts</h2>
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