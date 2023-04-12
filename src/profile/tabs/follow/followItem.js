import React, {useState} from "react";
import {Link} from "react-router-dom";
import users from "../../../data/users.json"

function FollowItem({fid, currentUser}) {
    const user = users.find(u => u._id === fid)
    const [isFollowing, setIsFollowing] = useState(currentUser.following.includes(fid))
    return (
        <div className="col-6 pt-2 pb-2">
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
                {isFollowing ?
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
                    </button>
                }
            </div>
        </div>
    )
}

export default FollowItem
