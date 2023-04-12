import {createAsyncThunk}
    from "@reduxjs/toolkit"
import * as service
    from "./users-service"

export const findUsersThunk = createAsyncThunk(
    'user/findUsers', async () =>
        await service.findUsers()
)

export const findUserByIdThunk = createAsyncThunk(
    'user/findUsersBySongId', async (userId) =>
        await service.findUserById(userId)
)

export const deleteUserThunk = createAsyncThunk(
    'user/deleteUser',
    async (userId) => {
        await service.deleteUser(userId)
        return userId
    })

export const createUserThunk = createAsyncThunk(
    'user/createUser',
    async (user) => {
        const newUser = await service.createUser(user)
        return newUser
    })

export const updateUserThunk =
    createAsyncThunk(
        'user/updateUser',
        async (user) =>
            await service.updateUser(user)
    )

