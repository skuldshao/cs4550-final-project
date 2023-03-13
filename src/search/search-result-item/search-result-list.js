import React from "react";
import songs from '../song.json';
import SearchResultItem from "./search-result-item";

const { search } = window.location;
const query = new URLSearchParams(search).get("search");

//TODO: filter songs to only those that match the search input
// - initial: empty
// - after search press
//      - found result: - display all
//      - not found: - display "found none"

const SearchResultList = () => {
    if (!query) {
        return(
            <div>No Results</div>
        )
    }
    return(
        <ul className="list-group">
            {
                songs.filter((song) => {
                    const songName = song.name.toLowerCase();
                    return songName.includes(query);
                }).map(result =>
                    <SearchResultItem key={result.name} result={result}/>)
            }
        </ul>
    )
}
export default SearchResultList;