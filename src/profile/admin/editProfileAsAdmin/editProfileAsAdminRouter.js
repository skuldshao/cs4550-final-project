import {useParams} from "react-router";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findUserByIdThunk, findUserThunk} from "../../../services/user-thunk";
import FollowingAdmin from "../../tabs/follow/following/followingAdmin";
import FollowersAdmin from "../../tabs/follow/followers/followersAdmin";
import ReviewsAdmin from "../../tabs/reviews/reviewsAdmin";
import OverViewAdmin from "../../tabs/overview/overViewAdmin";
import FavoritesAdmin from "../../tabs/playlists/favorites/favoritesAdmin";
import ListenToMoreAdmin from "../../tabs/playlists/listenToMore/listenToMoreAdmin";
import {findAdminByIdThunk} from "../../../services/admin-thunk";

const EditProfileAsAdminRouter = ({tabs}) => {
    const {uid} = useParams();
    const {users, display} = useSelector((state) => state.userData)
    const [loading, setLoading] = useState(true)
    const [profile, setProfile] = useState({})
    const [admin, setAdmin] = useState(false)
    const dispatch = useDispatch();
    const thiss = async () => {
        const thing = await dispatch(findUserByIdThunk(uid))
        if (thing.payload) {
            setProfile(thing.payload)
            setLoading(false)
            setAdmin(false)
        } else {
            const admins = await dispatch(findAdminByIdThunk(uid))
            setAdmin(true)
            setProfile(admins.payload)
            setLoading(false)
        }
    }
    useEffect(() => {
        thiss()
        // dispatch(findUserThunk())
    }, []);
    return (
        <div className="text-white">
            {loading && <div>LOADING DATA</div>}
            {(admin && !loading) && <div>
                <OverViewAdmin tabs={tabs} user={profile} isEditing={true} admin={admin}/>
            </div>}
            {(!admin && !loading) &&
            <div>
                {(tabs.active === "overview" && display && !loading) &&
                <OverViewAdmin tabs={tabs} user={profile} isEditing={true}
                               followers={(users.find(u => u._id === uid)).followers.length}
                               following={(users.find(u => u._id === uid)).following.length}
                />}
                {(tabs.active === "reviews" && !loading && display) &&
                <ReviewsAdmin tabs={tabs} user={profile} isEditing={true}
                              followers={(users.find(u => u._id === uid)).followers.length}
                              following={(users.find(u => u._id === uid)).following.length}/>}
                {(tabs.active === "following" && !loading && display) &&
                <FollowingAdmin tabs={tabs} user={profile} isEditing={true}
                                following={(users.find(u => u._id === uid)).following}
                                followers={(users.find(u => u._id === uid)).followers.length}/>}
                {(tabs.active === "followers" && !loading && display) &&
                <FollowersAdmin tabs={tabs} user={profile} isEditing={true}
                                followers={(users.find(u => u._id === uid)).followers}
                                following={(users.find(u => u._id === uid)).following.length}/>}
                {(tabs.active === "favoriteSongs" && !loading && display) &&
                <FavoritesAdmin tabs={tabs} user={profile} isEditing={true}
                                followers={(users.find(u => u._id === uid)).followers.length}
                                following={(users.find(u => u._id === uid)).following.length}/>}
                {(tabs.active === "newSongs" && !loading && display) &&
                <ListenToMoreAdmin tabs={tabs} user={profile} isEditing={true}
                                   followers={(users.find(u => u._id === uid)).followers.length}
                                   following={(users.find(u => u._id === uid)).following.length}/>}
            </div>}
        </div>
    )
}
export default EditProfileAsAdminRouter;