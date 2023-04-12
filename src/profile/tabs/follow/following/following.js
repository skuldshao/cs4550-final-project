import React from "react";
import NavTab from "../../tab-nav";
import FollowItem from "../followItem";
import ProfileHeaderEdit from "../../../loggedInProfile/profile-header-edit";
import ProfileHeader from "../../../loggedInProfile/profile-header";
import WhoseProfile from "../../../view-profile/whose-profile";

function Following(
    { user = {
        "userName": "SpaceX",
        "_id": 5,
        "handle": "2h",
        "avatarIcon": "https://ovicio.com.br/wp-content/uploads/2022/06/20220616-20220616_200814-555x555.jpg",
        "number": "tesla.png",
        "email": "blah",
        "following": [],
    }, tabs, isEditing, isSelf, currentUser= {
        "userName": "SpaceX",
        "_id": 5,
        "handle": "2h",
        "avatarIcon": "https://ovicio.com.br/wp-content/uploads/2022/06/20220616-20220616_200814-555x555.jpg",
        "number": "tesla.png",
        "email": "blah",
        "followers": [],
        "following": [] } }
) {
    const following = user.following;
    return (
        <div>
        <div className="row wd-black-bg text-start">
            {!isSelf ?  <WhoseProfile user={user} currentUser={currentUser}/> :
                (isEditing ? <ProfileHeaderEdit active={tabs.active}/> : <ProfileHeader active={tabs.active}/>)}
            <NavTab tabs={tabs} isEditing={isEditing} user={user} isSelf={isSelf}/>
            <div className="row wd-black-bg p-3 pt-4 ps-5 align-items-center">
                {following.length === 0 ? (isSelf ? <span className=" d-flex justify-content-center text-white ms-5 fw-normal">You are not following anyone</span> : <span className=" d-flex justify-content-center text-white ms-5 fw-normal">{user.userName} is not following anyone</span>) :
                     following.map(followingItem => <FollowItem fid={followingItem} currentUser={currentUser}/>)}
                }
            </div>
        </div>
        </div>
    );
}

export default Following