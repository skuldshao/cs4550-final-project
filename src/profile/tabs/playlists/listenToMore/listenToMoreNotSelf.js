import React from "react";
import ListenToMore from "./listenToMore";

const ListenToMoreNotSelf = ({
                                 user = {
                                     "userName": "SpaceX",
                                     "handle": "2h",
                                     "avatarIcon": "https://ovicio.com.br/wp-content/uploads/2022/06/20220616-20220616_200814-555x555.jpg",
                                     "number": "5678",
                                     "email": "blah"
                                 }, tabs, loggedIn
                             }) => {
    return (
        <ListenToMore tabs={tabs} isEditing={false} isSelf={false} user={user} loggedIn={loggedIn}/>
    )
}

export default ListenToMoreNotSelf;