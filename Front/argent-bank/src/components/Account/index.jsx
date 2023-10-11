import Button from '../Button';

const Account = ({accountAmount, accountType, accountNumber, accountDescription}) => {
    return (
        <section className="account">
            <div className="account-content-wrapper">
                <h3 className="account-title">Argent Bank {accountType} {accountNumber}</h3>
                <p className="account-amount">{accountAmount}</p>
                <p className="account-amount-description">{accountDescription}</p>
            </div>
            <div className="account-content-wrapper cta">
                <Button btnClass='transaction-button' btnText='View transactions' />
            </div>
        </section>
    );
}
  
export default Account;