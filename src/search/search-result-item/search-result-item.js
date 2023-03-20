import React from "react";
import {Link} from "react-router-dom"

const SearchResultItem = (
    {
        result = {
            "id": 1,
            "name": "Snow on the Beach",
            "icon": "https://upload.wikimedia.org/wikipedia/en/9/9f/Midnights_-_Taylor_Swift.png"
        }
    }
) => {
    return(
        
            <li className="list-group-item">
                <div className="d-flex align-items-center">
                    <div className="">
                        <img width={100}
                             height={100}
                             className="float-start rounded-circle"
                             alt=""
                             src={result.icon}/>
                    </div>
                    <div className="w-100 ps-2 fw-bold align-items-center">
                        {result.name}
                    </div>
                </div>
            </li>

    );
};

export default SearchResultItem;