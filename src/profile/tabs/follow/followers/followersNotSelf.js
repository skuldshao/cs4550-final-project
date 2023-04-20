import React, {useEffect, useState} from "react";
import Followers from "./followers";
import {useDispatch} from "react-redux";
import {profileThunk as userProfileThunk} from "../../../../services/user-auth-thunk";
import WhoseProfile from "../../../view-profile/whose-profile";
import ProfileHeaderEdit from "../../../loggedInProfile/profile-header-edit";
import ProfileHeader from "../../../loggedInProfile/profile-header";
import NavTab from "../../tab-nav";
import FollowItem from "../followItem";
import * as userService from "../../../../services/user-service";

function FollowersNotSelf(
    {
        user = {
            "userName": "SpaceX",
            "handle": "2h",
            "avatarIcon": "https://ovicio.com.br/wp-content/uploads/2022/06/20220616-20220616_200814-555x555.jpg",
            "number": "7887665",
            "email": "blah"
        }, tabs, loggedIn
    }
) {
    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);
    const [loading2, setLoading2] = useState(true);
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

    const [useUser, setUser] = useState({});
    const getUserByUsername = async () => {
        const users = await userService.findUserById(user._id);
        setUser(users);
        setLoading2(false)
    };

    useEffect(() => {
        getUserByUsername();
    }, []);
    return (
        <div>
            {(!loading && !loading2) && <div className="wd-black-bg text-start">
                <WhoseProfile uid={user._id} loggedIn={loggedIn}/>
                <NavTab tabs={tabs} isEditing={false} user={useUser} isSelf={false}
                        followers={useUser.followers.length}
                        following={useUser.following.length}/>
                <div className="wd-black-bg align-items-center">
                    {user.followers.length === 0 ? <span
                            className=" d-flex justify-content-start text-white ms-5 fw-normal fs-5 mt-3 mb-3">{user.userName} has no followers</span> :
                        user.followers.map(followerItem => <FollowItem fid={followerItem} currentUser={profile}
                                                                       loggedIn={loggedIn}/>)}
                </div>
            </div>}
        </div>
    );
}

export default FollowersNotSelf