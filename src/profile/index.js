
import React from "react";
import ProfileHeader from "./profile-header";
import ProfileTabs from "./tabs/profile-tabs";
import ProfileHeaderEdit from "./profile-header-edit";
import Nav from "../nav";

function Profile() {
    var isEditing = false;
    return (
        <div className="wd-black-bg">
         <Nav active="profile" user="user"/>
            {isEditing?
                <>
                    <ProfileHeaderEdit/>
                    <ProfileTabs isEditing={isEditing}/>
                </> :
                <>
                    <ProfileHeader/>
                    <ProfileTabs/>
                </>
            }
        </div>
    );
}

export default Profile
