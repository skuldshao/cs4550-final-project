import React from "react";
import {Link} from "react-router-dom";

function FollowItem( {followItem = {
                         "userName":"User Name",
                         "handle": "handle",
                         "avatarIcon": "https://ovicio.com.br/wp-content/uploads/2022/06/20220616-20220616_200814-555x555.jpg",
                         "isFollowing": true
                     }}
) {
    return (
            <div className="col-6 pt-2 pb-2">
                <div className="d-flex justify-content-between">
                    <img className="rounded-circle pt-0 align-self-center" width={45} height={45} src={followItem.avatarIcon}/>
                        <div className="ps-2">
                            <Link to={`profile/${followItem.handle}`} className="text-white text-decoration-none fs-5 fw-bold ">
                                {followItem.userName}<br/>
                                <span className="text-secondary fw-normal"> @{followItem.handle}</span>
                            </Link>
                        </div>
                            { followItem.isFollowing ?
                                <button className="btn btn-outline-danger btn-danger text-black rounded-3 fw-bold rounded-3 ms-auto align-self-center">
                                    FOLLOWING
                                </button> :
                                <button className="btn btn-outline-danger rounded-3 fw-bold ms-auto align-self-center">
                                    FOLLOW
                                </button>
                            }
                    </div>
        </div>
    )
}

export default FollowItem
