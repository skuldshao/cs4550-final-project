import React from "react";
import {Link} from "react-router-dom";
import users from "../../../data/users.json"

function FollowItemAdmin( {fid, tab, pUser }) {
    const user = users.find(u => u._id === fid)
    return (
        <div className="col-6 pt-2 pb-2">
            <div className="d-flex justify-content-start">
                <Link to={`/profile/${user._id}`}>
                    <img className="rounded-circle pt-0 align-self-center" width={45} height={45} src={`/images/${user.avatarIcon}`}/>
                </Link>
                <div className="ps-2">
                    <Link to={`/profile/${user._id}`} className="text-white text-decoration-none fs-5 fw-bold ">
                        {user.userName}<br/>
                        <span className="text-secondary fw-normal"> @{user.handle}</span>
                    </Link>
                </div>
                { tab === "following" ?
                    <button className="btn btn-outline-danger btn-danger text-black rounded-3 fw-bold rounded-3 ms-auto align-self-center"
                            onClick={() => {
                                user.followers.remove(pUser._id)
                                pUser.following.remove(user._id);
                            }
                            }>
                        UNFOLLOW
                    </button> :
                    <button className="btn btn-outline-danger rounded-3 fw-bold ms-auto align-self-center"
                            onClick={() => {
                                user.followers.push(pUser._id)
                                pUser.following.push(user._id);
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
