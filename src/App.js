import './App.css';
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import {Home} from "./home";
import Login from "./login/login";
import Signup from "./login/signup";
import Search from "./search";
import Profile from "./profile";

function App() {
    return (
        <div className="App wd-bg-gold">
            <BrowserRouter>
                <div className="container pb-2 bg-black">
                    <Routes>
                        <Route path="/home"
                               element={<Home/>}/>
                        <Route path="/login"
                               element={<Login/>}/>
                        <Route path="/signup"
                               element={<Signup/>}/>
                        <Route path="/profile/*"
                               element={<Profile/>}/>
                        <Route path="/search"
                               element={<Search/>}/>
                    </Routes>
                </div>
            </BrowserRouter>

        </div>
    );
}

export default App;