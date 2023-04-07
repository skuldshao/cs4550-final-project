import React from "react";
import NavTab from "../tab-nav";
import FollowItem from "./followItem";
import followingArray from "./following.json";
import ProfileHeaderEdit from "../../profile-header-edit";
import ProfileHeader from "../../profile-header";
import WhoseProfile from "../../view-profile/whose-profile";

function Following(
    { user = {
        "userName": "SpaceX",
        "_id": 5,
        "handle": "2h",
        "avatarIcon": "https://ovicio.com.br/wp-content/uploads/2022/06/20220616-20220616_200814-555x555.jpg",
        "phoneNumber": "tesla.png",
        "email": "blah"
    }, tabs, isEditing, isSelf }
) {
    return (
        <div>
        <div className="row wd-black-bg text-start">
            {!isSelf ?  <WhoseProfile user={user}/> :
                (isEditing ? <ProfileHeaderEdit active={tabs.active}/> : <ProfileHeader active={tabs.active}/>)}
            <NavTab tabs={tabs} isEditing={isEditing} userID={user._id} isSelf={isSelf}/>
            <div className="row wd-black-bg p-3 pt-4 ps-5 align-items-center">
                { followingArray.map(followingItem => <FollowItem followItem={followingItem}/>)}
            </div>
        </div>
        </div>
    );
}

export default Following