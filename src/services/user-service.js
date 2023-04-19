import axios from "axios";

const USERS_API = "http://localhost:4000/api/users";

export const createUser = async (user) => {
    const response = await axios.post(USERS_API, user)
    return response.data;
}

export const findUserById = async (userId) => {
    const response = await axios.get(`${USERS_API}/${userId}`);
    return response.data;
}

export const findUserFollowersById = async (userId) => {
    const response = await axios.get(`${USERS_API}/followers/${userId}`);
    console.log(response.data)
    return response.data;
}

export const findUser = async () => {
    const response = await axios.get(USERS_API);
    return response.data;
}

export const deleteUser = async (userId) => {
    const response = await axios
        .delete(`${USERS_API}/${userId}`)
    return response.data;
}


export const updateUser = async (user) => {
    await axios.put(`${USERS_API}/${user._id}`, user);
    return user;
}