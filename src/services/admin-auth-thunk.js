import { createAsyncThunk } from "@reduxjs/toolkit";
import * as authService from "./admin-auth-service";


export const loginThunk = createAsyncThunk(
    "user/login", async (credentials) => {
        const user = await authService.login(credentials);
        return user;
    }
);

export const logoutThunk = createAsyncThunk(
    "auth/logout", async () => {
        return await authService.logout();
    });

export const profileThunk = createAsyncThunk(
    "userAuth/profile", async () => {
        return await authService.profile();
    });

export const updateUserThunk = createAsyncThunk(
    "userAuth/updateUser", async (admin) => {
        await authService.updateAdmin(admin);
        return admin;
    }
);

export const registerThunk = createAsyncThunk(
    "userAuth/registerUser", async (admin) => {
        return await authService.register(admin);
    }
);