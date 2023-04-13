import {useParams} from "react-router";
import users from "../../data/users.json";
import OverViewNotSelf from "../tabs/overview/overviewNotSelf";
import React from "react";
import ReviewsNotSelf from "../tabs/reviews/reviewsNotSelf";
import FollowingNotSelf from "../tabs/follow/following/followingNotSelf";
import FollowersNotSelf from "../tabs/follow/followers/followersNotSelf";
import FavoritesNotSelf from "../tabs/playlists/favorites/favoritesNotSelf";
import ListenToMoreNotSelf from "../tabs/playlists/listenToMore/listenToMoreNotSelf";

const ViewProfile = ({tabs, loggedIn}) => {
    const params = useParams();
    const uid = parseInt(params.uid);
    const user = users.find(
        u => {
            return u._id === uid
        });
    return (
        <div>
            {tabs.active === "overview" && <OverViewNotSelf tabs={tabs} user={user} loggedIn={loggedIn}/>}
            {tabs.active === "reviews" && <ReviewsNotSelf tabs={tabs} user={user} loggedIn={loggedIn}/>}
            {tabs.active === "following" && <FollowingNotSelf tabs={tabs} user={user} loggedIn={loggedIn}/>}
            {tabs.active === "followers" && <FollowersNotSelf tabs={tabs} user={user} loggedIn={loggedIn}/>}
            {tabs.active === "favoriteSongs" && <FavoritesNotSelf tabs={tabs} user={user} loggedIn={loggedIn}/>}
            {tabs.active === "newSongs" && <ListenToMoreNotSelf tabs={tabs} user={user} loggedIn={loggedIn}/>}
        </div>
    )
}
export default ViewProfile;