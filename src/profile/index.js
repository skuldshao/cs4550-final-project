import React from "react";
import Nav from "../nav";
import ProfileRoute from "./profile";
import AdminProfileRouter from "./admin/admin-profile/AdminProfileRouter";

function Profile() {
    const loggedIn = true;
    const admin = false
    return (
        <div>
            <Nav active="profile" user={admin ? "admin" : "user"}/>
            {admin && <AdminProfileRouter/>}
            {!admin && <ProfileRoute loggedIn={loggedIn}/>}
        </div>
    );
}

export default Profile;
