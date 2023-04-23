import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {getTrack} from "../../../services/spotify-service";

const PlaylistItem = ({item}) => {
    const [track, setTrack] = useState({});
    const [artists, setArtists] = useState([]);
    const [album, setAlbum] = useState({});
    const fetchTrack = async () => {
        let track;
        if (item) {
            track = await getTrack(item.musicID);
            setTrack(track);
            const artists = track.artists;
            setArtists(artists);
            const album = track.album;
            setAlbum(album);
        }
    }

    useEffect(() => {
        fetchTrack();
    }, []);
    return (
        <div className="pt-2 pb-2 ms-5 mt-3">
            {track ?
                <div className="d-flex justify-content-start">
                    <Link to={`/detail/track/${item.musicID}`}>
                        <img className="pt-0 align-self-center" width={50} height={50}
                             src={album.images && album.images[0].url}/>
                    </Link>
                    <div className="ms-3">
                        <Link to={`/detail/track/${item.musicID}`} className="text-white text-decoration-none fs-5 fw-bold ">
                            {track.name}
                            <br/>
                            <span className="text-secondary">{artists[0] && artists[0].name}</span>
                        </Link>
                    </div>
                </div> : <>No Playlist information available</>
            }
        </div>
    )
}

export default PlaylistItem
