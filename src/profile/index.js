import React from "react";
import ProfileRoute from "./profile";
import Nav from "../nav";
import AdminProfileRouter from "./admin/admin-profile/AdminProfileRouter";

function Profile() {
    const loggedIn = false;
    const admin = false
    const user = "user";
    return (
        <div>
            <Nav active="profile" user={user}/>
            {admin && <AdminProfileRouter/>}
            {!admin && <ProfileRoute loggedIn={loggedIn}/>}
        </div>
    );
}

export default Profile;
