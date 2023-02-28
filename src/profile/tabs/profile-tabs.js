import React from "react";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import Overview from "./overview/overview";
import Reviews from "./reviews";
import Following from "./following";
import Followers from "./followers";

function ProfileTabs(
    who = {
        "isSelf": true,
        "userName": "SpaceX",
        "handle": "2h",
        "avatarIcon": "https://ovicio.com.br/wp-content/uploads/2022/06/20220616-20220616_200814-555x555.jpg",
        "phoneNumber": "tesla.png",
        "email": "blah"
    }
) {
    return (
        <BrowserRouter>
            <div className="p-5 pt-0">
                <Routes>
                    <Route index
                           element={<Overview tabs={{ active: "overview" }}/>}/>
                    <Route path="/reviews"
                           element={<Reviews tabs={{ active: "reviews" }}/>}/>
                    <Route path="/following"
                           element={<Following tabs={{ active: "following" }}/>}/>
                    <Route path="/followers"
                           element={<Followers tabs={{ active: "followers" }}/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default ProfileTabs

