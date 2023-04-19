import {useParams} from "react-router";
import React, {useEffect, useState} from "react";
import OverViewAdmin from "../../tabs/overview/overViewAdmin";
import ReviewsAdmin from "../../tabs/reviews/reviewsAdmin";
import FollowingAdmin from "../../tabs/follow/following/followingAdmin";
import FollowersAdmin from "../../tabs/follow/followers/followersAdmin";
import FavoritesAdmin from "../../tabs/playlists/favorites/favoritesAdmin";
import ListenToMoreAdmin from "../../tabs/playlists/listenToMore/listenToMoreAdmin";
import {useDispatch, useSelector} from "react-redux";
import {findUserByIdThunk, findUserFollowersByIdThunk} from "../../../services/user-thunk";

const ViewProfileAsAdminRouter = ({tabs}) => {
    const {uid} = useParams();
    const {foundUser, followers, loading, displayFoundUser} = useSelector((state) => state.userData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findUserByIdThunk(uid))
        console.log("biug")
    }, [uid]);
    useEffect(() => {
        dispatch(findUserFollowersByIdThunk(uid))
        console.log("other")
    }, []);
    console.log(foundUser)
    return (
        <div className="text-white">
            {loading && <div>LOADING DATA</div>}
            {(tabs.active === "overview" && displayFoundUser) && <OverViewAdmin tabs={tabs} user={foundUser}/>}
            {(tabs.active === "reviews" && displayFoundUser) && <ReviewsAdmin tabs={tabs} user={foundUser}/>}
            {(tabs.active === "following" && displayFoundUser) && <FollowingAdmin tabs={tabs} user={foundUser}/>}
            {(tabs.active === "followers" && displayFoundUser) &&
            <FollowersAdmin tabs={tabs} uid={uid} user={foundUser} followers={followers}/>}
            {(tabs.active === "favoriteSongs" && displayFoundUser) && <FavoritesAdmin tabs={tabs} user={foundUser}/>}
            {(tabs.active === "newSongs" && displayFoundUser) && <ListenToMoreAdmin tabs={tabs} user={foundUser}/>}
        </div>
    )
}
export default ViewProfileAsAdminRouter;