import {createAsyncThunk}
    from "@reduxjs/toolkit"
import * as service
    from "./admin-service"

export const findAdminsThunk = createAsyncThunk(
    'admin/findAdmins', async () =>
        await service.findAdmins()
)

export const findAdminByIdThunk = createAsyncThunk(
    'admin/findAdminsBySongId', async (adminId) =>
        await service.findAdminById(adminId)
)

export const deleteAdminThunk = createAsyncThunk(
    'admin/deleteAdmin',
    async (adminId) => {
        await service.deleteAdmin(adminId)
        return adminId
    })

export const createAdminThunk = createAsyncThunk(
    'admin/createAdmin',
    async (admin) => {
        const newAdmin = await service.createAdmin(admin)
        return newAdmin
    })

export const updateAdminThunk =
    createAsyncThunk(
        'admin/updateAdmin',
        async (admin) =>
            await service.updateAdmin(admin)
    )

