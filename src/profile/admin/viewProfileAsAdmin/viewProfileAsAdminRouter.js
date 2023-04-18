import {useParams} from "react-router";
import users from "../../../data/users.json";
import React, {useEffect} from "react";
import OverViewAdmin from "../../tabs/overview/overViewAdmin";
import ReviewsAdmin from "../../tabs/reviews/reviewsAdmin";
import FollowingAdmin from "../../tabs/follow/following/followingAdmin";
import FollowersAdmin from "../../tabs/follow/followers/followersAdmin";
import FavoritesAdmin from "../../tabs/playlists/favorites/favoritesAdmin";
import ListenToMoreAdmin from "../../tabs/playlists/listenToMore/listenToMoreAdmin";
import {useDispatch, useSelector} from "react-redux";
import {findUserByIdThunk} from "../../../services/user-thunk";

const ViewProfileAsAdminRouter = ({tabs}) => {
    const {uid} = useParams();
    const {users, loading, display} = useSelector((state) => state.userData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findUserByIdThunk(uid))
    }, [uid]);
    return (
        <div className="text-white">
            {loading && <div>LOADING DATA</div>}
            {(tabs.active === "overview" && display) && <OverViewAdmin tabs={tabs} user={users}/>}
            {(tabs.active === "reviews" && display) && <ReviewsAdmin tabs={tabs} user={users}/>}
            {(tabs.active === "following" && display) && <FollowingAdmin tabs={tabs} user={users}/>}
            {(tabs.active === "followers" && display) && <FollowersAdmin tabs={tabs} user={users}/>}
            {(tabs.active === "favoriteSongs" && display) && <FavoritesAdmin tabs={tabs} user={users}/>}
            {(tabs.active === "newSongs" && display) && <ListenToMoreAdmin tabs={tabs} user={users}/>}
        </div>
    )
}
export default ViewProfileAsAdminRouter;