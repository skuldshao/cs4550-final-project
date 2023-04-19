import React, {useEffect} from "react";
import ProfileRoute from "./profile";
import AdminProfileRouter from "./admin/admin-profile/AdminProfileRouter";
import Nav from "../nav";
import { profileThunk as userProfileThunk } from "../services/user-auth-thunk";
import { profileThunk as adminProfileThunk } from "../services/admin-auth-thunk";
import {useDispatch} from "react-redux";

function Profile() {
    let loggedIn = true;
    let admin = false;
    const dispatch = useDispatch();
    let userPayload;
    let adminPayload;

    useEffect(() => {
        userPayload = dispatch(userProfileThunk());
        adminPayload = dispatch(adminProfileThunk());

        admin = adminPayload.type !== 'adminAuth/profile/rejected' && userPayload.type !== undefined;
        loggedIn = (userPayload.type !== 'userAuth/profile/rejected' && userPayload.type !== undefined) || admin;
    }, []);

    return (
        <div>
            <Nav active="profile" user={admin ? "admin" : "user"}/>
            {admin && <AdminProfileRouter/>}
            {!admin && <ProfileRoute loggedIn={loggedIn}/>}
        </div>
    );
}

export default Profile;
