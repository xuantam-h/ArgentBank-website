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
    }
});

const { actions, reducer } = userSlice;
export const { setUser, setEditMode } = actions;

export default reducer;
