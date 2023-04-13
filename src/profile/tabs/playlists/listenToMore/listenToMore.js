import ProfileHeaderEdit from "../../../loggedInProfile/profile-header-edit";
import ProfileHeader from "../../../loggedInProfile/profile-header";
import NavTab from "../../tab-nav";
import React from "react";
import WhoseProfile from "../../../view-profile/whose-profile";
import PlaylistItem from "../playlistItem";

const ListenToMore = ({
                          user = {
                              "userName": "SpaceX",
                              "_id": 5,
                              "handle": "2h",
                              "avatarIcon": "https://ovicio.com.br/wp-content/uploads/2022/06/20220616-20220616_200814-555x555.jpg",
                              "number": "tesla.png",
                              "email": "blah",
                              "newSongs": [],
                              "following": [],
                              "followers": [],
                          }, tabs, isEditing, isSelf, currentUser = {
        "userName": "SpaceX",
        "_id": 5,
        "handle": "2h",
        "avatarIcon": "https://ovicio.com.br/wp-content/uploads/2022/06/20220616-20220616_200814-555x555.jpg",
        "number": "tesla.png",
        "email": "blah",
        "following": [],
        "followers": [],
        "newSongs": [],
    }, loggedIn
                      }) => {
    const newSongs = user.newSongs;
    console.log(newSongs.length)
    return (
        <div>
            <div className="wd-black-bg text-start">
                {!isSelf ? <WhoseProfile user={user} currentUser={currentUser} loggedIn={loggedIn}/> :
                    (isEditing ? <ProfileHeaderEdit active={tabs.active}/> : <ProfileHeader active={tabs.active}/>)}
                <NavTab tabs={tabs} isEditing={isEditing} user={user} isSelf={isSelf}/>
                {
                    newSongs.length > 0 ? newSongs.map(f => <PlaylistItem
                            item={f}/>) :
                        (isSelf ? <span
                                className="d-flex justify-content-center text-white ms-5 fw-normal mt-3 mb-3 fs-5">You have no songs in your new songs playlist</span> :
                            <span
                                className="d-flex justify-content-center text-white ms-5 fw-normal mt-3 mb-3 fs-5">{user.userName} has no songs in their new songs playlist</span>)
                }
            </div>
        </div>
    )
}

export default ListenToMore;