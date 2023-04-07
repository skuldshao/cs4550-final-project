
import React from "react";
import ProfileRoute from "./profile";
import NotLoggedInProfile from "./notLoggedInProfile";
import Nav from "../nav";

function Profile({loggedIn}) {
    return (
       <div>
           <Nav active="profile" user="user"/>
           {loggedIn ? <ProfileRoute/> : <NotLoggedInProfile/>}
       </div>
    );
}
export default Profile;
