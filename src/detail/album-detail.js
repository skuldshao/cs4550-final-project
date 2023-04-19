import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAlbum } from "../services/spotify-service"
import TrackDetail from "./track-detail";


function AlbumDetail(props) {
    const { id } = useParams();
    const [album, setAlbum] = useState({});
    const [artists, setArtists] = useState([]);
    const [tracks, setTracks] = useState([]);

    const fetchAlbum = async () => {
        const album = await getAlbum(id);
        setAlbum(album);
        const artists = album.artists;
        setArtists(album.artists);
        const tracks = album.tracks.items;
        setTracks(tracks);
        //props.returnItemDetails({itemName: album.name, artist: artists[0].name})
    }

    useEffect(() => {
        fetchAlbum();
    }, []);

    console.log(tracks);

    return (
        <div className="container text-white">
            <div className="row border">
                <h1>{album.name}</h1>
            </div>
            <div className="row border">
                <div className="col-lg-8 col-xl-8 col-xxl-8 col-md-6 col-sm-6 col-xs-6 col-6">
                    <div className="row border">
                        artist: {artists[0] && artists[0].name}
                    </div>
                    <div className="row border">
                        release date: {album.release_date}
                    </div>
                    <div className="row border">
                        genre:
                    </div>
                    <div className="row border">
                        popularity: {album.popularity}
                    </div>
                    {
                        tracks.map((result) =>
                        <div className="row border">
                            {result.name}
                        </div>
                        )
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





        </div>
    )

}
export default AlbumDetail;