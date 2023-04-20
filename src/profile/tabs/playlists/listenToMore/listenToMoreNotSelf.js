import React, {useEffect, useState} from "react";
import ListenToMore from "./listenToMore";
import {useDispatch} from "react-redux";
import {profileThunk as userProfileThunk} from "../../../../services/user-auth-thunk";
import WhoseProfile from "../../../view-profile/whose-profile";
import ProfileHeaderEdit from "../../../loggedInProfile/profile-header-edit";
import ProfileHeader from "../../../loggedInProfile/profile-header";
import NavTab from "../../tab-nav";
import PlaylistItem from "../playlistItem";

const ListenToMoreNotSelf = ({
                                 user = {
                                     "userName": "SpaceX",
                                     "handle": "2h",
                                     "avatarIcon": "https://ovicio.com.br/wp-content/uploads/2022/06/20220616-20220616_200814-555x555.jpg",
                                     "number": "5678",
                                     "email": "blah"
                                 }, tabs, loggedIn
                             }) => {
    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const getUserProfile = async () => {
        const user = await dispatch(userProfileThunk())
        setProfile(user.payload);
        setLoading(false)
    };
    useEffect(() => {
        dispatch(userProfileThunk())
        getUserProfile();
    }, []);
    return (
        <div>
            {!loading && <div className="wd-black-bg text-start">
                <WhoseProfile uid={user._id} loggedIn={loggedIn}/>
                <NavTab tabs={tabs} isEditing={false} user={user} isSelf={false}
                        followers={user.followers.length} following={user.following.length}/>
                {
                    profile.newSongs.length > 0 ? profile.newSongs.map(f => <PlaylistItem
                            item={f}/>) :
                        <span
                            className="d-flex justify-content-start text-white ms-5 fw-normal mt-3 mb-3 fs-5">{user.userName} has no songs in their new songs playlist</span>
                }
            </div>}
        </div>
    )
}

export default ListenToMoreNotSelf;