import React, {useState} from "react";
import {Link} from "react-router-dom";

const WhoseProfile = ({user, currentUser, loggedIn}) => {
    const [isFollowing, setIsFollowing] = useState(currentUser.following.includes(user._id))
    const [alert, setAlert] = useState(false);
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
            <div className="d-flex justify-content-between">
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
                    )}
                    {!loggedIn &&
                    <button className="btn btn-outline-danger rounded-3 fw-bold ms-auto align-self-center"
                            onClick={() => setAlert(true)}>
                        FOLLOW
                    </button>
                    }
                </div>
            </div>
        </div>
    )
}
export default WhoseProfile