import {createSlice}
    from "@reduxjs/toolkit";
import {deleteAdminThunk, findAdminsThunk, findAdminByIdThunk, createAdminThunk, updateAdminThunk}
    from "../services/admin-thunks";

const initialState = {
    admins: [],
    loading: false
}

const adminsSlice = createSlice({
    name: 'admins',
    initialState,
    extraReducers: {
        [findAdminsThunk.pending]:
            (state) => {
                state.loading = true
                state.admins = []
            },
        [findAdminsThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.admins = payload
            },
        [findAdminsThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            },
        [findAdminByIdThunk.pending]:
            (state) => {
                state.loading = true
                state.admins = []
            },
        [findAdminByIdThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.admins = payload
            },
        [findAdminByIdThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            },
        [deleteAdminThunk.fulfilled] :
            (state, { payload }) => {
                state.loading = false
                state.admins = state.admins
                    .filter(t => t._id !== payload)
            },
        [createAdminThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.admins.push(payload)
            },
        [updateAdminThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                const adminNdx = state.admins
                    .findIndex((a) => a._id === payload._id)
                state.admins[adminNdx] = {
                    ...state.admins[adminNdx],
                    ...payload
                }
            }
    },
    reducers: { }
});

export default adminsSlice.reducer;