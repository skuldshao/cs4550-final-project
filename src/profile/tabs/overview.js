import React from "react";
import {Link} from "react-router-dom";
import NavTab from "./tab-nav";


function OverView(
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
        <div className="row wd-black-bg">
            <NavTab></NavTab>
            <div className="row ps-3 pt-4">
                <div className="col-9 text-white">
                    <p className="fw-bold fs-5">RECENT ACTIVITY</p>
                </div>
                <div className="col-3 text-white">
                    <p className="fw-bold fs-5">ABOUT</p>
                </div>
            </div>
        </div>
    );
}

export default OverView
