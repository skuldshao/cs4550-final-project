import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
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

        props.returnItemDetails({itemName: track.name, artist: artists[0].name});
        //console.log("in detail: " + artists[0].name);
    };

    useEffect(() => {
        fetchTrack();
    }, []);

    /*
    Todo:
     adjust data (duration ms -> xx:xx format)
     check for empty cases
     map (artists, genres)
     link to album page
     */

    //console.log(artists[0]);
    return (
        <div className="container wd-white">
            <div className="row border">
                <h1>{track.name}</h1>
            </div>
            <div className="row border">
                <div className="col-lg-8 col-xl-8 col-xxl-8 col-md-6 col-sm-6 col-xs-6 col-6">
                    <div className="row border">
                        artist: {artists[0] && artists[0].name}
                    </div>

                    <div className="row border">
                        genre:
                    </div>
                    <div className="row border">
                        duration: {track.duration_ms}
                    </div>
                    <div className="row border">
                        explicit: {track.explicit && track.explicit.toString()}
                    </div>
                    <div className="row border">
                        album: {album.name}
                    </div>
                    <div className="row border">
                        release date: {album.release_date}
                    </div>
                    <div className="row border">
                        popularity: {track.popularity}
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