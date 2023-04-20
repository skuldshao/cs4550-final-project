import UserItem from "./userItem";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findUserThunk} from "../services/user-thunk";
import {findAdminThunk} from "../services/admin-thunk";
import {profileThunk as adminProfileThunk} from "../services/admin-auth-thunk";

const DisplayUsers = () => {
    const {users, loading, display} = useSelector((state) => state.userData)
    const {admins, loadingAdmin, displayAdmin} = useSelector((state) => state.adminData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findUserThunk())
        dispatch(findAdminThunk())
    }, []);

    const [profile, setProfile] = useState({});
    const getProfile = async () => {
        const admins = await dispatch(adminProfileThunk());
        const adVal = admins.payload
        setProfile(adVal);
    };

    useEffect(() => {
        getProfile()
    }, []);
    return (
        <div>
            {(loading || loadingAdmin) && <div>LOADING USERS</div>}
            {(display && displayAdmin) &&
            <>
                {users.map((u) => (<UserItem user={u} roles="user" currentProfile={profile}/>))}
                {admins.map((a) => (<UserItem user={a} roles="admin" currentProfile={profile}/>))}
            </>
            }
        </div>
    )
}
export default DisplayUsers