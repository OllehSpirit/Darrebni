import { combineReducers, configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import { persistStore } from 'redux-persist';
import productsReducer from './slices/productsSlice';
import cartSlice from './slices/cartSlice';

const authPersistConfig = {
    key: "auth",
    storage,
    blacklist: ["somethingTemporary"],
};
const reducers = persistReducer(authPersistConfig, combineReducers({
    products: productsReducer,
    cart:cartSlice
}));
export const makeStore = configureStore({
    reducer: {
        reducers,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});
export const persistor = persistStore(makeStore);

// // Infer the type of makeStore
// export type AppStore = ReturnType<typeof makeStore>
// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<AppStore['getState']>
// export type AppDispatch = AppStore['dispatch']
// Get the type of our store variable
export type AppStore = typeof makeStore
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore['dispatch']