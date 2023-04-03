import React from "react";
import SearchBar from "./search-bar";
import Nav from "../nav";
function Search() {
    return (
        <div>
            <Nav user="user" active="search"/>
            <SearchBar/>
        </div>
    );
}

export default Search