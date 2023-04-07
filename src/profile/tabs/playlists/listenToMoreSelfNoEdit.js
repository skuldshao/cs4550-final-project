import React from "react";
import ListenToMore from "./listenToMore";

const ListenToMoreSelfNoEdit = ( { user = {
    "isSelf": true,
    "userName": "SpaceX",
    "handle": "2h",
    "avatarIcon": "https://ovicio.com.br/wp-content/uploads/2022/06/20220616-20220616_200814-555x555.jpg",
    "phoneNumber": "tesla.png",
    "email": "blah",
    "following": [],
    "followers": []
}, tabs}) => {
    return (
        <ListenToMore tabs={tabs} isEditing={false} isSelf={true} user={user}/>
    )
}

export default ListenToMoreSelfNoEdit;