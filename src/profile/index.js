import React, {useEffect, useState} from "react";
import ProfileRoute from "./profile";
import AdminProfileRouter from "./admin/admin-profile/AdminProfileRouter";
import Nav from "../nav";
import {profileThunk as userProfileThunk} from "../services/user-auth-thunk";
import {profileThunk as adminProfileThunk} from "../services/admin-auth-thunk";
import {useDispatch} from "react-redux";

function Profile() {
    const dispatch = useDispatch();
    const [admin, setAdmin] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false)
    const getProfile = async () => {
        const admins = await dispatch(adminProfileThunk());
        const adVal = admins.type === "adminAuth/profile/fulfilled"
        setAdmin(adVal);
        const users = await dispatch(userProfileThunk())
        const loggedInVal = users.type === "userAuth/profile/fulfilled" || admin
        setLoggedIn(loggedInVal)
    };

    useEffect(() => {
        getProfile()
    }, []);

    return (
        <div>
            <Nav active="profile" user={admin ? "admin" : "user"}/>
            {admin ? <AdminProfileRouter/> : <ProfileRoute loggedIn={loggedIn}/>}
        </div>
    );
}

export default Profile;
