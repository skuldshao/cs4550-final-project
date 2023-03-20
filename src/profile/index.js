
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
                <div className="">
                    <ProfileHeaderEdit/>
                    <ProfileTabs isEditing={isEditing}/>
                </div> :
                <div className="">
                    <ProfileHeader/>
                    <ProfileTabs/>
                </div>
            }
        </div>
    );
}

export default Profile
