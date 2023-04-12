import React, { useState, useEffect } from "react";
import {useParams, useNavigate} from "react-router";
import {Link, useLocation} from "react-router-dom"
import {searchTracks} from "../services/spotify-service";

import "./index.css";
import SearchResultList from "./search-result-item/search-result-list";
import SearchResultItem from "./search-result-item/search-result-item";

function SearchBar() {
    const {query} = useParams();
    const navigate = useNavigate();
    const loc = useLocation();
    const [search, setSearch] = useState(query);
    const [results, setResults] = useState([]);
    //const prev = loc.search.substring(1, loc.search.length);


    const searchSpotify = async () => {
        const results = await searchTracks(search);
        //console.log(results);
        setResults(results);
        navigate(`/search?${search}`);
    };

    console.log();
    useEffect(() => {
        const prev = loc.search.substring(1, loc.search.length);
        console.log(prev);
        if (query) {
            setSearch(query);
            searchSpotify();
        }
        else if (prev) {
            setSearch(prev);
            searchSpotify(prev);
        }
        //searchSpotify();
        /*
        if (query) {
            setSearch(query);
            searchSpotify();
        }

         */
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
                                <Link to={`/detail/${result.id}`}>
                                    <li className="list-group-item">
                                        <div className="d-flex align-items-center">
                                            <div className="">
                                                <img width={100}
                                                     height={100}
                                                     className="float-start rounded-circle"
                                                     alt=""
                                                     src={result.album.images[0].url}/>
                                            </div>
                                            <div className="w-100 ps-2 fw-bold align-items-center">
                                                {result.name.toString()}
                                            </div>
                                        </div>
                                    </li>
                                </Link>
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
