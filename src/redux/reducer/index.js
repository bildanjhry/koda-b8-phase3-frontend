import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";

import session from "./session.js"
import storage from "redux-persist/es/storage"

const persistReducerSessionConfig = {
    key:"session",
    storage
}

const reducer = combineReducers({
    session:persistReducer(persistReducerSessionConfig, session)
})

export default reducer