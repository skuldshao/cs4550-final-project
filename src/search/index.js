import React from "react";
import SearchBar from "./search-bar";
import Nav from "../nav";
import "./index.css";
function Search() {
    return (
        <div class="text-white">
            <Nav user="user" active="search"/>
            <SearchBar/>
        </div>
    );
}

export default Search