import {createSlice} from "@reduxjs/toolkit";
import {
    loginThunk, logoutThunk, profileThunk, registerThunk, updateAdminThunk
} from "../services/admin-auth-thunk";


const adminAuthSlice = createSlice({
    name: "adminAuth",
    initialState: {currentAdmin: null, loadingAdmin: false},
    reducers: {},
    extraReducers: {
        [loginThunk.fulfilled]: (state, {payload}) => {
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
        [registerThunk.fulfilled]: (state, {payload}) => {
            state.loadingAdmin = false
            state.currentUser = payload
        },
        [registerThunk.rejected]:
            (state, action) => {
                state.loadingAdmin = false
                state.error = action.error
            },
        [updateAdminThunk.fulfilled]: (state, {payload}) => {
            state.loadingAdmin = false
            state.currentUser = payload
        },
        [updateAdminThunk.rejected]:
            (state, action) => {
                state.loadingAdmin = false
                state.error = action.error
            },
        [updateAdminThunk.pending]:
            (state, action) => {
                state.loadingAdmin = true
            },
        [profileThunk.fulfilled]: (state, {payload}) => {
            state.currentUser = payload
            state.loadingAdmin = false
        },
        [profileThunk.pending]: (state, {payload}) => {
            state.loadingAdmin = true
        },
        [profileThunk.rejected]:
            (state, action) => {
                state.loadingAdmin = false
                state.error = action.error
            },
    },
});
export default adminAuthSlice.reducer;