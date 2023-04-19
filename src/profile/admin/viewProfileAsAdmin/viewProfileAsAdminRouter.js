import {useParams} from "react-router";
import React, {useEffect, useState} from "react";
import OverViewAdmin from "../../tabs/overview/overViewAdmin";
import ReviewsAdmin from "../../tabs/reviews/reviewsAdmin";
import FollowingAdmin from "../../tabs/follow/following/followingAdmin";
import FollowersAdmin from "../../tabs/follow/followers/followersAdmin";
import FavoritesAdmin from "../../tabs/playlists/favorites/favoritesAdmin";
import ListenToMoreAdmin from "../../tabs/playlists/listenToMore/listenToMoreAdmin";
import {useDispatch, useSelector} from "react-redux";
import {findUserByIdThunk, findUserThunk} from "../../../services/user-thunk";

const ViewProfileAsAdminRouter = ({tabs}) => {
    const {uid} = useParams();
    const {foundUser, loading, displayFoundUser, users, display} = useSelector((state) => state.userData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findUserByIdThunk(uid))
    }, [uid]);
    useEffect(() => {
        dispatch(findUserThunk())
    }, []);
    return (
        <div className="text-white">
            {loading && <div>LOADING DATA</div>}
            {(tabs.active === "overview" && displayFoundUser) && <OverViewAdmin tabs={tabs} user={foundUser}/>}
            {(tabs.active === "reviews" && displayFoundUser) && <ReviewsAdmin tabs={tabs} user={foundUser}/>}
            {(tabs.active === "following" && displayFoundUser && display) &&
            <FollowingAdmin tabs={tabs} user={foundUser} isEditing={false}
                            following={(users.find(u => u._id === uid)).following}
                            followers={(users.find(u => u._id === uid)).followers.length}/>}
            {(tabs.active === "followers" && displayFoundUser && display) &&
            <FollowersAdmin tabs={tabs} user={foundUser} isEditing={false}
                            followers={(users.find(u => u._id === uid)).followers}
                            following={(users.find(u => u._id === uid)).following.length}/>}
            {(tabs.active === "favoriteSongs" && displayFoundUser) && <FavoritesAdmin tabs={tabs} user={foundUser}/>}
            {(tabs.active === "newSongs" && displayFoundUser) && <ListenToMoreAdmin tabs={tabs} user={foundUser}/>}
        </div>
    )
}
export default ViewProfileAsAdminRouter;