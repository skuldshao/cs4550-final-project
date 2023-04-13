import {useParams} from "react-router";
import users from "../../../data/users.json";
import React from "react";
import ReviewsAdminEdit from "../../tabs/reviews/reviewsAdminEdit";
import OverViewAdminEdit from "../../tabs/overview/overViewAdminEdit";
import FollowingAdminEdit from "../../tabs/follow/following/FollowingAdminEdit";
import FollowersAdminEdit from "../../tabs/follow/followers/followersAdminEdit";
import FavoritesAdminEdit from "../../tabs/playlists/favorites/favoritesAdminEdit";
import ListenToMoreAdminEdit from "../../tabs/playlists/listenToMore/listenToMoreAdminEdit";

const EditProfileAsAdminRouter = ({tabs}) => {
    const params = useParams();
    const uid = parseInt(params.uid);
    const user = users.find(
        u => {
            return u._id === uid
        });
    return (
        <div>
            {tabs.active === "overview" && <OverViewAdminEdit tabs={tabs} user={user}/>}
            {tabs.active === "reviews" && <ReviewsAdminEdit tabs={tabs} user={user}/>}
            {tabs.active === "following" && <FollowingAdminEdit tabs={tabs} user={user}/>}
            {tabs.active === "followers" && <FollowersAdminEdit tabs={tabs} user={user}/>}
            {tabs.active === "favoriteSongs" && <FavoritesAdminEdit tabs={tabs} user={user}/>}
            {tabs.active === "newSongs" && <ListenToMoreAdminEdit tabs={tabs} user={user}/>}
        </div>
    )
}
export default EditProfileAsAdminRouter;