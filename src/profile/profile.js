
import React from "react";
import ProfileHeader from "./profile-header";
import ProfileTabs from "./tabs/profile-tabs";
import ProfileHeaderEdit from "./profile-header-edit";
import Nav from "../nav";

function Profile({isEditing = false}) {
    return (
        <div>
            <Nav active="profile" user="user"/>
            {isEditing?
                <div className="text-start wd-bg-grey rounded-2">
                    <ProfileHeaderEdit/>
                    <ProfileTabs isEditing={isEditing}/>
                </div> :
                <div className="text-start wd-bg-grey rounded-2">
                    <ProfileHeader/>
                    <ProfileTabs/>
                </div>
            }
        </div>
    );
}

export default Profile
