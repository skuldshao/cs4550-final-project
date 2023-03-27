import React, {useState} from "react";
import songArray from '../song.json';
import SearchResultItem from "./search-result-item";
import { useLocation, useHistory } from "react-router-dom";

const { search } = window.location;
const {test} = "/search"
const query = new URLSearchParams(search).get("search");




const SearchResultList = () => {
    const filteredSongs = songArray.filter((song) => {
        const songName = song.name.toLowerCase();
        return songName.includes(query);
    })
    if (filteredSongs.length === 0 || !query) {
        return(
            <div>No Results</div>
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
}

export default SearchResultList;