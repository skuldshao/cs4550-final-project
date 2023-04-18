import {createAsyncThunk}
    from "@reduxjs/toolkit";
import * as service
    from './user-service';

export const findUserThunk = createAsyncThunk(
    'users/findUser', async () =>
        await service.findUser()
)

export const findUserByIdThunk = createAsyncThunk(
    'user/findUserById', async (userId) =>
        await service.findUserById(userId)
)

export const createUserThunk = createAsyncThunk(
    'users/createUser',
    async (user) => {
        await service.createUser(user)
    }
)

export const deleteUserThunk = createAsyncThunk(
    'user/deleteUser',
    async(userId) => {
        await service.deleteUser(userId)
    }
)

export const updateUserThunk = createAsyncThunk(
    'user/updateUser',
    async(user) =>{
        await service.updateUser(user);
    }
)
