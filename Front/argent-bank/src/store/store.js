import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/users/userSlice";
import storage from 'redux-persist/lib/storage';
import { api } from "../API/api";
import { setupListeners } from '@reduxjs/toolkit/query';
import { persistReducer, persistStore, FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER } from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage,
}

// user states will be persisted in Redux
const user = persistReducer(persistConfig, userSlice);

const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        user,
    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }).concat(api.middleware),
});

setupListeners(store.dispatch);
export const persistor = persistStore(store);
export default store;
