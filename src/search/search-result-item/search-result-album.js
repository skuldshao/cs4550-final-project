import React from "react";
import songs from '../song.json';
import songArray from '../song.json';
import SearchResultItem from "./search-result-item";
import {useLocation, useHistory, Link} from "react-router-dom";

const { search } = window.location;
const {test} = "/search"
const query = new URLSearchParams(search).get("search");


const SearchResultAlbum = (
    {
        result = {
            "images": [],
            "name": "Snow on the Beach",
        }
    }
) => {

    const detailLink = "/detail/" + result.id.toString();

    return (

        <Link to={detailLink}>
            <li className="list-group-item border-white rounded-5 bg-black ms-3 me-3 mb-2">
                <div className="d-flex align-items-center">
                    <div className="">
                        <img width={100}
                             height={100}
                             className="float-start rounded-circle"
                             alt=""
                             src={result.images[0].url}/>
                    </div>
                    <div className="w-100 ps-2 fw-bold align-items-center text-white">
                        {result.name.toString()}
                    </div>
                </div>
            </li>
        </Link>
    );
};

export default SearchResultAlbum;