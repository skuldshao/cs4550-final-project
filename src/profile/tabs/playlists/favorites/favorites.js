import ProfileHeaderEdit from "../../../loggedInProfile/profile-header-edit";
import ProfileHeader from "../../../loggedInProfile/profile-header";
import NavTab from "../../tab-nav";
import React, {useEffect, useState} from "react";
import WhoseProfile from "../../../view-profile/whose-profile";
import PlaylistItem from "../playlistItem";
import {useDispatch} from "react-redux";
import {profileThunk as userProfileThunk} from "../../../../services/user-auth-thunk";

const Favorites = ({
                       user = {
                           "userName": "SpaceX",
                           "_id": 5,
                           "handle": "2h",
                           "avatarIcon": "https://ovicio.com.br/wp-content/uploads/2022/06/20220616-20220616_200814-555x555.jpg",
                           "number": "8899878777",
                           "email": "blah",
                           "following": [],
                           "followers": [],
                           "favoriteSongs": [],
                       }, tabs, isEditing, isSelf, currentUser = {
        "userName": "SpaceX",
        "_id": 5,
        "handle": "2h",
        "avatarIcon": "https://ovicio.com.br/wp-content/uploads/2022/06/20220616-20220616_200814-555x555.jpg",
        "number": "78898777",
        "email": "blah",
        "following": [],
        "followers": []
    }, loggedIn
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
                {!isSelf ? <WhoseProfile user={user} currentUser={currentUser} loggedIn={loggedIn}/> :
                    (isEditing ? <ProfileHeaderEdit active={tabs.active}/> :
                        <ProfileHeader active={tabs.active} profile={profile}/>)}
                <NavTab tabs={tabs} isEditing={isEditing} user={user} isSelf={isSelf}
                        following={profile.following.length} followers={profile.followers.length}/>
                {
                    profile.favoriteSongs.length > 0 ? profile.favoriteSongs.map(f => <PlaylistItem
                            item={f}/>) :
                        (isSelf ? <span
                                className="d-flex justify-content-start text-white ms-5 fw-normal mt-3 mb-3 fs-5">You have no songs in your favorites playlist</span> :
                            <span
                                className="d-flex justify-content-start text-white ms-5 fw-normal mt-3 mb-3 fs-5">{user.userName} has no songs in their favorites playlist</span>)
                }
            </div>}
        </div>
    )
}

export default Favorites;