import axios from "axios";
const ADMIN_API = 'http://localhost:4000/api/admin';

export const createAdmin = async (admin) => {
    const response = await axios.post(ADMIN_API, admin)
    return response.data;
}


export const findAdmin = async () => {
    const response = await axios.get(ADMIN_API);
    return response.data;
}

export const deleteAdmin = async (adminId) => {
    const response = await axios
        .delete(`${ADMIN_API}/${adminId}`)
    return response.data;
}


export const updateAdmin = async (admin) => {
    const response = await axios
        .put(`${ADMIN_API}/${admin._id}`, admin);
    return admin;
}