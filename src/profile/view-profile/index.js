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
    const {users, loading, display} = useSelector((state) => state.userData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findUserByIdThunk(uid))
    }, [uid]);
    return (
        <div className="text-white">
            {loading && <div>LOADING DATA</div>}
            {(tabs.active === "overview" && display) && <OverViewNotSelf tabs={tabs} user={users} loggedIn={loggedIn}/>}
            {(tabs.active === "reviews" && display) && <ReviewsNotSelf tabs={tabs} user={users} loggedIn={loggedIn}/>}
            {(tabs.active === "following" && display) &&
            <FollowingNotSelf tabs={tabs} user={users} loggedIn={loggedIn}/>}
            {(tabs.active === "followers" && display) &&
            <FollowersNotSelf tabs={tabs} user={users} loggedIn={loggedIn}/>}
            {(tabs.active === "favoriteSongs" && display) &&
            <FavoritesNotSelf tabs={tabs} user={users} loggedIn={loggedIn}/>}
            {(tabs.active === "newSongs" && display) &&
            <ListenToMoreNotSelf tabs={tabs} user={users} loggedIn={loggedIn}/>}
        </div>
    )
}
export default ViewProfile;