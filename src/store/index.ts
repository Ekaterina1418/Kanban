import {
    TypedUseSelectorHook,
    useDispatch as dispatchHook,
    useSelector as selectorHook,
} from "react-redux";
import { configureStore } from "@reduxjs/toolkit"
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { RootReducer, RootState } from "./store";


const persistConfig = {
    key: "root",
    storage,
};
const persistedReducer = persistReducer(persistConfig, RootReducer)


export const store = configureStore({
    reducer: persistedReducer,
});

export const persistor = persistStore(store)

export type AppDispatch = typeof store.dispatch;
export const useDispatch = () => dispatchHook<AppDispatch>();
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;