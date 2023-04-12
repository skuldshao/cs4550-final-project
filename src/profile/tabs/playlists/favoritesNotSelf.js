import React from "react";
import Favorites from "./favorites";

const FavoritesNotSelf = ({
                              user = {
                                  "_id": 5,
                                  "userName": "SpaceX",
                                  "handle": "2h",
                                  "avatarIcon": "https://ovicio.com.br/wp-content/uploads/2022/06/20220616-20220616_200814-555x555.jpg",
                                  "number": "56789",
                                  "email": "blah"
                              }, tabs, loggedIn
                          }) => {
    return (
        <div>
            <Favorites tabs={tabs} isEditing={false} isSelf={false} user={user} loggedIn={loggedIn}/>
        </div>
    )
}

export default FavoritesNotSelf;