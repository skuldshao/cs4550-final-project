import './App.css';
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import {Home} from "./home";
import Login from "./login/login";
import Signup from "./login/signup";
import Search from "./search";
import Profile from "./profile";
import Detail from "./detail";
import React from "react";
import Users from "./Users";
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./reducers/user-reducer"
import adminReducer from "./reducers/admin-reducer"
import reviewReducer from "./reducers/review-reducer"
import adminAuthReducer from "./reducers/admin-auth-reducer";
import userAuthReducer from "./reducers/user-auth-reducer";

const store = configureStore(
    {reducer: {userData: userReducer, adminData: adminReducer, review: reviewReducer, userAuth: userAuthReducer, adminAuth: adminAuthReducer}});

function App() {
    return (
        <div className="App wd-bg-gold">
            <Provider store={store}>
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
            </Provider>
        </div>
    );
}

export default App;