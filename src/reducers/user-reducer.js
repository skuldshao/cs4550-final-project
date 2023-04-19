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
    display: false,
    error: null,
    foundUser: null,
    displayFoundUser: false
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
                state.display = true
                state.loading = false
                state.users = payload
            },
        [findUserThunk.rejected]:
            (state, action) => {
                state.display = false
                state.loading = false
                state.error = action.error
            },
        [findUserByIdThunk.pending]:
            (state) => {
                state.loading = true
                state.displayFoundUser = false
                state.foundUser = null
            },
        [findUserByIdThunk.fulfilled]:
            (state, {payload}) => {
                state.loading = false
                state.displayFoundUser = true
                state.foundUser = payload
            },
        [findUserByIdThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.displayFoundUser = false
                state.foundUser = null
                state.error = action.error
            },
        [createUserThunk.fulfilled]:
            (state, {payload}) => {
                state.display = true
                state.loading = false
                state.users.push(payload)
            },
        [createUserThunk.pending]:
            (state, {payload}) => {
                state.display = false
                state.loading = true
            },
        [deleteUserThunk.fulfilled]:
            (state, {payload}) => {
                state.loading = false
                state.display = true
                state.users = state.users.filter(user => user._id !== payload)
            },
        [deleteUserThunk.pending]:
            (state, {payload}) => {
                state.loading = true
                state.display = false;
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