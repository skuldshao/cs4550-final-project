import React from "react";
import NavTab from "../../tab-nav";
import FollowItem from "../followItem";
import ProfileHeaderEdit from "../../../loggedInProfile/profile-header-edit";
import ProfileHeader from "../../../loggedInProfile/profile-header";
import WhoseProfile from "../../../view-profile/whose-profile";

function Followers(
    {
        user = {
            "userName": "SpaceX",
            "_id": 5,
            "handle": "2h",
            "avatarIcon": "https://ovicio.com.br/wp-content/uploads/2022/06/20220616-20220616_200814-555x555.jpg",
            "number": "7898777",
            "email": "blah",
            "followers": [],
            "following": []
        }, tabs, isEditing, isSelf, currentUser = {
        "userName": "SpaceX",
        "_id": 5,
        "handle": "2h",
        "avatarIcon": "https://ovicio.com.br/wp-content/uploads/2022/06/20220616-20220616_200814-555x555.jpg",
        "number": "7899765",
        "email": "blah",
        "followers": [],
        "following": []
    }, loggedIn
    }
) {
    const followers = user.followers;
    return (
        <div className="row wd-black-bg text-start">
            {!isSelf ? <WhoseProfile user={user} currentUser={currentUser} loggedIn={loggedIn}/> :
                (isEditing ? <ProfileHeaderEdit active={tabs.active}/> : <ProfileHeader active={tabs.active}/>)}
            <NavTab tabs={tabs} isEditing={isEditing} user={user} isSelf={isSelf}/>
            <div className="row wd-black-bg p-3 pt-4 ps-5 align-items-center">
                {followers.length === 0 ? (isSelf ? <span
                            className=" d-flex justify-content-center text-white ms-5 fw-normal">You have no followers</span> :
                        <span className=" d-flex justify-content-center text-white ms-5 fw-normal">{user.userName} has no followers</span>) :
                    followers.map(followerItem => <FollowItem fid={followerItem} currentUser={currentUser}
                                                              loggedIn={loggedIn}/>)}
            </div>
        </div>
    );
}

export default Followers