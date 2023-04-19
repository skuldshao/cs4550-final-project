import React from "react";
import NavTab from "../../tab-nav";
import ViewProfileAsAdmin from "../../../admin/viewProfileAsAdmin";
import FollowItemAdmin from "../followItemAdmin";
import EditProfileAsAdmin from "../../../admin/editProfileAsAdmin";

function FollowersAdmin(
    {
        tabs, user, followers, following, isEditing
    }
) {
    return (
        <div className="wd-black-bg text-start">
            {isEditing ? <EditProfileAsAdmin active={tabs.active} user={user}/> :
                <ViewProfileAsAdmin active={tabs.active} user={user}/>}
            <NavTab tabs={tabs} isEditing={isEditing} user={user} isSelf={false} followers={followers.length}
                    following={following}/>
            <div className="wd-black-bg align-items-center">
                {followers.length === 0 ? (<span
                        className=" d-flex justify-content-start text-white ms-5 fw-normal fs-5 mt-3 mb-3">{user.userName} has no followers</span>) :
                    (followers).map(followerItem => <FollowItemAdmin fid={followerItem} pUser={user}
                                                                     isEditing={isEditing}
                                                                     tab={"followers"}/>)}
            </div>
        </div>
    );
}

export default FollowersAdmin