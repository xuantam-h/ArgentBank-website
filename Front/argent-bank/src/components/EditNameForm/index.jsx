import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react';
import { setEditMode, updateUserInfo } from "../../features/users/userSlice"; 
import { useUpdateUserProfileMutation } from "../../API/api";

const EditNameForm = () => {
    // Get the user's info from the redux store
    const user = useSelector((state) => state.user.userProfile);

    // Get the token from the storage if it exists
    const token = sessionStorage.getItem('authToken');

    const [userName, setUserName] = useState('');
    const [message, setMessage] = useState('');

    const [updateUserProfile] = useUpdateUserProfileMutation();

    const dispatch = useDispatch();

    // When button save is clicked, update the username and display a confirmation message
    const handleSaveUsername = async (e) => {
        e.preventDefault();
        const authToken = `Bearer ${token}`;
        const response = await updateUserProfile({
            token: authToken,
            updatedUserName: userName,
        });
        dispatch(updateUserInfo(response));
        setMessage('The current username has been successfully updated !');
    }

    // Cancel button event and disabling edit mode
    const handleCancel = () => {
        dispatch(setEditMode());
    }

    return (
        <div className="header">
            <h1>Edit user info</h1>
            <form className="editname-form">
                <div className="input-wrapper input-row">
                    <label htmlFor="username">User name:</label>
                    <input id="username" type="text" placeholder={user.userName} value={userName} onChange={(e) => setUserName(e.target.value)} />
                </div>
                <div className="input-wrapper input-row">
                    <label htmlFor="firstname">First name:</label>
                    <input id="firstname" type="text" placeholder={user.firstName} readOnly/>
                </div>
                <div className="input-wrapper input-row">
                    <label htmlFor="lastname">Last name:</label>
                    <input id="lastname" type="text" placeholder={user.lastName} readOnly/>
                </div>
                <div className="button-wrapper">
                    <button className="edit-button" onClick={handleSaveUsername}>Save</button>
                    <button className="edit-button" onClick={handleCancel}>Cancel</button>
                </div>
            </form>
            {message && 
                <p className="success-message">{message}</p>
            }
        </div>
    );
}

export default EditNameForm;