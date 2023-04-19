import { createSlice } from "@reduxjs/toolkit";
import {
    loginThunk, logoutThunk
} from "../services/admin-auth-thunk";


const authSlice = createSlice({
    name: "auth",
    initialState: { currentUser: null },
    reducers: {},
    extraReducers: {
        [loginThunk.fulfilled]: (state, { payload }) => {
            state.currentUser = payload;
        },
    },
});
export default userSlice.reducer;