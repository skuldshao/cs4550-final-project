import React from "react";
import NavTab from "../tab-nav";
import RecentActivityList from "./recentActivityList";
import About from "./about";


function OverView( {tabs, isEditing}
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
                    <About isEditing={isEditing}/>
                </div>
            </div>
        </div>
    );
}

export default OverView
