
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
                <>
                    <ProfileHeaderEdit/>
                    <ProfileTabs isEditing={isEditing}/>
                </> :
                <>
                    <ProfileHeader/>
                    <ProfileTabs isEditing={isEditing}/>
                </>
                //TODO: it seems that profiletabs is currently causing profile to not render, not exactly sure why
            }
        </div>
    );
}

export default Profile
