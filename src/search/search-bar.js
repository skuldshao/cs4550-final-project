import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {searchItems} from "../services/spotify-service";

import "./index.css";
//
//import SearchResultList from "./search-result-item/search-result-list";
import SearchResultTrack from "./search-result-item/search-result-track";
import SearchResultAlbum from "./search-result-item/search-result-album";
import {useLocation} from "react-router";

function SearchBar() {
    const loc = useLocation();
    const { query } = useParams();
    const navigate = useNavigate();
    //const prev =  loc.search.substring(1, loc.search.length);
    //console.log("q: " + q);
    //const [prev, setPrev] = useState("");
    const [search, setSearch] = useState(query);
    const [results, setResults] = useState({});
    const [searchType, setSearchType]  = useState("tracks");
    const [isLoading, setIsLoading] = useState(false);
    //const prev = loc.search.substring(1, loc.search.length);
    //console.log("search: " + search);
    //console.log("query: " + query);

    const showItem = (e) => {
        setSearchType(e.target.value)
        searchSpotify();
    }

    const searchSpotify = async () => {
        //setIsLoading(true);
        const results = await searchItems(search);
        //console.log(results.albums);
        //console.log(results.tracks);
        //console.log("query: " + query);
        //console.log("search: " + search);

        console.log(searchType);
        setResults(results);
        navigate(`/search/${search}`);
    };

    useEffect(() => {
        if (query) {
            setSearch(query);
            //setSearchType(loc.state ? searchType : "albums");
            //console.log("state: " + searchType)
            searchSpotify();
        }
    }, [query]);

    return (
        <div className="text-white">
            <h1>Song Search</h1>
            {query? <div>
                Results for: {query}
            </div> : <div></div>}
            <div className="form-group">
                <label htmlFor="search-bar">
                    <span className="visually-hidden">Search</span>
                </label>
                <div className="d-flex">
                    <div className="flex-fill">
                        <input
                            type="text"
                            id="search-input"
                            name="search-bar"
                            placeholder="search"
                            className="form-control rounded-pill"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                    <div>
                        <button onClick={searchSpotify}
                                className="btn btn-danger rounded-circle">
                            <i className="bi bi-search "/>
                        </button>
                    </div>
                </div>
                <br></br>
                {

                        <div className="d-flex ms-2 mb-1">
                    <input type="radio"
                           value="tracks"
                           id="tracks"
                           checked={searchType === "tracks"}
                           onChange={showItem}
                           name="search-type"
                           className="me-1"/>
                    <label htmlFor="tracks">Tracks</label>
                    <input type="radio"
                           value="albums"
                           id="albums"
                           checked={searchType === "albums"}
                           onChange={showItem}
                           name="search-type"
                           className="ms-3 me-1"/>
                    <label htmlFor="albums">Albums</label>
                </div>}
                {query && (results.tracks?.length || results.albums?.length) > 0 && (
                    <ul className="list-group">
                        {searchType === "tracks" ? (
                            results.tracks?.map((result) => <SearchResultTrack key={result.id} result={result} />)
                        ) : (
                            results.albums?.map((result) => <SearchResultAlbum key={result.id} result={result} />)
                        )}
                    </ul>
                )}
                {query && (!results.tracks?.length && !results.albums?.length) && (
                    <div className="text-center">
                        No {searchType} found for '{search}'
                    </div>
                )}

                {/*<pre>{JSON.stringify(results, null, 2)}</pre>*/}
            </div>
        </div>
    );
}
export default SearchBar;
