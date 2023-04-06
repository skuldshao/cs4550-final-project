
import React from "react";
import ProfileHeader from "./profile-header";
import ProfileTabs from "./tabs/profile-tabs";
import ProfileHeaderEdit from "./profile-header-edit";
import Nav from "../nav";

function Profile() {
    const isEditing = false;
    return (
        <div>
         <Nav active="profile" user="user"/>
            {isEditing ?
                <div className="text-start">
                    <ProfileHeaderEdit/>
                    <ProfileTabs isEditing={isEditing}/>
                </div> :
                <div className="text-start">
                    <ProfileHeader/>
                    <ProfileTabs/>
                </div>
            }
        </div>
    );
}

export default Profile
