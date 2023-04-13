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
                    favorites.length > 0 ? favorites.map(f => <PlaylistItem
                            item={f}/>) :
                        (isSelf ? <span
                                className="d-flex justify-content-center text-white ms-5 fw-normal mt-3 mb-3 fs-5">You have no songs in your favorites playlist</span> :
                            <span
                                className="d-flex justify-content-center text-white ms-5 fw-normal mt-3 mb-3 fs-5">{user.userName} has no songs in their favorites playlist</span>)
                }
            </div>
        </div>
    )
}

export default Favorites;