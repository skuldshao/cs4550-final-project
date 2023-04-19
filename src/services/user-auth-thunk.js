import { createAsyncThunk } from "@reduxjs/toolkit";
import * as authService from "./user-auth-service";


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
