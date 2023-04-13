import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getTrack } from "../services/spotify-service"

function TrackDetail() {
    const { id } = useParams();
    const [track, setTrack] = useState({});
    const [artists, setArtists] = useState([]);

    const fetchTrack = async () => {
        const track = await getTrack(id);
        setTrack(track);
        const artists = track.artists;
        setArtists(artists);
        //console.log(track);
    };

    useEffect(() => {
        fetchTrack();
    }, []);

    console.log(artists[0]);
    return (
        <div className="container wd-white">
            <div className="row border">
                <h1>{track.name}</h1>
            </div>
            <div className="row border">
                <div className="col">
                    <div className="row border">
                        Artist: {artists[0] && artists[0].name}
                    </div>
                </div>
                <div className="col">
                    <div className="row border">
                        <audio className="" controls>
                            <source src="" type="audio/mpeg"/>
                        </audio>
                    </div>

                </div>

            </div>





            <pre>{JSON.stringify(artists, null, 1)}</pre>

        </div>
    )
}
export default TrackDetail;

/*
const SongDetail = (
    {
        result = {
            "name": "Song Name",
            "icon": "https://upload.wikimedia.org/wikipedia/en/9/9f/Midnights_-_Taylor_Swift.png",
            "album": "Album Name",
            "artist": "Artist Name",
            "genre": "Genre",
            "description": "xxx",
            "length": "x.xx"
        }
    }
) => {
    return (
        <>
            <div className="d-flex flex-row">
                <div className="col-6 align-items-center">
                    <div><h1>{result.name}</h1></div>
                    <div><span className="fw-bold">Artist:</span> {result.name}</div>
                    <div><span className="fw-bold">Album:</span> {result.album}</div>
                    <div><span className="fw-bold">Genre:</span> {result.genre}</div>
                    <div><span className="fw-bold">Length:</span> {result.length}</div>
                    <div className="">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                    </div>


              </div>
              <div className="col-6">
                  <img
                       className="img-fluid"
                       alt=""
                       src={result.icon}/>
              </div>
          </div>
          <br/>

        </>
    );
}



 */