import axios from "axios";

const SERVER_API_URL = "http://localhost:4000/api";
const USERS_URL = `${SERVER_API_URL}/users`;

const api = axios.create({withCredentials: true});

export const login = async ({email, password}) => {
    const response = await api.post(`${USERS_URL}/login`, {
        email,
        password,
    });
    const user = response.data;
    return user;
};

export const logout = async () => {
    const response = await api.post(`${USERS_URL}/logout`);
    return response.data;
};


export const profile = async () => {
    const response = await api.get(`${USERS_URL}/profile`);
    return response.data;
};


export const updateUser = async (user) => {
    const response = await api.put(`${USERS_URL}/update`, user);
    return response.data;
};

export const register = async (user) => {
    const response = await axios.post(`${USERS_URL}/register`, user)
    return response.data;
}