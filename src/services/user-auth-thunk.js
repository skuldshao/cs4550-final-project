import {createAsyncThunk} from "@reduxjs/toolkit";
import * as authService from "./user-auth-service";

export const loginThunk = createAsyncThunk(
    "userAuth/login", async (credentials) => {
        const user = await authService.login(credentials);
        return user;
    }
);

export const logoutThunk = createAsyncThunk(
    "userAuth/logout", async () => {
        return await authService.logout();
    }
);

export const profileThunk = createAsyncThunk(
    "userAuth/profile", async () => {
        return await authService.profile();
    });

export const updateUserThunk = createAsyncThunk(
    "userAuth/updateUser", async (user) => {
        await authService.updateUser(user);
        return user;
    }
);

export const registerThunk = createAsyncThunk(
    "userAuth/registerUser", async (user) => {
        return await authService.register(user);
    }
);