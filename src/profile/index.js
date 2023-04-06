
import React from "react";
import {Routes} from "react-router";
import {Route} from "react-router-dom";
import ProfileTabs from "./tabs/profile-tabs";

function ProfileRoute() {
    return (
        <Routes>
            <Route path="/*" element={<ProfileTabs isEditing={false}/>}/>
            <Route path="edit/*" element={<ProfileTabs isEditing={true}/>}/>
        </Routes>
    );
}
export default ProfileRoute;
