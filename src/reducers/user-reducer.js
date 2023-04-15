import { createSlice } from "@reduxjs/toolkit";
import {
    createUserThunk,
    deleteUserThunk,
    findUserThunk,
    updateUserThunk
} from "../services/user-thunk";

const initialState = {
    users: [],
    loading: false
}

const userSlice = createSlice({
                                  name: 'users',
                                  initialState,
                                  extraReducers:{
                                      [findUserThunk.pending]:
                                          (state) => {
                                              state.loading = true
                                              state.users = []
                                          },
                                      [findUserThunk.fulfilled]:
                                          (state,{ payload }) => {
                                          state.loading = false
                                          state.users = payload
                                          },
                                      [findUserThunk.rejected]:
                                          (state,action) => {
                                          state.loading = false
                                          state.users = action.error
                                          },
                                      [deleteUserThunk.fulfilled]:
                                          (state,{ payload }) => {
                                          state.loading = false
                                          state.users = state.users.filter(user => user._id !== payload)
                                          },
                                      [createUserThunk.fulfilled]:
                                          (state,{ payload }) => {
                                              state.loading = false
                                              state.users.push(payload)
                                          },
                                      [updateUserThunk.fulfilled]:
                                          (state,{ payload }) => {
                                              state.loading = false
                                              const userUpdate = state.users
                                                  .findIndex((user) => user._id === payload._id)
                                              state.users[userUpdate] = {
                                                  ...state.users[userUpdate],
                                                  ...payload
                                              }
                                          },
                                  },
                                  reducers: { }
                              });

export default userSlice.reducer;