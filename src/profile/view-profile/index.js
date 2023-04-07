import {Routes, useParams} from "react-router";
import users from "../../data/users.json";
import {Route} from "react-router-dom";
import OverViewNotSelf from "../tabs/overview/overviewNotSelf";
import React from "react";
import ReviewsNotSelf from "../tabs/reviews/reviewsNotSelf";
import FollowingNotSelf from "../tabs/follow/followingNotSelf";
import FollowersNotSelf from "../tabs/follow/followersNotSelf";
import FavoritesNotSelf from "../tabs/playlists/favoritesNotSelf";
import ListenToMoreNotSelf from "../tabs/playlists/listenToMoreNotSelf";
import Followers from "../tabs/follow/followers";

const ViewProfile = ({tabs}) => {
    const params = useParams();
    const uid = parseInt(params.uid);
    const user = users.find(
        u => {
            return u._id === uid
        });
    return (
        <div>
            {tabs.active === "overview" && <OverViewNotSelf tabs={tabs} user={user}/>}
            {tabs.active === "reviews" && <ReviewsNotSelf tabs={tabs} user={user}/>}
            {tabs.active === "following" && <FollowingNotSelf tabs={tabs} user={user}/>}
            {tabs.active === "followers" && <FollowingNotSelf tabs={tabs} user={user}/>}
            {tabs.active === "favoriteSongs" && <FavoritesNotSelf tabs={tabs} user={user}/>}
            {tabs.active === "newSongs" && <ListenToMoreNotSelf tabs={tabs} user={user}/>}
        </div>
    )
}
export default ViewProfile;