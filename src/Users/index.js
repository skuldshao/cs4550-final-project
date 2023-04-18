import Nav from "../nav";
import React, {useState} from "react";
import DisplayUsers from "./displayUsers";
import Signup from "../login/signup";

const Users = () => {
    const [display, setDisplay] = useState(false)
    return (
        <div>
            <Nav user="admin" active="users"/>
            <div className="text-white fs-5 fw-bold mb-2 ms-3">
                {!display && <i className="bi bi-caret-down-fill text-danger" onClick={() => setDisplay(true)}/>}
                {display && <i className="bi bi-caret-up-fill text-danger" onClick={() => setDisplay(false)}/>}
                {display ? "Fill out the information below to create a new User or Admin" : "Create a new User or Admin"}
            </div>
            <div className="ms-3">
                {display && <Signup inCode={true}/>}
            </div>
            <ul className="list-group">
                <DisplayUsers/>
            </ul>
        </div>
    )
}
export default Users