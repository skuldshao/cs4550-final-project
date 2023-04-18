import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import users from "../../../data/users.json"
import * as userService from "../../../services/user-service";

function FollowItemAdmin({fid, tab, pUser}) {
    const [user, setUser] = useState({});
    const getUserByUsername = async () => {
        const user = await userService.findUserById(fid);
        setUser(user);
    };
    useEffect(() => {
        getUserByUsername();
    }, []);
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
                        className="btn btn-outline-danger btn-danger text-black rounded-3 fw-bold rounded-3 ms-auto align-self-center me-5"
                        onClick={() => {
                            user.followers.remove(pUser._id)
                            pUser.following.remove(user._id);
                        }
                        }>
                        STOP FOLLOWING
                    </button> :
                    <button className="btn btn-outline-danger rounded-3 fw-bold ms-auto align-self-center me-5"
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
