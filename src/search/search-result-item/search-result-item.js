import React from "react";
import {Link} from "react-router-dom"
import {getTrack} from "../services/spotify-service"

const SearchResultItem = (
    {
        result
    }
) => {

    const detailLink = "/detail/" + result.id.toString();

    return(
        <Link to={detailLink}>
            <li className="list-group-item">
                <div className="d-flex align-items-center">
                    <div className="">
                        <img width={100}
                             height={100}
                             className="float-start rounded-circle"
                             alt=""
                             src=""/>
                    </div>
                    <div className="w-100 ps-2 fw-bold align-items-center">
                        {result.name.toString()}
                    </div>
                </div>
            </li>
        </Link>
    );
};

export default SearchResultItem;