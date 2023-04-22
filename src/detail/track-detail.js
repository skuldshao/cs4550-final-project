import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {MsToMin} from "./detail";
import { useParams } from "react-router-dom";
import { getTrack } from "../services/spotify-service"

function TrackDetail(props) {
    const { id } = useParams();
    const [track, setTrack] = useState({});
    const [artists, setArtists] = useState([]);
    const [album, setAlbum] = useState({});

    const fetchTrack = async () => {
        const track = await getTrack(id);
        setTrack(track);
        const artists = track.artists;
        setArtists(artists);
        const album = track.album;
        setAlbum(album);

        console.log(track);
        console.log(album);

        props.returnItemDetails({itemName: track.name, artist: artists[0].name});
        //console.log("in detail: " + artists[0].name);
    };

    useEffect(() => {
        fetchTrack();
    }, []);

    //console.log(artists[0]);
    return (
        <div className="container wd-white">
            <div className="row border">
                <h1>{track.name}</h1>
            </div>
            <div className="row border">
                <div className="col-lg-8 col-xl-8 col-xxl-8 col-md-6 col-sm-6 col-xs-6 col-6">
                    <div className="row border">
                        <span><b>artist:</b> {artists[0] && artists[0].name}</span>
                    </div>
                    <div className="row border">
                        <span><b>duration:</b> {MsToMin(track.duration_ms)} s </span>
                    </div>
                    {
                        track.explicit &&
                        <div className="row border">
                            explicit: {track.explicit.toString()}
                        </div>
                    }
                    <div className="row border">
                        <span><b>album:</b> {album.name}</span>
                    </div>
                    <div className="row border">
                        <span><b>release date:</b> {album.release_date}</span>
                    </div>
                    <div className="row border">
                        <span><b>popularity:</b> {track.popularity}</span>
                    </div>

                    {   track.preview_url &&
                        <div className="row border">
                            <audio controls src={track.preview_url}></audio>
                        </div>
                    }

                </div>
                {/* ----------------------------------------------------------------------------------------*/}
                <div className="col">
                    <div className="row border">
                        <img className="w-auto h-auto"
                             alt=""
                             src={album.images && album.images[0].url}/>
                    </div>

                </div>

            </div>



            {/*<pre>{JSON.stringify(track, null, 1)}</pre>*/}


        </div>
    )
}
export default TrackDetail;