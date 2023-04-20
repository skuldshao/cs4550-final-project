import NavTab from "../../tab-nav";
import React from "react";
import ViewProfileAsAdmin from "../../../admin/viewProfileAsAdmin";
import PlaylistItem from "../playlistItem";
import EditProfileAsAdmin from "../../../admin/editProfileAsAdmin";

const FavoritesAdmin = ({
                            user = {
                                "userName": "SpaceX",
                                "_id": 5,
                                "handle": "2h",
                                "avatarIcon": "https://ovicio.com.br/wp-content/uploads/2022/06/20220616-20220616_200814-555x555.jpg",
                                "number": "6789o6",
                                "email": "blah"
                            }, tabs, followers, following, isEditing
                        }) => {
    const favorites = user.favoriteSongs;
    return (
        <div>
            <div className="wd-black-bg text-start">
                {isEditing ? <EditProfileAsAdmin active={tabs.active} user={user}/> :
                    <ViewProfileAsAdmin active={tabs.active} user={user}/>}
                <NavTab tabs={tabs} isEditing={isEditing} user={user} isSelf={false} following={following}
                        followers={followers}/>
                {
                    favorites.length > 0 ? favorites.map(f => <PlaylistItem
                            item={f}/>) :
                        (
                            <span
                                className="d-flex justify-content-start text-white ms-5 fw-normal mt-3 mb-3 fs-5">{user.userName} has no songs in their favorites playlist</span>)
                }
            </div>
        </div>
    )
}

export default FavoritesAdmin