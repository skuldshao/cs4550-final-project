import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import * as userService from "../../../services/user-service";
import {useDispatch} from "react-redux";
import {updateUserThunk} from "../../../services/user-thunk";

function FollowItemAdmin({fid, tab, pUser, isEditing}) {
    const [user, setUser] = useState({});
    const dispatch = useDispatch();
    const getUserByUsername = async () => {
        const userToSet = await userService.findUserById(fid);
        setUser(userToSet);
        setUserFollowing(userToSet.following);
        setUserFollowers(userToSet.followers)
    };
    useEffect(() => {
        getUserByUsername();

    }, []);
    const [userFollowers, setUserFollowers] = useState([])
    const [userFollowing, setUserFollowing] = useState([])
    const [pFollowing, setPFollowing] = useState(pUser.following)
    const [pFollowers, setPFollowers] = useState(pUser.followers)
    return (
        <div className="pt-2 pb-2 ms-5 mt-3">
            <div className="d-flex justify-content-between">
                <Link to={`/profile/${user._id}`}>
                    <img className="rounded-circle pt-0 align-self-center" width={45} height={45}
                         src={`/images/${user.avatarIcon}`}/>
                </Link>
                <div className="ps-2">
                    <Link to={`/profile/${user._id}`} className="text-white text-decoration-none fs-5 fw-bold ">
                        {user.userName}<br/>
                        <span className="text-secondary fw-normal"> @{user.handle}</span>
                    </Link>
                </div>
                {tab === "following" ?
                    <button
                        className={`btn btn-danger text-black rounded-3 fw-bold rounded-3 ms-auto align-self-center me-5`}
                        disabled={isEditing}
                        onClick={() => {
                            const newFollowers = userFollowers.filter(f => f !== pUser._id)
                            const newFollowing = pFollowing.filter(f => f !== user._id)
                            setUserFollowers(newFollowers)
                            setPFollowing(newFollowing)
                            dispatch(updateUserThunk({...user, "followers": newFollowers}))
                            dispatch(updateUserThunk({...pUser, "following": newFollowing}))
                        }
                        }>
                        STOP FOLLOWING
                    </button> :
                    <button className="btn btn-outline-danger rounded-3 fw-bold ms-auto align-self-center me-5"
                            disabled={isEditing}
                            onClick={() => {
                                const newFollowers = pFollowers.filter(f => f !== user._id);
                                const newFollowing = userFollowing.filter(f => f !== pUser._id)
                                setPFollowers(newFollowers)
                                setUserFollowing(newFollowing)
                                dispatch(updateUserThunk({...pUser, "followers": newFollowers}))
                                dispatch(updateUserThunk({...user, "following": newFollowing}))
                            }
                            }>
                        REMOVE FOLLOWER
                    </button>
                }
            </div>
        </div>
    )
}

export default FollowItemAdmin
