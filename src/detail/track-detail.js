import React, {useState, useEffect} from "react";
import {useSelector} from "react-redux";
import {MsToMin} from "./detail";
import {useParams} from "react-router-dom";
import {getTrack} from "../services/spotify-service"

function TrackDetail(props) {
    const {id} = useParams();
    const [track, setTrack] = useState({});
    const [artists, setArtists] = useState([]);
    const [album, setAlbum] = useState({});
    const [release, setRelease] = useState('')

    const fetchTrack = async () => {
        const track = await getTrack(id);
        setTrack(track);
        const artists = track.artists;
        setArtists(artists);
        const album = track.album;
        setAlbum(album);

        const input = track.album.release_date
        const [year, day, month] = input.split('-')
        setRelease(`${day}/${month}/${year}`)


        props.returnItemDetails({itemName: track.name, artist: artists[0].name, art: album.images[0].url});
        //console.log("in detail: " + artists[0].name);
    };

    useEffect(() => {
        fetchTrack();
    }, []);


    //console.log(artists[0]);
    return (
        <div className="container wd-white">
            <div className="row border border-danger p-3">
                <h1>{track.name}</h1>
            </div>
            <div className="row border-danger border border-top-0">
                <div className="col-lg-8 col-xl-8 col-xxl-8 col-md-6 col-sm-6 col-xs-6 col-6">
                    <div className="row border border-start-0 border-end-0 border-top-0 p-2 border-danger">
                        <span><b>artist:</b> {artists[0] && artists[0].name}</span>
                    </div>
                    <div className="row border border-danger border-start-0 border-end-0 border-top-0 p-2">
                        <span><b>duration:</b> {MsToMin(track.duration_ms)} s </span>
                    </div>
                    {
                        track.explicit &&
                        <div className="row border border-start-0 border-end-0 border-top-0 p-2 border-danger">
                            <span><b>explicit:</b> {track.explicit.toString()}</span>
                        </div>
                    }
                    <div className="row border border-start-0 border-end-0 border-top-0 p-2 border-danger">
                        <span><b>album:</b> {album.name}</span>
                    </div>
                    <div className="row border border-start-0 border-end-0 border-top-0 p-2 border-danger">
                        <span><b>release date:</b> {release}</span>
                    </div>
                    <div className="row border border-start-0 border-end-0 border-top-0 p-2 border-danger">
                        <span><b>popularity:</b> {track.popularity}</span>
                    </div>

                    {track.preview_url &&
                    <div className="p-3 row">
                        <audio controls src={track.preview_url}/>
                    </div>
                    }

                </div>
                {/* ----------------------------------------------------------------------------------------*/}
                <div className="col">
                    <div className="row border border-end-0 border-top-0 border-bottom-0 border-danger">
                        <img className="w-auto h-auto p-3"
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