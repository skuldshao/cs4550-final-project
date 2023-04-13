import NavTab from "../../tab-nav";
import React from "react";
import ViewProfileAsAdmin from "../../../admin/viewProfileAsAdmin";
import PlaylistItem from "../playlistItem";

const FavoritesAdmin = ({
                            user = {
                                "userName": "SpaceX",
                                "_id": 5,
                                "handle": "2h",
                                "avatarIcon": "https://ovicio.com.br/wp-content/uploads/2022/06/20220616-20220616_200814-555x555.jpg",
                                "number": "6789o6",
                                "email": "blah"
                            }, tabs
                        }) => {
    const favorites = user.favoriteSongs;
    return (
        <div>
            <div className="wd-black-bg text-start">
                <ViewProfileAsAdmin user={user} active={tabs.active}/>
                <NavTab tabs={tabs} isEditing={false} user={user} isSelf={false}/>
                {
                    favorites.length > 0 ? favorites.map(f => <PlaylistItem
                            item={f}/>) :
                        (
                            <span
                                className="d-flex justify-content-center text-white ms-5 fw-normal mt-3 mb-3 fs-5">{user.userName} has no songs in their favorites playlist</span>)
                }
            </div>
        </div>
    )
}

export default FavoritesAdmin