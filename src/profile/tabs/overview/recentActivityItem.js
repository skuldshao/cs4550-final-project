import React from "react";
import {Link} from "react-router-dom";

function RecentActivityItem({activityItem}
) {
    if (activityItem.type === "review") {
        return (
            <div>
                <Link to={`profile/${activityItem.handle}`} className="text-white text-decoration-none">
                    <span className="fw-bold">{activityItem.user} (@{activityItem.handle})</span>
                </Link> left a
                <Link to={`profile/${activityItem.reviewLink}`}
                      className="text-white text-decoration-none fw-bold"> review
                </Link> for
                <Link to={activityItem.songLink} className="text-white text-decoration-none">
                    <span className="fw-bold"> {activityItem.songReviewed}</span>
                </Link>
                {activityItem.reviewPreview ? (<>: {activityItem.reviewPreview}...</>) : (<>.</>)}
                <span className="text-secondary lh-lg"> • {activityItem.time}</span>
            </div>
        )

    } else if (activityItem.type === "follow") {
        return (
            <div className="wd-black-bg">
                <div>
                    <Link to={`profile/${activityItem.handle}`} className="text-white text-decoration-none">
                        <span className="fw-bold">{activityItem.user} (@{activityItem.handle})</span>
                    </Link> started following
                    <Link to={`profile/${activityItem.followedHandle}`} className="text-white text-decoration-none">
                        <span className="fw-bold"> {activityItem.followedUser} (@{activityItem.followedHandle})</span>
                    </Link>
                    <span className="text-secondary">. • {activityItem.time}</span>
                </div>
            </div>
        );
    }
}

export default RecentActivityItem
