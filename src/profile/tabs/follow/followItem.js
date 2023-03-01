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
            <div className="col-6 position-relative align-items-center pt-2 pb-2">
                <img className="rounded-circle pt-0" width={45} height={45} src={followItem.avatarIcon}/>
                <div className="position-absolute start-0 top-0 ms-4 ps-5 pt-2 row">
                    <div className="col-8">
                        <Link to={`profile/${followItem.handle}`} className="text-white text-decoration-none fs-5 fw-bold">
                                {followItem.userName}
                            <span className="text-secondary fw-normal"> @{followItem.handle}</span>
                        </Link>
                    </div>
                    { followItem.isFollowing?
                        <div className="col-4">
                            <button className="btn btn-outline-danger btn-danger text-black rounded-3 fw-bold rounded-3 float-end p-1">
                                FOLLOWING
                            </button>
                        </div> :
                    <div className="col-4">
                        <button className="btn btn-outline-danger rounded-3 fw-bold float-end pt-1 pb-1">
                        FOLLOW
                        </button>
                    </div>
                    }
                </div>
        </div>
    )
}

export default FollowItem
