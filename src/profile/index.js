import React from "react";
import ProfileRoute from "./profile";
import AdminProfileRouter from "./admin/admin-profile/AdminProfileRouter";
import Nav from "../nav";

function Profile() {
    const loggedIn = false;
    const admin = true
    return (
        <div>
            <Nav active="profile" user={admin ? "admin" : "user"}/>
            {admin && <AdminProfileRouter/>}
            {!admin && <ProfileRoute loggedIn={loggedIn}/>}
        </div>
    );
}

export default Profile;
