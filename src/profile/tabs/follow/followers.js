import React from "react";
import NavTab from "../tab-nav";
import followerArray from "./followers.json";
import FollowItem from "./followItem";
import ProfileHeaderEdit from "../../profile-header-edit";
import ProfileHeader from "../../profile-header";

function Followers(
    { who = {
        "isSelf": true,
        "userName": "SpaceX",
        "handle": "2h",
        "avatarIcon": "https://ovicio.com.br/wp-content/uploads/2022/06/20220616-20220616_200814-555x555.jpg",
        "phoneNumber": "tesla.png",
        "email": "blah"
    }, tabs, isEditing }
) {
    return (
        <div className="row wd-black-bg">
            {isEditing ? <ProfileHeaderEdit active={tabs.active}/> : <ProfileHeader active={tabs.active}/>}
            <NavTab tabs={tabs}/>
            <div className="row wd-black-bg p-3 pt-4 align-items-center">
                { followerArray.map(followerItem => <FollowItem followItem={followerItem}/>)}
            </div>
        </div>
    );
}

export default Followers