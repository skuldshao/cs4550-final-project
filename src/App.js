import './App.css';
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import {Home} from "./home";
import Login from "./login/login";
import Signup from "./login/signup";
import Search from "./search";
import Profile from "./profile";
import Detail from "./detail";
import ProfileTabs from "./profile/tabs/profile-tabs";
import React from "react";
import Users from "./Users";

function App() {
    return (
        <div className="App wd-bg-gold">
            <BrowserRouter>
                <div className="container pb-2 bg-black ">
                    <Routes>
                        <Route index
                               element={<Home/>}/>
                        <Route path="/home"
                               element={<Home/>}/>
                        <Route path="/login"
                               element={<Login/>}/>
                        <Route path="/signup"
                               element={<Signup/>}/>
                        <Route path="/users"
                               element={<Users/>}/>
                        <Route path="/profile/*"
                               element={<Profile/>}/>
                        <Route path="/search"
                               element={<Search/>}/>
                        <Route path="/search/:query"
                               element={<Search/>}/>
                        <Route path="/detail/:id"
                               element={<Detail/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;