import axios from 'axios';
const API_BASE = "http://localhost:4000/" || process.env.REACT_APP_API_BASE;
const USER_API = `${API_BASE}/users`;

export const createUser = async (user) => {
    const response = await axios.post(USER_API, user)
    return response.data;
}

export const findUsers = async () => {
    const response = await axios.get(USER_API);
    const users = response.data;
    return users;
}

export const findUserById = async (userId) => {
    const response = await axios.get(`${USER_API}/${userId}`);
    const user = response.data;
    return user;
}

export const deleteUser = async (userId) => {
    const response = await axios
        .delete(`${USER_API}/${userId}`)
    return response.data
}

export const updateUser = async (user) => {
    const response = await axios
        .put(`${USER_API}/${user._id}`, user);
    return response.data;
}
