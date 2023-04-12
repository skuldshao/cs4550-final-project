import React from "react";
import ProfileRoute from "./profile";
import NotLoggedInProfile from "./notLoggedInProfile";
import Nav from "../nav";
import AdminProfileRouter from "./admin/admin-profile/AdminProfileRouter";

function Profile() {
    const loggedIn = true;
    const admin = false
    const user = "user";
    return (
        <div>
            <Nav active="profile" user={user}/>
            {admin && <AdminProfileRouter/>}
            {(!admin && loggedIn) && <ProfileRoute/>}
            {!loggedIn && <NotLoggedInProfile/>}
        </div>
    );
}

export default Profile;
