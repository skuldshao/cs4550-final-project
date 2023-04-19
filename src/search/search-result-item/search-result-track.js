import React from "react";
import songs from '../song.json';
import songArray from '../song.json';
import SearchResultItem from "./search-result-item";
import {useLocation, useHistory, Link} from "react-router-dom";

const { search } = window.location;
const {test} = "/search"
const query = new URLSearchParams(search).get("search");


const SearchResultTrack = (
    {
        result = {
            "album": {},
            "name": "Snow on the Beach",
        }
    }
) => {

    const detailLink = "/detail/" + result.id.toString();

    return (

        <Link to={detailLink}>
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
    );
};

export default SearchResultTrack;