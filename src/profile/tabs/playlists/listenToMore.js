import ProfileHeaderEdit from "../../profile-header-edit";
import ProfileHeader from "../../profile-header";
import NavTab from "../tab-nav";
import React from "react";
import WhoseProfile from "../../view-profile/whose-profile";

const ListenToMore = ( { user = {
    "userName": "SpaceX",
    "_id": 5,
    "handle": "2h",
    "avatarIcon": "https://ovicio.com.br/wp-content/uploads/2022/06/20220616-20220616_200814-555x555.jpg",
    "phoneNumber": "tesla.png",
    "email": "blah"
}, tabs, isEditing, isSelf}) => {
    return (
        <div>
            <div className="row wd-black-bg text-start">
                {!isSelf ?  <WhoseProfile user={user}/> :
                    (isEditing ? <ProfileHeaderEdit active={tabs.active}/> : <ProfileHeader active={tabs.active}/>)}
                <NavTab tabs={tabs} isEditing={isEditing} userID={user._id} isSelf={isSelf}/>
            </div>
        </div>
    )
}

export default ListenToMore;