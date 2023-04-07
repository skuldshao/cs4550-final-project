import React from "react";

const WhoseProfile = ({user, currentUser}) => {
    const isFollowing = currentUser.following.includes(user._id)
    return (
        <div className="d-flex justify-content-between">
            <div className="d-flex">
                <img className="rounded-circle pt-0 ms-5 align-self-center" width={100} height={100} src={`../images/${user.avatarIcon}`}/>
                <div className="ps-5 wd-off-white-fg">
                    <div className="lh-1 text-white fw-bold fs-1 wd-off-white-fg pb-2">{user.userName}</div>
                    <div className="lh-1 text-secondary pb-1">@{user.handle}</div>
                </div>
            </div>
            <div className="align-self-center me-5">
                { isFollowing ?
                    <button className="btn btn-outline-danger btn-danger text-black rounded-3 fw-bold rounded-3 ms-auto align-self-center"
                    onClick={() => {
                        user.followers.remove(currentUser._id)
                        currentUser.following.remove(user._id);
                        console.log(currentUser.following)
                        console.log(user.followers)
                    }
                    }>
                        FOLLOWING
                    </button> :
                    <button className="btn btn-outline-danger rounded-3 fw-bold ms-auto align-self-center"
                    onClick={() => {
                        user.followers.push(currentUser._id)
                        currentUser.following.push(user._id);
                        console.log(currentUser.following)
                        console.log(user.followers)
                    }
                    }>
                        FOLLOW
                    </button>
                }
            </div>
        </div>
    )
}
export default WhoseProfile