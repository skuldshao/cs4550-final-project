import UserItem from "./userItem";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findUserThunk} from "../services/user-thunk";
import {findAdminThunk} from "../services/admin-thunk";

const DisplayUsers = () => {
    const {users, loading, display} = useSelector((state) => state.userData)
    const {admins, loadingAdmin, displayAdmin} = useSelector((state) => state.adminData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findUserThunk())
        dispatch(findAdminThunk())
    }, []);
    return (
        <div>
            {(loading || loadingAdmin) && <div>LOADING USERS</div>}
            {(display && displayAdmin) &&
            <>
                {users.map((u) => (<UserItem user={u} roles="user"/>))}
                {admins.map((a) => (<UserItem user={a} roles="admin"/>))}
            </>
            }
        </div>
    )
}
export default DisplayUsers