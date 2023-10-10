import Button from "../Button";
import { useSelector } from "react-redux";

const EditNameForm = () => {
    const user = useSelector((state) => state.user.userProfile);
    const [userName, setUserName] = useState('');

    return (
        <h1>Edit user info</h1>
        <form className="editNameForm">
            <label>User name:</label>
            <input type="text" placeholder={user.userName} onChange={(e) => setUserName(e.target.value)} />
            <label>First name:</label>
            <input type="text" placeholder={user.firstName} readOnly />
            <label>Last name:</label>
            <input type="text" placeholder={user.lastName} readOnly /> 
            <Button btnClass={"edit-button"} btnText={"Save"}/>
            <Button btnClass={"edit-button"} btnText={"Cancel"}/>
        </form>
    );
}
  
export default EditNameForm;