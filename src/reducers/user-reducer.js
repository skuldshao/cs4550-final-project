import {createSlice} from "@reduxjs/toolkit";
import {
    createUserThunk,
    deleteUserThunk,
    findUserByIdThunk,
    findUserThunk,
    updateUserThunk
} from "../services/user-thunk";

const initialState = {
    users: [],
    loading: false,
    display: false
}

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: {
        [findUserThunk.pending]:
            (state) => {
                state.loading = true
                state.display = false
                state.users = []
            },
        [findUserThunk.fulfilled]:
            (state, {payload}) => {
                console.log("users")
                console.log(payload)
                state.display = true
                state.loading = false
                state.users = payload
            },
        [findUserThunk.rejected]:
            (state, action) => {
                state.display = false
                state.loading = false
                state.users = action.error
            },
        [findUserByIdThunk.pending]:
            (state) => {
                state.loading = true
                state.display = false
                state.users = []
            },
        [findUserByIdThunk.fulfilled]:
            (state, {payload}) => {
                state.loading = false
                state.display = true
                state.users = payload
            },
        [findUserByIdThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.display = false
                state.error = action.error
            },
        [createUserThunk.fulfilled]:
            (state, {payload}) => {
                state.loading = false
                state.users.push(payload)
            },
        [deleteUserThunk.fulfilled]:
            (state, {payload}) => {
                state.loading = false
                state.users = state.users.filter(user => user._id !== payload)
            },
        [updateUserThunk.fulfilled]:
            (state, {payload}) => {
                state.loading = false
                const userUpdate = state.users
                    .findIndex((user) => user._id === payload._id)
                state.users[userUpdate] = {
                    ...state.users[userUpdate],
                    ...payload
                }
            },
    },
});

export default userSlice.reducer;