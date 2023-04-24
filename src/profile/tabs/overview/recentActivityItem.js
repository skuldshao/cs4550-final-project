import React from "react";
import ReviewItem from "../reviews/reviewItem";
import PlaylistItem from "../playlists/playlistItem";
import CommentItem from "../reviews/commentItem";
import TimeDisplay from "../../../time-display";

function RecentActivityItem({activityItem}
) {
    return (
        <div>
            {activityItem.type === "review" && <div>
                <div className="fw-normal">
                    Left a <span className="fw-bold">review </span> on a {activityItem.itemType} <span
                    className="text-secondary"> • </span>
                    <span className="text-secondary"><TimeDisplay itemDate={activityItem.date}/></span>
                </div>
                <ReviewItem reviewItem={activityItem} date={false}/>
            </div>}
            {activityItem.type === "comments" &&
            <div>
                <div className="fw-normal">
                    Left a <span className="fw-bold">comment</span> on a review of a {activityItem.itemType} <span
                    className="text-secondary"> • </span>
                    <TimeDisplay
                        itemDate={activityItem.date}/>
                </div>
                <CommentItem item={activityItem}/>
            </div>
            }
            {(activityItem.type === "favorites") &&
            <div>
                <div className="fw-normal">
                    Added a song to their <span className="fw-bold">Favorite Songs </span> playlist
                    <span className="text-secondary"> • </span>
                    <TimeDisplay itemDate={activityItem.date}/>
                </div>
                <PlaylistItem item={activityItem}/>
            </div>}
            {(activityItem.type === "newSongs") &&
            <div>
                <div className="fw-normal">Added a song to their <span className="fw-bold">New Songs </span>playlist
                    <span className="text-secondary"> • </span>
                    <TimeDisplay itemDate={activityItem.date}/>
                </div>
                <PlaylistItem item={activityItem}/>
            </div>}
        </div>
    )
}

export default RecentActivityItem
