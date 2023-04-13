import ProfileHeaderEdit from "../../../loggedInProfile/profile-header-edit";
import ProfileHeader from "../../../loggedInProfile/profile-header";
import NavTab from "../../tab-nav";
import React from "react";
import WhoseProfile from "../../../view-profile/whose-profile";
import PlaylistItem from "../playlistItem";

const Favorites = ({
                       user = {
                           "userName": "SpaceX",
                           "_id": 5,
                           "handle": "2h",
                           "avatarIcon": "https://ovicio.com.br/wp-content/uploads/2022/06/20220616-20220616_200814-555x555.jpg",
                           "number": "8899878777",
                           "email": "blah"
                       }, tabs, isEditing, isSelf, currentUser = {
        "userName": "SpaceX",
        "_id": 5,
        "handle": "2h",
        "avatarIcon": "https://ovicio.com.br/wp-content/uploads/2022/06/20220616-20220616_200814-555x555.jpg",
        "number": "78898777",
        "email": "blah",
        "following": [],
        "followers": []
    }, loggedIn
                   }) => {
    const favorites = user.favoriteSongs;
    return (
        <div>
            <div className="row wd-black-bg text-start">
                {!isSelf ? <WhoseProfile user={user} currentUser={currentUser} loggedIn={loggedIn}/> :
                    (isEditing ? <ProfileHeaderEdit active={tabs.active}/> : <ProfileHeader active={tabs.active}/>)}
                <NavTab tabs={tabs} isEditing={isEditing} user={user} isSelf={isSelf}/>
                {
                    favorites.map(f => <PlaylistItem item={f}/>)
                }
            </div>
        </div>
    )
}

export default Favorites;