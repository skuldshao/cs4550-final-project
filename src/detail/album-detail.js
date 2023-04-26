import React, {useState, useEffect} from "react";
import {useSelector} from "react-redux";
import {getGenres} from "./detail";
import {useParams} from "react-router-dom";
import {getAlbum} from "../services/spotify-service"
import {Link} from "react-router-dom"


function AlbumDetail(props) {
    const {id} = useParams();
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
        props.returnItemDetails({itemName: album.name, artist: artists[0].name, art: album.images[0].url})
    }

    useEffect(() => {
        fetchAlbum();
    }, []);

    //console.log(album);

    return (
        <div className="container text-white">
            <div className="row border border-danger p-3">
                <h1>{album.name}</h1>
            </div>
            <div className="row border border-danger border-top-0 ">
                <div className="col-lg-8 col-xl-8 col-xxl-8 col-md-6 col-sm-6 col-xs-6 col-6">
                    <div className="row border border-danger border-top-0 border-start-0 border-end-0 p-2">
                        <span><b>artist:</b> {artists[0] && artists[0].name}</span>
                    </div>
                    <div className="row border border-danger border-top-0 border-start-0 border-end-0 p-2">
                        <span><b>release date:</b> {album.release_date}</span>
                    </div>
                    {
                        album.genres && (album.genres.length >= 1) &&
                        <div className="row border border-danger border-top-0 border-start-0 border-end-0 p-2">
                            <span><b>genre:</b> {getGenres(album.genres)}</span>
                        </div>
                    }
                    <div className="row border border-danger border-top-0 border-start-0 border-end-0 p-2">
                        <span><b>popularity:</b> {album.popularity}</span>
                    </div>
                    <div className="row border border-danger border-top-0 border-start-0 border-end-0 p-2">
                        <h2>Tracks</h2>
                    </div>
                    <div
                        className="row border border-danger border-top-0 border-start-0 border-end-0 p-2 border-bottom-0">
                        <ol className="list-group list-group-flush ps-5 pt-2 pb-2">
                            {
                                tracks.map((result) =>
                                    <Link to={`/detail/track/${result.id}`} className="text-white text-decoration-none">
                                        <li>
                                            {result.name}
                                        </li>
                                    </Link>
                                )
                            }
                        </ol>
                    </div>
                </div>

                {/* ----------------------------------------------------------------------------------------*/}
                <div className="col">
                    <div className="row border p-3 border-danger border-top-0 border-end-0">
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