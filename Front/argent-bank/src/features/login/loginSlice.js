import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    authToken: '',
};

const loginSlice = createSlice({ 
    name: 'login',
    initialState,
    reducers: {
        setToken: (state, { payload }) => {
            state.authToken = payload.data.body;
        },
    }
});

const { actions, reducer } = loginSlice;
export const { setToken } = actions;

export default reducer;
