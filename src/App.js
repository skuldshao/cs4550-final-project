import './App.css';
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import {Home} from "./home";
import {Login} from "./login";
import {Profile} from "./profile";
import {Search} from "./search";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path="/home"
                   element={<Home/>}/>
            <Route path="/login"
                   element={<Login/>}/>
            <Route path="/profile"
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
