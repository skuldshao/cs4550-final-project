import {useParams} from "react-router";
import users from "../../../data/users.json";
import React from "react";
import OverViewAdmin from "../../tabs/overview/overViewAdmin";
import ReviewsAdmin from "../../tabs/reviews/reviewsAdmin";
import FollowingAdmin from "../../tabs/follow/following/followingAdmin";
import FollowersAdmin from "../../tabs/follow/followers/followersAdmin";
import FavoritesAdmin from "../../tabs/playlists/favoritesAdmin";
import ListenToMoreAdmin from "../../tabs/playlists/listenToMoreAdmin";

const ViewProfileAsAdminRouter = ({tabs}) => {
    const params = useParams();
    const uid = parseInt(params.uid);
    const user = users.find(
        u => {
            return u._id === uid
        });
    return (
        <div>
            {tabs.active === "overview" && <OverViewAdmin tabs={tabs} user={user}/>}
            {tabs.active === "reviews" && <ReviewsAdmin tabs={tabs} user={user}/>}
            {tabs.active === "following" && <FollowingAdmin tabs={tabs} user={user}/>}
            {tabs.active === "followers" && <FollowersAdmin tabs={tabs} user={user}/>}
            {tabs.active === "favoriteSongs" && <FavoritesAdmin tabs={tabs} user={user}/>}
            {tabs.active === "newSongs" && <ListenToMoreAdmin tabs={tabs} user={user}/>}
        </div>
    )
}
export default ViewProfileAsAdminRouter;