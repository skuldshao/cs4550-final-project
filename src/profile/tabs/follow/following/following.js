import React, {useEffect, useState} from "react";
import NavTab from "../../tab-nav";
import FollowItem from "../followItem";
import ProfileHeaderEdit from "../../../loggedInProfile/profile-header-edit";
import ProfileHeader from "../../../loggedInProfile/profile-header";
import WhoseProfile from "../../../view-profile/whose-profile";
import {useDispatch} from "react-redux";
import {profileThunk as userProfileThunk} from "../../../../services/user-auth-thunk";

function Following(
    {
        user = {
            "userName": "SpaceX",
            "_id": 5,
            "handle": "2h",
            "avatarIcon": "https://ovicio.com.br/wp-content/uploads/2022/06/20220616-20220616_200814-555x555.jpg",
            "number": "tesla.png",
            "email": "blah",
            "following": [],
            "followers": [],
        }, tabs, isEditing, isSelf, currentUser = {
        "userName": "SpaceX",
        "_id": 5,
        "handle": "2h",
        "avatarIcon": "https://ovicio.com.br/wp-content/uploads/2022/06/20220616-20220616_200814-555x555.jpg",
        "number": "tesla.png",
        "email": "blah",
        "followers": [],
        "following": []
    }, loggedIn
    }
) {
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
                {!isSelf ? <WhoseProfile uid={user._id} loggedIn={loggedIn}/> :
                    (isEditing ? <ProfileHeaderEdit active={tabs.active}/> :
                        <ProfileHeader active={tabs.active} profile={profile}/>)}
                <NavTab tabs={tabs} isEditing={isEditing} user={user} isSelf={isSelf}
                        followers={profile.followers.length} following={profile.following.length}/>
                <div className="wd-black-bg align-items-center">
                    {profile.following.length === 0 ? (isSelf ?
                            <span className=" d-flex justify-content-start text-white ms-5 fw-normal fs-5 mt-3 mb-1">You are not following anyone</span> :
                            <span
                                className=" d-flex justify-content-start text-white ms-5 fw-normal fs-5 mt-3 mb-1">{user.userName} is not following anyone</span>) :
                        profile.following.map(followingItem => <FollowItem fid={followingItem} currentUser={currentUser}
                                                                           loggedIn={loggedIn}/>)}
                </div>
            </div>}
        </div>
    );
}

export default Following