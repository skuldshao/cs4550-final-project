import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {searchTracks} from "../services/spotify-service";

import "./index.css";
import SearchResultList from "./search-result-item/search-result-list";
import SearchResultItem from "./search-result-item/search-result-item";
import {useLocation} from "react-router";

function SearchBar() {
    const loc = useLocation();
    const { query } = useParams();
    const navigate = useNavigate();
    //const prev =  loc.search.substring(1, loc.search.length);
    //console.log("q: " + q);
    //const [prev, setPrev] = useState("");
    const [search, setSearch] = useState(query);
    const [results, setResults] = useState([]);
    //const prev = loc.search.substring(1, loc.search.length);
    console.log("search: " + search);
    console.log("query: " + query);

    const searchSpotify = async () => {
        const results = await searchTracks(search);
        //console.log("query: " + query);
        //console.log("search: " + search);
        setResults(results);
        navigate(`/search/${search}`);
    };

    useEffect(() => {
        if (query) {
            setSearch(query);
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
                    query?

                    <ul className="list-group">
                        {
                            results.map((result) => {
                                return(<SearchResultItem key={result.id} result={result}/>)
                            })
                        }
                    </ul>

                        :

                        <div className="text-center">
                            no results
                        </div>
                }

                {/*<pre>{JSON.stringify(results, null, 2)}</pre>*/}
            </div>
        </div>
    );
}
export default SearchBar;
    /*
    return (
        <>
            <form action="/search" method="get">
                <label htmlFor="search-bar">
                    <span className="visually-hidden">Search</span>
                </label>
                <div className="d-flex flex-row position-relative align-items-center justify-content-between mb-2">
                    <div className="position-absolute">
                        <button type="submit"
                                onClick={searchSpotify}
                                className="btn color-red rounded-circle">
                            <i className="bi bi-search "/>
                        </button>
                    </div>
                    <div className="flex-fill">
                        <input type="text"
                               id="test"
                               name="search"
                               value={search}
                               placeholder="Search"
                               onChange={(e) => setSearch(e.target.value)}
                               className="form-control rounded-pill ps-5"/>

                    </div>
                </div>
            </form>
            <pre>{JSON.stringify(results, null, 2)}</pre>
            <ul className="list-group">
                {

                    results.map((result) => {
                        return(

                            <li>{result.name}</li>
                        )
                    })
                }
            </ul>
        </>
    )
}

     */

/*
const SearchBar1 = () => (
    <>
        <form action="/search" method="get">
            <label htmlFor="search-bar">
                <span className="visually-hidden">Search</span>
            </label>
            <div className="d-flex flex-row position-relative align-items-center justify-content-between mb-2">
                <div className="position-absolute">
                    <button type="submit"
                            className="btn color-red rounded-circle">
                        <i className="bi bi-search "/>
                    </button>
                </div>
                <div className="flex-fill">
                    <input type="text"
                           id="test"
                           name="search"
                           placeholder="Search"
                           className="form-control rounded-pill ps-5"/>
                </div>
            </div>
        </form>
        <SearchResultList/>
    </>
)

 */

// export default SearchBar;
