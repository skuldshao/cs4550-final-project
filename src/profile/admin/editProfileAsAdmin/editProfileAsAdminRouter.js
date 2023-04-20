import {useParams} from "react-router";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findUserByIdThunk, findUserThunk} from "../../../services/user-thunk";
import FollowingAdmin from "../../tabs/follow/following/followingAdmin";
import FollowersAdmin from "../../tabs/follow/followers/followersAdmin";
import ReviewsAdmin from "../../tabs/reviews/reviewsAdmin";
import OverViewAdmin from "../../tabs/overview/overViewAdmin";
import FavoritesAdmin from "../../tabs/playlists/favorites/favoritesAdmin";
import ListenToMoreAdmin from "../../tabs/playlists/listenToMore/listenToMoreAdmin";

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
            {(tabs.active === "overview" && displayFoundUser && display) &&
            <OverViewAdmin tabs={tabs} user={foundUser} isEditing={true}
                           followers={(users.find(u => u._id === uid)).followers.length}
                           following={(users.find(u => u._id === uid)).following.length}
            />}
            {(tabs.active === "reviews" && displayFoundUser && display) &&
            <ReviewsAdmin tabs={tabs} user={foundUser} isEditing={true}
                          followers={(users.find(u => u._id === uid)).followers.length}
                          following={(users.find(u => u._id === uid)).following.length}/>}
            {(tabs.active === "following" && displayFoundUser && display) &&
            <FollowingAdmin tabs={tabs} user={foundUser} isEditing={true}
                            following={(users.find(u => u._id === uid)).following}
                            followers={(users.find(u => u._id === uid)).followers.length}/>}
            {(tabs.active === "followers" && displayFoundUser && display) &&
            <FollowersAdmin tabs={tabs} user={foundUser} isEditing={true}
                            followers={(users.find(u => u._id === uid)).followers}
                            following={(users.find(u => u._id === uid)).following.length}/>}
            {(tabs.active === "favoriteSongs" && displayFoundUser && display) &&
            <FavoritesAdmin tabs={tabs} user={foundUser} isEditing={true}
                            followers={(users.find(u => u._id === uid)).followers.length}
                            following={(users.find(u => u._id === uid)).following.length}/>}
            {(tabs.active === "newSongs" && displayFoundUser && display) &&
            <ListenToMoreAdmin tabs={tabs} user={foundUser} isEditing={true}
                               followers={(users.find(u => u._id === uid)).followers.length}
                               following={(users.find(u => u._id === uid)).following.length}/>}
        </div>
    )
}
export default EditProfileAsAdminRouter;