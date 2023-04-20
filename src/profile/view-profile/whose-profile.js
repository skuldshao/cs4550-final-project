import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import * as userService from "../../services/user-service";
import {
    profileThunk as userProfileThunk,
    updateUserThunk as updateCurrentUserThunk
} from "../../services/user-auth-thunk";
import {updateUserThunk} from "../../services/user-thunk";

const WhoseProfile = ({uid, loggedIn}) => {
    const dispatch = useDispatch();
    const [user, setUser] = useState({});
    const [alert, setAlert] = useState(false)
    const getUserByUsername = async () => {
        const user = await userService.findUserById(uid);
        setUser(user);
        setUserFollowers(user.followers)
    };

    const [isFollowing, setIsFollowing] = useState(true)
    const [userFollowers, setUserFollowers] = useState([])
    const [currentUserFollowing, setCurrentUserFollowing] = useState([])

    useEffect(() => {
        getUserByUsername();
    }, []);

    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);
    const getUserProfile = async () => {
        const user = await dispatch(userProfileThunk())
        setProfile(user.payload);
        setLoading(false)
        setCurrentUserFollowing(user.payload.following);
        setIsFollowing(user.payload.following.includes(uid))
    };
    useEffect(() => {
        dispatch(userProfileThunk())
        getUserProfile();
    }, []);
    return (
        <div>
            {alert && <div className="alert alert-danger alert-dismissible" role="alert">
                <div className="fs-5 fw-normal"><i className="bi bi-exclamation-triangle-fill"/>You are not logged
                    in, <Link to="/login" className="text-decoration-none text-danger fw-bold">click here
                        to login</Link> or <Link to="/signup" className="text-decoration-none text-danger fw-bold">here
                        to register</Link>
                </div>
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"
                        onClick={() => setAlert(false)}/>
            </div>}
            {!loading && <div className="d-flex justify-content-between">
                <div className="d-flex">
                    <img className="rounded-circle pt-0 ms-5 align-self-center" width={100} height={100}
                         src={`/images/${user.avatarIcon}`}/>
                    <div className="ps-5 wd-off-white-fg">
                        <div className="lh-1 text-white fw-bold fs-1 wd-off-white-fg pb-2">{user.userName}</div>
                        <div className="lh-1 text-secondary pb-1">@{user.handle}</div>
                    </div>
                </div>
                <div className="align-self-center me-5">
                    {loggedIn &&
                    (isFollowing ?
                            <button
                                className="btn btn-outline-danger btn-danger text-black rounded-3 fw-bold rounded-3 ms-auto align-self-center"
                                onClick={() => {
                                    const newFollowers = userFollowers.filter(f => f !== profile._id)
                                    const newFollowing = currentUserFollowing.filter(f => f !== user._id)
                                    setUserFollowers(newFollowers)
                                    setCurrentUserFollowing(newFollowing)
                                    dispatch(updateUserThunk({...user, "followers": newFollowers}))
                                    dispatch(updateCurrentUserThunk({...profile, "following": newFollowing}))
                                    setIsFollowing(!isFollowing)
                                }
                                }>
                                FOLLOWING
                            </button> :
                            <button className="btn btn-outline-danger rounded-3 fw-bold ms-auto align-self-center"
                                    onClick={() => {
                                        const newFollowers = [...userFollowers, profile._id]
                                        const newFollowing = [...currentUserFollowing, user._id]
                                        setUserFollowers(newFollowers)
                                        setUserFollowers(newFollowing)
                                        setCurrentUserFollowing(newFollowing)
                                        dispatch(updateUserThunk({...user, "followers": newFollowers}))
                                        dispatch(updateCurrentUserThunk({...profile, "following": newFollowing}))
                                        setIsFollowing(!isFollowing)

                                    }
                                    }>
                                FOLLOW
                            </button>
                    )}
                    {!loggedIn &&
                    <button className="btn btn-outline-danger rounded-3 fw-bold ms-auto align-self-center"
                            onClick={() => setAlert(true)}>
                        FOLLOW
                    </button>
                    }
                </div>
            </div>}
        </div>
    )
}
export default WhoseProfile