import Nav from "../nav";
import React from "react";
import CreateUser from "./createUser";
import DisplayUsers from "./displayUsers";

const Users = () => {
    return (
        <div>
            <Nav user="admin" active="users"/>
            <ul className="list-group">
                <CreateUser/>
                <DisplayUsers/>
            </ul>
        </div>
    )
}
export default Users