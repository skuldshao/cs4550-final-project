import {createAsyncThunk} from "@reduxjs/toolkit";
import * as authService from "./admin-auth-service";


export const loginThunk = createAsyncThunk(
    "adminAuth/login", async (credentials) => {
        const user = await authService.login(credentials);
        return user;
    }
);

export const logoutThunk = createAsyncThunk(
    "adminAuth/logout", async () => {
        return await authService.logout();
    });

export const profileThunk = createAsyncThunk(
    "adminAuth/profile", async () => {
        return await authService.profile();
    });

export const updateAdminThunk = createAsyncThunk(
    "adminAuth/updateAdmin", async (admin) => {
        await authService.updateAdmin(admin);
        return admin;
    }
);

export const registerThunk = createAsyncThunk(
    "adminAuth/registerUser", async (admin) => {
        return await authService.register(admin);
    }
);