import { createSlice } from "@reduxjs/toolkit";
import {
    loginThunk, logoutThunk
} from "../services/user-auth-thunk";


const authSlice = createSlice({
    name: "auth",
    initialState: { currentUser: null },
    reducers: {},
    extraReducers: {
        [loginThunk.fulfilled]: (state, { payload }) => {
            state.loadingUser = false
            state.currentUser = payload
        },
        [loginThunk.rejected]:
            (state, action) => {
                state.loadingUser = false
                state.error = action.error
            },
        [logoutThunk.fulfilled]: (state) => {
            state.loadingUser = false
            state.currentUser = null
        },
        [logoutThunk.rejected]:
            (state, action) => {
                state.loadingUser = false
                state.error = action.error
            },
    },
});
export default userAuthSlice.reducer;