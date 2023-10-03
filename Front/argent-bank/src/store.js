import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/users/userSlice";
import loginReducer from "./features/users/userSlice";

const store = configureStore({
    reducer: {
        user: userReducer,
        login: loginReducer,
    },
});

export default store;