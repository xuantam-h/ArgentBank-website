import Account from '../../components/Account';

const UserPage = () => {
    return (
      <div className="UserPage">
          <h1>Welcome back <br/>!</h1>
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