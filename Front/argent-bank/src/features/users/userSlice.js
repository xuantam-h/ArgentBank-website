import { createSlice } from "@reduxjs/toolkit";

// Initial states defined in the slice
const initialState = {
    userLogged: false,
    userProfile: {},
    setEdit: false,
};

const userSlice = createSlice({ 
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, { payload }) => {
            state.userLogged = true;
            state.userProfile = payload.data.body;
        },
        updateUserInfo: (state, { payload }) => {
            state.userProfile.userName = payload.data.body.userName;
        },
        setEditMode: (state) => {
            state.setEdit = !state.setEdit;
        },
        setLogOut: (state) => {
            state.userLogged = false;
            state.userProfile = {};
            state.setEdit = false;
        }
    }
});

// Extract actions and reducer
const { actions, reducer } = userSlice;
// Export each action
export const { setUser, updateUserInfo, setEditMode, setLogOut } = actions;

export default reducer;
