import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import * as userService from "../../../services/user-service"
import {updateUserThunk} from "../../../services/user-thunk";
import {
    profileThunk as userProfileThunk,
    updateUserThunk as updateCurrentUserThunk
} from "../../../services/user-auth-thunk"
import {useDispatch} from "react-redux";

function FollowItem({fid, loggedIn, isEditing}) {
    const dispatch = useDispatch();
    const [user, setUser] = useState({});
    const [alert, setAlert] = useState(false)
    const getUserByUsername = async () => {
        const user = await userService.findUserById(fid);
        setUser(user);
        setUserFollowers(user.followers)
    };

    const [isFollowing, setIsFollowing] = useState(true)
    const [userFollowers, setUserFollowers] = useState([])
    const [currentUserFollowing, setCurrentUserFollowing] = useState([])
    const [isSelf, setIsSelf] = useState(false);

    useEffect(() => {
        getUserByUsername();
    }, []);

    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);
    const getUserProfile = async () => {
        const users = await dispatch(userProfileThunk())
        setProfile(users.payload);
        setLoading(false)
        setCurrentUserFollowing(users.payload.following);
        setIsFollowing(users.payload.following.includes(fid))
        setIsSelf(users.payload._id === fid)
    };
    useEffect(() => {
        dispatch(userProfileThunk())
        getUserProfile();
    }, []);
    return (
        <div className="pt-2 pb-2 ms-5 mt-3">
            {alert && <div className="alert alert-danger alert-dismissible" role="alert">
                <div className="fs-5 fw-normal"><i className="bi bi-exclamation-triangle-fill"/>You are not logged
                    in, <Link to="/login" className="text-decoration-none text-danger fw-bold">click here
                        to login</Link> or <Link to="/signup" className="text-decoration-none text-danger fw-bold">here
                        to register</Link>
                </div>
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"
                        onClick={() => setAlert(false)}/>
            </div>}
            {(user && !loading) &&
            <div className={`d-flex ${isSelf ? 'justify-content-start' : 'justify-content-between'}`}>
                <Link to={isSelf ? '/profile' : `/profile/${user._id}`}>
                    <img className="rounded-circle pt-0 align-self-center" width={45} height={45}
                         src={`/images/${user.avatarIcon}`}/>
                </Link>
                <div className="ms-3">
                    <Link to={isSelf ? '/profile' : `/profile/${user._id}`}
                          className="text-white text-decoration-none fs-5 fw-bold ">
                        {user.userName}<br/>
                        <span className="text-secondary fw-normal"> @{user.handle}</span>
                    </Link>
                </div>
                {(loggedIn && !isSelf) && (isFollowing ?
                    <>
                        <button
                            className={`btn btn-danger text-black rounded-3 fw-bold rounded-3 ms-auto align-self-center me-5`}
                            disabled={isEditing}
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
                        </button>
                    </> :
                    <button className="btn btn-outline-danger rounded-3 fw-bold ms-auto align-self-center me-5"
                            disabled={isEditing}
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
                    </button>)
                }
                {!loggedIn &&
                <button className="btn btn-outline-danger rounded-3 fw-bold ms-auto align-self-center me-5"
                        onClick={() => setAlert(true)}>
                    FOLLOW
                </button>
                }
            </div>
            }
        </div>
    )
}

export default FollowItem
