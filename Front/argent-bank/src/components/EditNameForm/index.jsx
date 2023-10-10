import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react';
import { setEditMode, updateUserInfo } from "../../features/users/userSlice"; 
import { useUpdateUserProfileMutation } from "../../API/api";

const EditNameForm = () => {
    const user = useSelector((state) => state.user.userProfile);
    const token = sessionStorage.getItem('authToken');

    const [userName, setUserName] = useState('');

    const [updateUserProfile] = useUpdateUserProfileMutation();

    const dispatch = useDispatch();

    // When button save is clicked, update the username
    const handleSaveUser = async (e) => {
        e.preventDefault();
        const authToken = `Bearer ${token}`;
        const response = await updateUserProfile({
            token: authToken,
            updatedUserName: userName,
        });
        dispatch(updateUserInfo(response));
    }

    // Cancel button event and disabling edit mode
    const handleCancel = () => {
        dispatch(setEditMode());
    }

    return (
        <>
        <h1>Edit user info</h1>
        <form className="editNameForm">
            <label>User name:</label>
            <input type="text" placeholder={user.userName} value={userName} onChange={(e) => setUserName(e.target.value)} />
            <label>First name:</label>
            <input type="text" placeholder={user.firstName} readOnly />
            <label>Last name:</label>
            <input type="text" placeholder={user.lastName} readOnly /> 
            <button className="edit-button" onClick={handleSaveUser}>Save</button>
            <button className="edit-button" onClick={handleCancel}>Cancel</button>
        </form>
        </>
    );
}

export default EditNameForm;