import React, {useState} from "react";
import {Link} from "react-router-dom";
import users from "../../../data/users.json"

function FollowItem({fid, currentUser, loggedIn}) {
    const user = users.find(u => u._id === fid)
    const [isFollowing, setIsFollowing] = useState(currentUser.following.includes(fid))
    const [alert, setAlert] = useState(false)
    return (
        <div className="col-6 pt-2 pb-2">
            {alert && <div className="alert alert-danger alert-dismissible" role="alert">
                <div><i className="bi bi-exclamation-triangle-fill"/>You are not logged in, click here to login or here
                    to register
                </div>
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"
                        onClick={() => setAlert(false)}/>
            </div>}
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
                {loggedIn && (isFollowing ?
                    <button
                        className="btn btn-outline-danger btn-danger text-black rounded-3 fw-bold rounded-3 ms-auto align-self-center"
                        onClick={() => {
                            user.followers.remove(currentUser._id)
                            currentUser.following.remove(user._id);
                        }
                        }>
                        FOLLOWING
                    </button> :
                    <button className="btn btn-outline-danger rounded-3 fw-bold ms-auto align-self-center"
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
                <button className="btn btn-outline-danger rounded-3 fw-bold ms-auto align-self-center"
                        onClick={() => setAlert(true)}>
                    FOLLOW
                </button>
                }
            </div>
        </div>
    )
}

export default FollowItem
