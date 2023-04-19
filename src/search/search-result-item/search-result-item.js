import React, {useState, useEffect} from "react";
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {getTrack} from "../../services/spotify-service"
import {Link} from "react-router-dom"

const SearchResultItem = (
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
            <li className="list-group-item border-white rounded-5 bg-black ms-3 me-3 mb-2">
                <div className="d-flex align-items-center">
                    <div className="">
                        <img width={100}
                             height={100}
                             className="float-start rounded-circle"
                             alt=""
                             src={result.album.images[0].url}/>
                    </div>
                    <div className="w-100 ps-2 fw-bold text-white align-items-center">
                        {result.name.toString()}
                    </div>
                </div>
            </li>
        </Link>
    );
};

export default SearchResultItem;