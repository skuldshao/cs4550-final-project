import { createSlice } from "@reduxjs/toolkit";
import {
    loginThunk, logoutThunk
} from "../services/admin-auth-thunk";


const authSlice = createSlice({
    name: "auth",
    initialState: { currentAdmin: null },
    reducers: {},
    extraReducers: {
        [loginThunk.fulfilled]: (state, { payload }) => {
            state.loadingAdmin = false
            state.currentAdmin = payload
        },
        [loginThunk.rejected]:
            (state, action) => {
                state.loadingAdmin = false
                state.error = action.error
            },
        [logoutThunk.fulfilled]: (state) => {
            state.loadingAdmin = false
            state.currentAdmin = null
        },
        [logoutThunk.rejected]:
            (state, action) => {
                state.loadingAdmin = false
                state.error = action.error
            },
    },
});
export default adminAuthSlice.reducer;