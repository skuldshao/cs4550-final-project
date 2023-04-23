import "../styles.css"
import React, {useEffect, useState} from "react";
import TimeDisplay from "../time-display";
import ReviewItem from "../profile/tabs/reviews/reviewItem";
import CommentItem from "../profile/tabs/reviews/commentItem";
import PlaylistItem from "../profile/tabs/playlists/playlistItem";
import {Link} from "react-router-dom";

export const HomeList = ({activityItem, currentID}) => {
    const isSelf = activityItem.user._id === currentID;

    return (
        <li className="list-group-item border-0 bg-black">
            <div className="wd-bg-grey p-2 rounded-2">
                {activityItem.type === "review" &&
                <div>
                    <div className="d-flex justify-content-between">
                        <div className="fw-normal d-flex justify-content-start">
                            <Link to={isSelf ? `/profile/newSongs` : `/profile/newSongs/${activityItem.user._id}`}
                                  className="text-decoration-none text-white align-self-center">
                                <img src={`/images/${activityItem.user.avatarIcon}`}
                                     className="rounded-circle align-self-center"
                                     height="50" width="50"/>
                            </Link>
                            <Link to={isSelf ? `/profile/newSongs` : `/profile/newSongs/${activityItem.user._id}`}
                                  className="text-decoration-none text-white align-self-center">
                                <div className="ms-2 align-self-center">
                                    {isSelf ? 'You' : activityItem.user.userName} left a <span
                                    className="fw-bold">review </span>
                                </div>
                            </Link>
                        </div>
                        <div className="align-self-center text-white me-0"><TimeDisplay itemDate={activityItem.date}/>
                        </div>
                    </div>
                    <ReviewItem reviewItem={activityItem} date={false}/>
                </div>}
                {activityItem.type === "comments" &&
                <div>
                    <div className="d-flex justify-content-between">
                        <div className="fw-normal d-flex justify-content-start">
                            <Link to={isSelf ? `/profile/newSongs` : `/profile/newSongs/${activityItem.user._id}`}
                                  className="text-decoration-none text-white align-self-center">
                                <img src={`/images/${activityItem.user.avatarIcon}`}
                                     className="rounded-circle align-self-center"
                                     height="50" width="50"/>
                            </Link>
                            <Link to={isSelf ? `/profile/newSongs` : `/profile/newSongs/${activityItem.user._id}`}
                                  className="text-decoration-none text-white align-self-center">
                                <div className="ms-2 align-self-center">
                                    {isSelf ? 'You' : activityItem.user.userName} left a <span
                                    className="fw-bold">comment</span> on a review
                                </div>
                            </Link>
                        </div>
                        <div className="align-self-center text-white me-0"><TimeDisplay itemDate={activityItem.date}/>
                        </div>
                    </div>
                    <CommentItem item={activityItem}/>
                </div>
                }
                {(activityItem.type === "favorites") &&
                <Link to={isSelf ? `/profile/favoriteSongs` : `/profile/favoriteSongs/${activityItem.user._id}`}
                      className="text-decoration-none text-white">
                    <div className="d-flex justify-content-between">
                        <div className="fw-normal d-flex justify-content-start">
                            <img src={`/images/${activityItem.user.avatarIcon}`}
                                 className="rounded-circle align-self-center"
                                 height="50" width="50"/>
                            <div className="ms-2 align-self-center">
                                {isSelf ? 'You added a song to your ' : `${activityItem.user.userName} added a song to their `}<span
                                className="fw-bold">Favorite Songs </span> playlist
                            </div>
                        </div>
                        <div className="align-self-center text-white me-0"><TimeDisplay itemDate={activityItem.date}/>
                        </div>
                    </div>
                    <PlaylistItem item={activityItem}/>
                </Link>}
                {(activityItem.type === "newSongs") &&
                <Link to={isSelf ? `/profile/newSongs` : `/profile/newSongs/${activityItem.user._id}`}
                      className="text-decoration-none text-white">
                    <div className="d-flex justify-content-between">
                        <div className="fw-normal d-flex justify-content-start">
                            <img src={`/images/${activityItem.user.avatarIcon}`}
                                 className="rounded-circle align-self-center"
                                 height="50" width="50"/>
                            <div className="ms-2 align-self-center">
                                {isSelf ? 'You added a song to your ' : `${activityItem.user.userName} added a song to their `}<span
                                className="fw-bold">New Songs </span>playlist
                            </div>
                        </div>
                        <div className="align-self-center text-white me-0"><TimeDisplay itemDate={activityItem.date}/>
                        </div>
                    </div>
                    <PlaylistItem item={activityItem}/>
                </Link>}
                {(activityItem.type === "joined") &&
                <Link to={isSelf ? `/profile` : `/profile/${activityItem.user._id}`}
                      className="text-decoration-none text-white">
                    <div className="d-flex justify-content-between">
                        <div className="fw-normal d-flex justify-content-start">
                            <div>
                                <img src={`/images/${activityItem.user.avatarIcon}`}
                                     className="rounded-circle align-self-center"
                                     height="50" width="50"/>
                            </div>
                            <div className="ms-2 align-self-center">
                                {isSelf ? 'You ' :
                                    <>a new <span
                                        className="fw-bold">{activityItem.kind}</span> {activityItem.user.userName} </>}
                                just <span
                                className="fw-bold">joined </span>
                            </div>
                        </div>
                        <div className="align-self-center text-white me-0"><TimeDisplay itemDate={activityItem.date}/>
                        </div>
                    </div>
                </Link>}
            </div>
        </li>
    )
}