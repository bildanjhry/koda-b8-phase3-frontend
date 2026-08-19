import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    session: {}
}

const reducers = {
    createSession:function(state, action){
        state.session = {...action.payload}
    },
    clearSession:function(state, action){
        state.session = {}
    }
}

const session = createSlice({
    name:"session",
    initialState,
    reducers
})

export default session.reducer
export const {createSession, clearSession} = session.actions