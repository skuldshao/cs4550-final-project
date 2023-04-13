import React, {useState} from "react";
import {Link} from "react-router-dom";
import {getTrack} from "../../../services/spotify-service";

async function PlaylistItem({item}) {
    const track = await getTrack(item);
    console.log(track);
    return (
        <div className="col-6 pt-2 pb-2">
            <div className="d-flex justify-content-between">
                <Link to={``}>
                    <img className="rounded-circle pt-0 align-self-center" width={45} height={45}
                         src={``}/>
                </Link>
                <div className="ps-2">
                    <Link to={``} className="text-white text-decoration-none fs-5 fw-bold ">
                        {track.name}<br/>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default PlaylistItem
