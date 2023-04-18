import {createAsyncThunk}
    from "@reduxjs/toolkit";
import * as service
    from './admin-service';

export const findAdminThunk = createAsyncThunk(
    'admins/findAdmin', async () =>
        await service.findAdmin()
)

export const findAdminByIdThunk = createAsyncThunk(
    'admin/findAdminsById', async (adminId) =>
        await service.findAdminById(adminId)
)

export const createAdminThunk = createAsyncThunk(
    'admins/createAdmin',
    async (admin) => {
        await service.createAdmin(admin)
    }
)

export const deleteAdminThunk = createAsyncThunk(
    'admins/deleteAdmin',
    async(adminId) => {
        await service.deleteAdmin(adminId)
    }
)

export const updateAdminThunk = createAsyncThunk(
    'admins/updateAdmin',
    async(admin) =>{
        await service.updateAdmin(admin);
    }
)