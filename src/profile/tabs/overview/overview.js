import React from "react";
import {Link} from "react-router-dom";
import NavTab from "../tab-nav";
import RecentActivityList from "./recentActivityList";


function OverView( {
    about = {
        yearJoined: 2023,
        bio: "Biography biography biography biography biography biography biography biography biography biography biography biography biography biography biography biography biography",
        location: "Boston",
        publicLocation: true
    },
    tabs}
) {
    return (
        <div className="row wd-black-bg">
            <NavTab tabs={tabs}></NavTab>
            <div className="row ps-3 pt-4">
                <div className="col-9 text-white">
                    <p className="fw-bold fs-5">RECENT ACTIVITY</p>
                    <RecentActivityList/>
                </div>
                <div className="col-3 text-white">
                    <p className="fw-bold fs-5">ABOUT</p>
                </div>
            </div>
        </div>
    );
}

export default OverView
