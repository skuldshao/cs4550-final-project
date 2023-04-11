import React, { useState, useEffect } from "react";
import {useParams} from "react-router";
import {Link} from "react-router-dom"
import {searchTracks} from "../services/spotify-service";
import {useNavigate} from "react-router";

import "./index.css";
import SearchResultList from "./search-result-item/search-result-list";
import SearchResultItem from "./search-result-item/search-result-item";

function SearchBar() {
    const {query} = useParams();
    const nav = useNavigate();
    const [search, setSearch] = useState(query);
    const [results, setResults] = useState([]);

    const searchSpotify = async () => {
        const results = await searchTracks(search);
        //console.log(results);
        setResults(results);
        //navigate(`/search?${search}`);
    };
    useEffect(() => {
        if (query) {
            setSearch(query);
            searchSpotify().then(r => setResults);

        }
    }, [query]);
    return (
        <div>
            <h1>Song Search</h1>
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

                <div>
                    <ul className="list-group">
                        {results.map((result) => {
                            return (
                                <SearchResultItem key={result.id} result={result}/>
                            )
                        })}
                    </ul>
                </div>

                <pre>{JSON.stringify(results, null, 2)}</pre>
            </div>
        </div>
    );
}
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

export default SearchBar;
