import React, {useEffect, useState} from "react";
import Following from "./following";
import {useDispatch} from "react-redux";
import {profileThunk as userProfileThunk} from "../../../../services/user-auth-thunk";
import WhoseProfile from "../../../view-profile/whose-profile";
import ProfileHeaderEdit from "../../../loggedInProfile/profile-header-edit";
import ProfileHeader from "../../../loggedInProfile/profile-header";
import NavTab from "../../tab-nav";
import FollowItem from "../followItem";

function FollowingNotSelf(
    {
        user = {
            "userName": "SpaceX",
            "handle": "2h",
            "avatarIcon": "https://ovicio.com.br/wp-content/uploads/2022/06/20220616-20220616_200814-555x555.jpg",
            "number": "tesla.png",
            "email": "blah"
        }, tabs, loggedIn
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
                <WhoseProfile uid={user._id} loggedIn={loggedIn}/>
                <NavTab tabs={tabs} isEditing={false} user={user} isSelf={false}
                        followers={profile.followers.length} following={user.following.length}/>
                <div className="wd-black-bg align-items-center">
                    {user.following.length === 0 ? <span
                            className=" d-flex justify-content-start text-white ms-5 fw-normal fs-5 mt-3 mb-1">{user.userName} is not following anyone</span> :
                        user.following.map(followingItem => <FollowItem fid={followingItem} currentUser={profile}
                                                                        loggedIn={loggedIn}/>)}
                </div>
            </div>}
        </div>
    );
}

export default FollowingNotSelf