
import React from "react";
import {Routes} from "react-router";
import {Route} from "react-router-dom";
import Profile from "./profile";

function ProfileRoute() {
    return (
        <Routes>
            <Route index element={<Profile isEditing={false}/>}/>
            <Route path="edit" element={<Profile isEditing={true}/>}/>
        </Routes>
    );
}
export default ProfileRoute;
