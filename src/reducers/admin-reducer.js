import {createSlice} from "@reduxjs/toolkit";
import {
    createAdminThunk,
    deleteAdminThunk,
    findAdminByIdThunk,
    findAdminThunk,
    updateAdminThunk
} from "../services/admin-thunk";

const initialState = {
    admins: [],
    loadingAdmin: false,
    displayAdmin: false
}

const adminSlice = createSlice({
        name: "admins",
        initialState,
        extraReducers: {
            [findAdminThunk.pending]:
                (state) => {
                    state.loadingAdmin = true
                    state.displayAdmin = false;
                    state.admins = []
                },
            [findAdminThunk.fulfilled]:
                (state, {payload}) => {
                    state.loadingAdmin = false
                    state.displayAdmin = true;
                    state.admins = payload
                },
            [findAdminThunk.rejected]:
                (state, action) => {
                    state.loadingAdmin = false
                    state.displayAdmin = false;
                    state.admins = action.error
                },
            [createAdminThunk.fulfilled]:
                (state, {payload}) => {
                    state.loadingAdmin = false
                    state.admins.push(payload)
                },
            [createAdminThunk.pending]:
                (state, {payload}) => {
                    state.loadingAdmin = true
                },
            [findAdminByIdThunk.fulfilled]:
                (state, {payload}) => {
                    state.loadingAdmin = false
                    state.admins = payload
                },
            [findAdminByIdThunk.rejected]:
                (state, action) => {
                    state.loadingAdmin = false
                    state.error = action.error
                },
            [deleteAdminThunk.fulfilled]:
                (state, {payload}) => {
                    state.loadingAdmin = false
                    state.admins = state.admins.filter(admin => admin._id !== payload)
                },
            [updateAdminThunk.fulfilled]:
                (state, {payload}) => {
                    state.loadingAdmin = false
                    const adminUpdate = state.admins
                        .findIndex((admin) => admin._id === payload._id)
                    state.admins[adminUpdate] = {
                        ...state.admins[adminUpdate],
                        ...payload
                    }
                },
        }
    }
)

export default adminSlice.reducer;