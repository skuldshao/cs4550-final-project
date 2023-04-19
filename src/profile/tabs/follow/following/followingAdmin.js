import React from "react";
import NavTab from "../../tab-nav";
import ViewProfileAsAdmin from "../../../admin/viewProfileAsAdmin";
import FollowItemAdmin from "../followItemAdmin";
import EditProfileAsAdmin from "../../../admin/editProfileAsAdmin";

function FollowingAdmin(
    {
        user, following, tabs, followers, isEditing
    }
) {
    return (
        <div>
            <div className="wd-black-bg text-start">
                {isEditing ? <EditProfileAsAdmin active={tabs.active} user={user}/> :
                    <ViewProfileAsAdmin active={tabs.active} user={user}/>}
                <NavTab tabs={tabs} isEditing={isEditing} user={user} isSelf={false} following={following.length}
                        followers={followers}/>
                <div className="wd-black-bg align-items-center">
                    {following.length === 0 ? <span
                            className=" d-flex justify-content-start text-white ms-5 fw-normal fs-5 mt-3 mb-1">{user.userName} is not following anyone</span> :
                        following.map(followingItem => <FollowItemAdmin fid={followingItem} pUser={user}
                                                                        tab="following" isEditing={isEditing}/>)}
                </div>
            </div>
        </div>
    );
}

export default FollowingAdmin