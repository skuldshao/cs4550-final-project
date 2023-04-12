import React from "react";
import NavTab from "../../tab-nav";
import FollowItemAdmin from "../followItemAdmin";
import EditProfileAsAdmin from "../../../admin/editProfileAsAdmin";

function FollowingAdminEdit(
    { user = {
        "userName": "SpaceX",
        "_id": 5,
        "handle": "2h",
        "avatarIcon": "https://ovicio.com.br/wp-content/uploads/2022/06/20220616-20220616_200814-555x555.jpg",
        "number": "tesla.png",
        "email": "blah",
        "following": [],
    }, tabs }
) {
    const following = user.following;
    return (
        <div>
            <div className="row wd-black-bg text-start">
                <EditProfileAsAdmin active={tabs.active} user={user}/>
                <NavTab tabs={tabs} isEditing={true} user={user} isSelf={false}/>
                <div className="row wd-black-bg p-3 pt-4 ps-5 align-items-center">
                    {following.length === 0 ? <span className=" d-flex justify-content-center text-white ms-5 fw-normal">{user.userName} is not following anyone</span> :
                        following.map(followingItem => <FollowItemAdmin fid={followingItem} pUser={user} tab="following"/>)}
                    }
                </div>
            </div>
        </div>
    );
}

export default FollowingAdminEdit