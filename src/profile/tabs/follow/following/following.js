import React from "react";
import NavTab from "../../tab-nav";
import FollowItem from "../followItem";
import ProfileHeaderEdit from "../../../loggedInProfile/profile-header-edit";
import ProfileHeader from "../../../loggedInProfile/profile-header";
import WhoseProfile from "../../../view-profile/whose-profile";

function Following(
    {
        user = {
            "userName": "SpaceX",
            "_id": 5,
            "handle": "2h",
            "avatarIcon": "https://ovicio.com.br/wp-content/uploads/2022/06/20220616-20220616_200814-555x555.jpg",
            "number": "tesla.png",
            "email": "blah",
            "following": [],
            "followers": [],
        }, tabs, isEditing, isSelf, currentUser = {
        "userName": "SpaceX",
        "_id": 5,
        "handle": "2h",
        "avatarIcon": "https://ovicio.com.br/wp-content/uploads/2022/06/20220616-20220616_200814-555x555.jpg",
        "number": "tesla.png",
        "email": "blah",
        "followers": [],
        "following": []
    }, loggedIn
    }
) {
    const following = user.following;
    return (
        <div>
            <div className="wd-black-bg text-start">
                {!isSelf ? <WhoseProfile user={user} currentUser={currentUser} loggedIn={loggedIn}/> :
                    (isEditing ? <ProfileHeaderEdit active={tabs.active}/> : <ProfileHeader active={tabs.active}/>)}
                <NavTab tabs={tabs} isEditing={isEditing} user={user} isSelf={isSelf}/>
                <div className="wd-black-bg align-items-center">
                    {following.length === 0 ? (isSelf ?
                            <span className=" d-flex justify-content-center text-white ms-5 fw-normal fs-5 mt-3 mb-1">You are not following anyone</span> :
                            <span
                                className=" d-flex justify-content-center text-white ms-5 fw-normal fs-5 mt-3 mb-1">{user.userName} is not following anyone</span>) :
                        following.map(followingItem => <FollowItem fid={followingItem} currentUser={currentUser}
                                                                   loggedIn={loggedIn}/>)}
                </div>
            </div>
        </div>
    );
}

export default Following