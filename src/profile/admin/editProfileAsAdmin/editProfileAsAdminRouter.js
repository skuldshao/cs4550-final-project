import {useParams} from "react-router";
import React, {useEffect} from "react";
import ReviewsAdminEdit from "../../tabs/reviews/reviewsAdminEdit";
import OverViewAdminEdit from "../../tabs/overview/overViewAdminEdit";
import FavoritesAdminEdit from "../../tabs/playlists/favorites/favoritesAdminEdit";
import ListenToMoreAdminEdit from "../../tabs/playlists/listenToMore/listenToMoreAdminEdit";
import {useDispatch, useSelector} from "react-redux";
import {findUserByIdThunk, findUserThunk} from "../../../services/user-thunk";
import FollowingAdmin from "../../tabs/follow/following/followingAdmin";
import FollowersAdmin from "../../tabs/follow/followers/followersAdmin";

const EditProfileAsAdminRouter = ({tabs}) => {
    const {uid} = useParams();
    const {foundUser, loading, displayFoundUser, users, display} = useSelector((state) => state.userData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findUserByIdThunk(uid))
    }, [uid]);
    useEffect(() => {
        dispatch(findUserThunk())
    }, []);
    return (
        <div className="text-white">
            {loading && <div>LOADING DATA</div>}
            {(tabs.active === "overview" && displayFoundUser) && <OverViewAdminEdit tabs={tabs} user={foundUser}/>}
            {(tabs.active === "reviews" && displayFoundUser) && <ReviewsAdminEdit tabs={tabs} user={foundUser}/>}
            {(tabs.active === "following" && displayFoundUser && display) &&
            <FollowingAdmin tabs={tabs} user={foundUser} isEditing={true}
                            following={(users.find(u => u._id === uid)).following}
                            followers={(users.find(u => u._id === uid)).followers.length}/>}
            {(tabs.active === "followers" && displayFoundUser && display) &&
            <FollowersAdmin tabs={tabs} user={foundUser} isEditing={true}
                            followers={(users.find(u => u._id === uid)).followers}
                            following={(users.find(u => u._id === uid)).following.length}/>}
            {(tabs.active === "favoriteSongs" && displayFoundUser) &&
            <FavoritesAdminEdit tabs={tabs} user={foundUser}/>}
            {(tabs.active === "newSongs" && displayFoundUser) && <ListenToMoreAdminEdit tabs={tabs} user={foundUser}/>}
        </div>
    )
}
export default EditProfileAsAdminRouter;