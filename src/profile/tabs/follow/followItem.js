import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import * as userService from "../../../services/user-service"

function FollowItem({fid, currentUser, loggedIn}) {
    const [user, setUser] = useState({});
    const [isFollowing, setIsFollowing] = useState(currentUser.following.includes(fid))
    const [alert, setAlert] = useState(false)
    const getUserByUsername = async () => {
        const user = await userService.findUserById(fid);
        setUser(user);
    };
    useEffect(() => {
        getUserByUsername();
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
            {user && <div className="d-flex justify-content-between">
                <Link to={`/profile/${user._id}`}>
                    <img className="rounded-circle pt-0 align-self-center" width={45} height={45}
                         src={`/images/${user.avatarIcon}`}/>
                </Link>
                <div className="ms-3">
                    <Link to={`/profile/${user._id}`} className="text-white text-decoration-none fs-5 fw-bold ">
                        {user.userName}<br/>
                        <span className="text-secondary fw-normal"> @{user.handle}</span>
                    </Link>
                </div>
                {loggedIn && (isFollowing ?
                    <button
                        className="btn btn-outline-danger btn-danger text-black rounded-3 fw-bold rounded-3 ms-auto align-self-center me-5"
                        onClick={() => {
                            user.followers.remove(currentUser._id)
                            currentUser.following.remove(user._id);
                            setIsFollowing(!isFollowing)
                        }
                        }>
                        FOLLOWING
                    </button> :
                    <button className="btn btn-outline-danger rounded-3 fw-bold ms-auto align-self-center me-5"
                            onClick={() => {
                                user.followers.push(currentUser._id)
                                currentUser.following.push(user._id);
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
