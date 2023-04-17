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
    const {users, loading, display} = useSelector((state) => state.userData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findUserByIdThunk(uid))
    }, [uid]);
    return (
        <div className="text-white">
            {loading && <div>LOADING DATA</div>}
            {(tabs.active === "overview" && display) && <OverViewAdminEdit tabs={tabs} user={users}/>}
            {(tabs.active === "reviews" && display) && <ReviewsAdminEdit tabs={tabs} user={users}/>}
            {(tabs.active === "following" && display) && <FollowingAdminEdit tabs={tabs} user={users}/>}
            {(tabs.active === "followers" && display) && <FollowersAdminEdit tabs={tabs} user={users}/>}
            {(tabs.active === "favoriteSongs" && display) && <FavoritesAdminEdit tabs={tabs} user={users}/>}
            {(tabs.active === "newSongs" && display) && <ListenToMoreAdminEdit tabs={tabs} user={users}/>}
        </div>
    )
}
export default EditProfileAsAdminRouter;