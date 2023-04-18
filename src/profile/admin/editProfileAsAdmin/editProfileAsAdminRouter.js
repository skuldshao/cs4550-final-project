import {useParams} from "react-router";
import React, {useEffect} from "react";
import ReviewsAdminEdit from "../../tabs/reviews/reviewsAdminEdit";
import OverViewAdminEdit from "../../tabs/overview/overViewAdminEdit";
import FollowingAdminEdit from "../../tabs/follow/following/FollowingAdminEdit";
import FollowersAdminEdit from "../../tabs/follow/followers/followersAdminEdit";
import FavoritesAdminEdit from "../../tabs/playlists/favorites/favoritesAdminEdit";
import ListenToMoreAdminEdit from "../../tabs/playlists/listenToMore/listenToMoreAdminEdit";
import {useDispatch, useSelector} from "react-redux";
import {findUserByIdThunk} from "../../../services/user-thunk";

const EditProfileAsAdminRouter = ({tabs}) => {
    const {uid} = useParams();
    const {foundUser, loading, displayFoundUser} = useSelector((state) => state.userData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findUserByIdThunk(uid))
    }, [uid]);
    return (
        <div className="text-white">
            {loading && <div>LOADING DATA</div>}
            {(tabs.active === "overview" && displayFoundUser) && <OverViewAdminEdit tabs={tabs} user={foundUser}/>}
            {(tabs.active === "reviews" && displayFoundUser) && <ReviewsAdminEdit tabs={tabs} user={foundUser}/>}
            {(tabs.active === "following" && displayFoundUser) && <FollowingAdminEdit tabs={tabs} user={foundUser}/>}
            {(tabs.active === "followers" && displayFoundUser) && <FollowersAdminEdit tabs={tabs} user={foundUser}/>}
            {(tabs.active === "favoriteSongs" && displayFoundUser) &&
            <FavoritesAdminEdit tabs={tabs} user={foundUser}/>}
            {(tabs.active === "newSongs" && displayFoundUser) && <ListenToMoreAdminEdit tabs={tabs} user={foundUser}/>}
        </div>
    )
}
export default EditProfileAsAdminRouter;