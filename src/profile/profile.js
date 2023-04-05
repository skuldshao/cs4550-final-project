
import React from "react";
import ProfileTabs from "./tabs/profile-tabs";
import Nav from "../nav";

function Profile({isEditing = false}) {
    return (
        <div>
            <Nav active="profile" user="user"/>
            <div className="text-start">
                <ProfileTabs isEditing={isEditing}/>
            </div>
            }
        </div>
    );
}

export default Profile
