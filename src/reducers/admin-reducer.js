import { createSlice } from "@reduxjs/toolkit";
import {createAdminThunk, deleteAdminThunk, findAdminByIdThunk, findAdminThunk, updateAdminThunk} from "../services/admin-thunk";

const initialState = {
    admins: [],
    loading: false
}

const adminSlice = createSlice({
       name:"admins",
       initialState,
       extraReducers:{
           [findAdminThunk.pending]:
               (state) => {
                   state.loading = true
                   state.admins = []
               },
           [findAdminThunk.fulfilled]:
               (state,{ payload }) => {
                   state.loading = false
                   state.admins = payload
               },
           [findAdminThunk.rejected]:
               (state,action) => {
                   state.loading = false
                   state.admins = action.error
               },
           [createAdminThunk.fulfilled]:
               (state,{ payload }) => {
                   state.loading = false
                   state.admins.push(payload)
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
           [deleteAdminThunk.fulfilled]:
               (state,{ payload }) => {
                   state.loading = false
                   state.admins = state.admins.filter(admin => admin._id !== payload)
               },
           [updateAdminThunk.fulfilled]:
               (state,{ payload }) => {
                   state.loading = false
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
