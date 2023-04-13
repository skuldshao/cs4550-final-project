import React from "react";
import NavTab from "../../tab-nav";
import FollowItemAdmin from "../followItemAdmin";
import EditProfileAsAdmin from "../../../admin/editProfileAsAdmin";

function FollowersAdminEdit(
    {
        user = {
            "userName": "SpaceX",
            "_id": 5,
            "handle": "2h",
            "avatarIcon": "https://ovicio.com.br/wp-content/uploads/2022/06/20220616-20220616_200814-555x555.jpg",
            "number": "888888",
            "email": "blah",
            "followers": [],
            "following": []
        }, tabs
    }
) {
    const followers = user.followers;
    return (
        <div className="wd-black-bg text-start">
            <EditProfileAsAdmin active={tabs.active} user={user}/>
            <NavTab tabs={tabs} isEditing={false} user={user} isSelf={false}/>
            <div className="wd-black-bg align-items-center">
                {followers.length === 0 ? (<span
                        className=" d-flex justify-content-center text-white ms-5 fw-normal fs-5 mt-3 mb-3">{user.userName} has no followers</span>) :
                    followers.map(followerItem => <FollowItemAdmin fid={followerItem} pUser={user} tab={"followers"}/>)}
            </div>
        </div>
    );
}

export default FollowersAdminEdit