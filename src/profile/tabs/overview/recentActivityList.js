import activityArray from './recentActivity.json';
import RecentActivityItem from "./recentActivityItem";
import React from "react";

function RecentActivityList() {
    return (
        <div className="wd-black-bg ps-3">
            {activityArray.map(activityItem => (<RecentActivityItem activityItem={activityItem}/>))}
        </div>
    );
}

export default RecentActivityList;
