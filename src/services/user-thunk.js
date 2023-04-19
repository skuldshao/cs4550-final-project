import {createAsyncThunk}
    from "@reduxjs/toolkit";
import * as service
    from './user-service';

export const findUserThunk = createAsyncThunk(
    'users/findUser', async () =>
        await service.findUser()
)

export const findUserByIdThunk = createAsyncThunk(
    'user/findUsersById', async (userId) =>
        await service.findUserById(userId)
)

export const findUserFollowersByIdThunk = createAsyncThunk(
    'user/findUsersFollowersById', async (userId) =>
        await service.findUserFollowersById(userId)
)

export const createUserThunk = createAsyncThunk(
    'users/createUser',
    async (user) => await service.createUser(user)
)

export const deleteUserThunk = createAsyncThunk(
    'user/deleteUser',
    async (userId) => {
        await service.deleteUser(userId)
        return userId
    }
)

export const updateUserThunk = createAsyncThunk(
    'user/updateUser',
    async (user) => {
        console.log("updating")
        return await service.updateUser(user);
    }
)
