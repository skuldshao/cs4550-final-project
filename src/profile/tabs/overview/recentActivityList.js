import activityArray from './recentActivity.json';
import RecentActivityItem from "./recentActivityItem";
import React from "react";

function RecentActivityList() {
    console.log(activityArray);
    return (
        <div className="row wd-black-bg">
            { activityArray.map(activityItem => (<RecentActivityItem activityItem={activityItem}/>))}
        </div>
    );
}

export default RecentActivityList;
