import {createSlice} from "@reduxjs/toolkit";
import {
    loginThunk, logoutThunk, profileThunk, registerThunk, updateUserThunk
} from "../services/user-auth-thunk";


const userAuthSlice = createSlice({
    name: "userAuth",
    initialState: {currentUser: null},
    reducers: {},
    extraReducers: {
        [loginThunk.fulfilled]: (state, {payload}) => {
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
        [registerThunk.fulfilled]: (state, {payload}) => {
            state.loadingUser = false
            state.currentUser = payload
        },
        [registerThunk.rejected]:
            (state, action) => {
                state.loadingUser = false
                state.error = action.error
            },
        [updateUserThunk.fulfilled]: (state, {payload}) => {
            state.loadingUser = false
            state.currentUser = payload
        },
        [updateUserThunk.rejected]:
            (state, action) => {
                state.loadingUser = false
                state.error = action.error
            },
        [profileThunk.fulfilled]: (state, {payload}) => {
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
export default userAuthSlice.reducer;