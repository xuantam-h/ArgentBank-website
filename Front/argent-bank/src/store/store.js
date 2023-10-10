import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/users/userSlice";

const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        user: userReducer,
    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

setupListeners(store.dispatch);

export default store;