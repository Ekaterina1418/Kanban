import {
    TypedUseSelectorHook,
    useDispatch as dispatchHook,
    useSelector as selectorHook,
} from "react-redux";
import { configureStore } from "@reduxjs/toolkit"




import { RootReducer, RootState } from "./store";

export const store = configureStore({
    reducer: RootReducer,
});


export type AppDispatch = typeof store.dispatch;
export const useDispatch = () => dispatchHook<AppDispatch>();
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;