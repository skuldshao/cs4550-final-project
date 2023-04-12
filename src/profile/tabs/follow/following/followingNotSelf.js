import React from "react";
import Following from "./following";

function FollowingNotSelf(
    { user = {
        "userName": "SpaceX",
        "handle": "2h",
        "avatarIcon": "https://ovicio.com.br/wp-content/uploads/2022/06/20220616-20220616_200814-555x555.jpg",
        "number": "tesla.png",
        "email": "blah"
    }, tabs }
) {
    return (
        <Following isSelf={false} isEditing={false} tabs={tabs} user={user}/>
    );
}

export default FollowingNotSelf