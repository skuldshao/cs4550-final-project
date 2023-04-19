import { createSlice } from "@reduxjs/toolkit";
import {
    loginThunk, logoutThunk, profileThunk, registerThunk, updateAdminThunk
} from "../services/admin-auth-thunk";


const adminAuthSlice = createSlice({
    name: "adminAuth",
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
        [registerThunk.rejected]:
            (state, action) => {
                state.loadingUser = false
                state.error = action.error
            },
        [updateAdminThunk.fulfilled]: (state, { payload }) => {
            state.loadingUser = false
            state.currentUser = payload
        },
        [updateAdminThunk.rejected]:
            (state, action) => {
                state.loadingUser = false
                state.error = action.error
            },
        [profileThunk.fulfilled]: (state, { payload }) => {
            state.loadingUser = false
            state.currentUser = payload
        },
        [profileThunk.rejected]:
            (state, action) => {
                state.loadingUser = false
                state.error = action.error
            },
    },
});
export default adminAuthSlice.reducer;