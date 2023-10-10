import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userLogged: false,
    userProfile: {},
    setEdit: false,
};

const userSlice = createSlice({ 
    name: 'user',
    initialState,
    reducers: {
        setUser: (state) => {
            state.userLogged = true;
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

const { actions, reducer } = userSlice;
export const { setUser, setEditMode, setLogOut } = actions;

export default reducer;
