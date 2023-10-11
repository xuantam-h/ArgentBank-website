import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLogged: false,
};

const loginSlice = createSlice({ 
    name: 'login',
    initialState,
    reducers: {
        setLogOut: (state) => {
            state.userLogged = false;
            state.userProfile = {};
            state.setEdit = false;
        }
    }
});

const { actions, reducer } = loginSlice;
export const { setLogOut } = actions;

export default reducer;
