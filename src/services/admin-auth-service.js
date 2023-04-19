import axios from "axios";

const SERVER_API_URL = "http://localhost:4000/api";
const ADMIN_URL = `${SERVER_API_URL}/admin`;

const api = axios.create({withCredentials: true});

export const login = async ({email, password}) => {
    const response = await api.post(`${ADMIN_URL}/login`, {
        email,
        password,
    });
    const admin = response.data;
    return admin;
};

export const logout = async () => {
    const response = await api.post(`${ADMIN_URL}/logout`);
    return response.data;
};

export const profile = async () => {
    const response = await api.get(`${ADMIN_URL}/profile`);
    return response.data;
};


export const updateAdmin = async (admin) => {
    const response = await api.put(`${ADMIN_URL}/${admin._id}`, admin);
    return response.data;
};

export const register = async (admin) => {
    const response = await axios.post(`${ADMIN_URL}/register`, admin)
    return response.data;
}