import React, {useEffect, useState} from "react";
import songArray from '../song.json';
import SearchResultItem from "./search-result-item";
import { useLocation, useHistory } from "react-router-dom";
import {searchTracks, getToken, getTrack} from "../../services/spotify-service";

import "../../styles.css"

const answer = [];

/*
const searchSpotify = async () => {
    const results = await searchTracks(query);
    setResults(results);
    //navigate(`/napster/search/${search}`);
};

 */

const SearchResultList = () => {
    const [results, setResults] = useState([]);
    const { search } = window.location;
    const query = new URLSearchParams(search).get("search");

    const searchSpotify = async () => {
        const results = await searchTracks(query);
        setResults(results);
    };

    if (results.length === 0 || ! query) {
        return(
            <div className="wd-white">No Results</div>
        )
    }
    else {
        return(
            <div></div>
            /*
            <ul className="list-group">
                {
                    tracks.map(track =>
                        <SearchResultItem key={track.id} result={track}/>
                    )
                }
            </ul>

             */
        )
    }
    /*
    const filteredSongs = songArray.filter((song) => {
        const songName = song.name.toLowerCase();
        return songName.includes(query);
    })

     */

    /*
    if (filteredSongs.length === 0 || !query) {
        return(
            <div className="wd-white">No Results</div>
        )
    }
    else {
        return(
            <ul className="list-group">
                {
                    filteredSongs.map(result =>
                        <SearchResultItem key={result.id} result={result}/>)
                }
            </ul>
        )
    }

     */
}

export default SearchResultList;