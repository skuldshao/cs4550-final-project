import {useParams} from "react-router";
import OverViewNotSelf from "../tabs/overview/overviewNotSelf";
import React, {useEffect} from "react";
import ReviewsNotSelf from "../tabs/reviews/reviewsNotSelf";
import FollowingNotSelf from "../tabs/follow/following/followingNotSelf";
import FollowersNotSelf from "../tabs/follow/followers/followersNotSelf";
import FavoritesNotSelf from "../tabs/playlists/favorites/favoritesNotSelf";
import ListenToMoreNotSelf from "../tabs/playlists/listenToMore/listenToMoreNotSelf";
import {useDispatch, useSelector} from "react-redux";
import {findUserByIdThunk} from "../../services/user-thunk";

const ViewProfile = ({tabs, loggedIn}) => {
    const {uid} = useParams();
    const {foundUser, loading, displayFoundUser} = useSelector((state) => state.userData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findUserByIdThunk(uid))
    }, [uid]);
    return (
        <div className="text-white">
            {loading && <div>LOADING DATA</div>}
            {(tabs.active === "overview" && displayFoundUser) &&
            <OverViewNotSelf tabs={tabs} user={foundUser} loggedIn={loggedIn}/>}
            {(tabs.active === "reviews" && displayFoundUser) &&
            <ReviewsNotSelf tabs={tabs} user={foundUser} loggedIn={loggedIn}/>}
            {(tabs.active === "following" && displayFoundUser) &&
            <FollowingNotSelf tabs={tabs} user={foundUser} loggedIn={loggedIn}/>}
            {(tabs.active === "followers" && displayFoundUser) &&
            <FollowersNotSelf tabs={tabs} user={foundUser} loggedIn={loggedIn}/>}
            {(tabs.active === "favoriteSongs" && displayFoundUser) &&
            <FavoritesNotSelf tabs={tabs} user={foundUser} loggedIn={loggedIn}/>}
            {(tabs.active === "newSongs" && displayFoundUser) &&
            <ListenToMoreNotSelf tabs={tabs} user={foundUser} loggedIn={loggedIn}/>}
        </div>
    )
}
export default ViewProfile;