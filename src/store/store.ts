import { combineReducers } from "@reduxjs/toolkit";
import ticketsReducer from "./tickets/tickets.slice";

export const RootReducer = combineReducers({
    tickets: ticketsReducer,
});


export type RootState = ReturnType<typeof RootReducer>;
