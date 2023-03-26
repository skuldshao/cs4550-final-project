import React from "react";
import NavTab from "../tab-nav";
import FollowItem from "./followItem";
import followingArray from "./following.json";

function Following(
    { who = {
        "isSelf": true,
        "userName": "SpaceX",
        "handle": "2h",
        "avatarIcon": "https://ovicio.com.br/wp-content/uploads/2022/06/20220616-20220616_200814-555x555.jpg",
        "phoneNumber": "tesla.png",
        "email": "blah"
    }, tabs }
) {
    return (
        <div>
            <NavTab tabs={tabs}/>
            <div className="row wd-black-bg p-3 pt-4 align-items-center">
                { followingArray.map(followingItem => <FollowItem followItem={followingItem}/>)}
            </div>
        </div>
    );
}

export default Following