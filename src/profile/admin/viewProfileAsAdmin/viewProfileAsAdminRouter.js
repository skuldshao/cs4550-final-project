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
    const {foundUser, loading, displayFoundUser} = useSelector((state) => state.userData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findUserByIdThunk(uid))
    }, [uid]);
    return (
        <div className="text-white">
            {loading && <div>LOADING DATA</div>}
            {(tabs.active === "overview" && displayFoundUser) && <OverViewAdmin tabs={tabs} user={foundUser}/>}
            {(tabs.active === "reviews" && displayFoundUser) && <ReviewsAdmin tabs={tabs} user={foundUser}/>}
            {(tabs.active === "following" && displayFoundUser) && <FollowingAdmin tabs={tabs} user={foundUser}/>}
            {(tabs.active === "followers" && displayFoundUser) && <FollowersAdmin tabs={tabs} user={foundUser}/>}
            {(tabs.active === "favoriteSongs" && displayFoundUser) && <FavoritesAdmin tabs={tabs} user={foundUser}/>}
            {(tabs.active === "newSongs" && displayFoundUser) && <ListenToMoreAdmin tabs={tabs} user={foundUser}/>}
        </div>
    )
}
export default ViewProfileAsAdminRouter;