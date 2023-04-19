import axios from "axios";
const SERVER_API_URL = "http://localhost:4000/api";
const USERS_URL = `${SERVER_API_URL}/users`;

const api = axios.create({ withCredentials: true });

export const login = async ({ username, password }) => {
    const response = await api.post(`${USERS_URL}/login`, {
        username,
        password,
    });
    const user = response.data;
    return user;
};

export const logout = async () => {
    const response = await api.post(`${USERS_URL}/logout`);
    return response.data;
};
