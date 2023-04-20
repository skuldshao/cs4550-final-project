import NavTab from "../../tab-nav";
import React from "react";
import ViewProfileAsAdmin from "../../../admin/viewProfileAsAdmin";
import PlaylistItem from "../playlistItem";
import EditProfileAsAdmin from "../../../admin/editProfileAsAdmin";

const ListenToMoreAdmin = ({
                               user = {
                                   "userName": "SpaceX",
                                   "_id": 5,
                                   "handle": "2h",
                                   "avatarIcon": "https://ovicio.com.br/wp-content/uploads/2022/06/20220616-20220616_200814-555x555.jpg",
                                   "number": "66666666",
                                   "email": "blah"
                               }, tabs, isEditing, followers, following
                           }) => {
    const newSongs = user.newSongs;
    return (
        <div>
            <div className="wd-black-bg text-start">
                {isEditing ? <EditProfileAsAdmin active={tabs.active} user={user}/> :
                    <ViewProfileAsAdmin active={tabs.active} user={user}/>}
                <NavTab tabs={tabs} isEditing={isEditing} user={user} isSelf={false} followers={followers}
                        following={following}/>
                {
                    newSongs.length > 0 ? newSongs.map(f => <PlaylistItem
                            item={f}/>) :
                        (
                            <span
                                className="d-flex justify-content-start text-white ms-5 fw-normal mt-3 mb-3 fs-5">{user.userName} has no songs in their new songs playlist</span>)
                }
            </div>
        </div>
    )
}

export default ListenToMoreAdmin;