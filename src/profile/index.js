import React from "react";
import ProfileHeader from "./profile-header";
import ProfileTabs from "./tabs/profile-tabs";
import ProfileHeaderEdit from "./profile-header-edit";
import ProfileTabsEdit from "./tabs/profile-tabs-edit";

function Profile() {
    var isEditing = false;
    return (
        <div className="wd-black-bg">
            {isEditing?
                <>
                    <ProfileHeaderEdit/>
                    <ProfileTabsEdit/>
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