import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import SearchResultItem from "../search/search-result-item/search-result-item";
import SearchResultList from "../search/search-result-item/search-result-list";
import Search from "../search";
import SongDetail from "./index";

class DetailRouter extends Component {
    render() {
        return(
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={Search}/>
                    <Route
                        exact
                        path="/details/:id"
                        component={SongDetail}
                    />
                </div>
            </BrowserRouter>
        )
    }
}
export default DetailRouter;