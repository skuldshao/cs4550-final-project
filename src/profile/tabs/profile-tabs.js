import React from "react";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import Overview from "./overview";
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
                           element={<Overview/>}/>
                    <Route path="/reviews"
                           element={<Reviews/>}/>
                    <Route path="/following"
                           element={<Following/>}/>
                    <Route path="/followers"
                           element={<Followers/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default ProfileTabs

