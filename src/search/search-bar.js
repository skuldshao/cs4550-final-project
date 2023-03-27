import React from "react"
import "./index.css";
import SearchResultList from "./search-result-item/search-result-list";

const SearchBar = () => (
    <>
        <form action="/search" method="get">
            <label htmlFor="search-bar">
                <span className="visually-hidden">Search</span>
            </label>
            <div className="d-flex flex-row position-relative align-items-center justify-content-between mb-2">
                <div className="position-absolute">
                    <button type="submit"
                            className="btn color-red rounded-circle">
                        <i className="bi bi-search "></i>
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

export default SearchBar;
