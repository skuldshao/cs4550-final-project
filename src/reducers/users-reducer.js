import {createSlice}
    from "@reduxjs/toolkit";
import {deleteUserThunk, findUsersThunk, findUserByIdThunk, createUserThunk, updateUserThunk}
    from "../services/users-thunks";

const initialState = {
    users: [],
    loading: false
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    extraReducers: {
        [findUsersThunk.pending]:
            (state) => {
                state.loading = true
                state.users = []
            },
        [findUsersThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.users = payload
            },
        [findUsersThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            },
        [findUserByIdThunk.pending]:
            (state) => {
                state.loading = true
                state.users = []
            },
        [findUserByIdThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.users = payload
            },
        [findUserByIdThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            },
        [deleteUserThunk.fulfilled] :
            (state, { payload }) => {
                state.loading = false
                state.users = state.users
                    .filter(t => t._id !== payload)
            },
        [createUserThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.users.push(payload)
            },
        [updateUserThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                const userNdx = state.users
                    .findIndex((a) => a._id === payload._id)
                state.users[userNdx] = {
                    ...state.users[userNdx],
                    ...payload
                }
            }
    },
    reducers: { }
});

export default usersSlice.reducer;