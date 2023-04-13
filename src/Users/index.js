import Nav from "../nav";
import users from "../data/users.json"
import UserItem from "./userItem";
import React, {useState} from "react";

const Users = () => {
    const [role, setRole] = useState("user");
    const [handle, setHandle] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [userName, setUserName] = useState("");
    const [image, setImage] = useState("profile1.jpeg");

    let activeUsers = users;

    const createUser = () => {
        const user = {
            role,
            handle,
            userName,
            password,
            number,
            email,
            avatarIcon: image
        }
        activeUsers.push(user);
    }


    return (
        <div>
            <Nav user="admin" active="users"/>
            <ul className="list-group">
                <li className="list-group-item border-0 bg-black">
                    <div className="wd-bg-gold p-2 rounded-2">
                        <img src="/images/profile1.jpeg" height="80px" width="80px"
                             className={image === "profile1.jpeg" ? "border border-danger m-1 rounded-circle" : `m-1 rounded-circle`}
                             onClick={(event) => {
                                 setImage("profile1.jpeg")
                             }}/>
                        <img src="/images/profile2.jpeg" height="80px" width="80px"
                             className={image === "profile2.jpeg" ? "border border-danger m-1 rounded-circle" : `m-1 rounded-circle`}
                             onClick={(event) => {
                                 setImage("profile2.jpeg")
                             }}/>
                        <img src="/images/profile3.jpeg" height="80px" width="80px"
                             className={image === "profile3.jpeg" ? "border border-danger m-1 rounded-circle" : `m-1 rounded-circle`}
                             onClick={(event) => {
                                 setImage("profile3.jpeg")
                             }}/>
                        <img src="/images/profile4.jpeg" height="80px" width="80px"
                             className={image === "profile4.jpeg" ? "border border-danger m-1 rounded-circle" : `m-1 rounded-circle`}
                             onClick={(event) => {
                                 setImage("profile4.jpeg")
                             }}/>
                        <img src="/images/profile5.jpeg" height="80px" width="80px"
                             className={image === "profile5.jpeg" ? "border border-danger m-1 rounded-circle" : `m-1 rounded-circle`}
                             onClick={(event) => {
                                 setImage("profile5.jpeg")
                             }}/>
                        <img src="/images/profile6.jpeg" height="80px" width="80px"
                             className={image === "profile6.jpeg" ? "border border-danger m-1 rounded-circle" : `m-1 rounded-circle`}
                             onClick={(event) => {
                                 setImage("profile6.jpeg")
                             }}/>
                        <img src="/images/profile7.jpeg" height="80px" width="80px"
                             className={image === "profile7.jpeg" ? "border border-danger m-1 rounded-circle" : `m-1 rounded-circle`}
                             onClick={(event) => {
                                 setImage("profile7.jpeg")
                             }}/>
                        <img src="/images/profile8.jpeg" height="80px" width="80px"
                             className={image === "profile8.jpeg" ? "border border-danger m-1 rounded-circle" : `m-1 rounded-circle`}
                             onClick={(event) => {
                                 setImage("profile8.jpeg")
                             }}/>
                        <img src="/images/profile9.jpeg" height="80px" width="80px"
                             className={image === "profile9.jpeg" ? "border border-danger m-1 rounded-circle" : `m-1 rounded-circle`}
                             onClick={(event) => {
                                 setImage("profile9.jpeg")
                             }}/>
                        <img src="/images/profile10.jpeg" height="80px" width="80px"
                             className={image === "profile10.jpeg" ? "border border-danger m-1 rounded-circle" : `m-1 rounded-circle`}
                             onClick={(event) => {
                                 setImage("profile10.jpeg")
                             }}/>
                        <input id="username" className="form-control mb-2" placeholder="User name"
                               onChange={(event) => {
                                   setUserName(event.target.value)
                               }}/>
                        <input id="handle" className="form-control mb-2" placeholder="handle" onChange={(event) => {
                            setHandle(event.target.value)
                        }}/>
                        <input id="email" className="form-control mb-2" placeholder="email" onChange={(event) => {
                            setEmail(event.target.value)
                        }}/>
                        <input id="number" className="form-control mb-2" placeholder="number" onChange={(event) => {
                            setNumber(event.target.value)
                        }}/>
                        <input id="password" className="form-control mb-2" type="password" placeholder="password"
                               onChange={(event) => {
                                   setPassword(event.target.value)
                               }}/>
                        <div className="btn-group mb-2" role="group">
                            <input type="radio" className="btn-check" id={`user`} name={"role"}
                                   checked={role === "user"}
                                   onClick={() => setRole("user")}/>
                            <label className="btn btn-outline-secondary btn-light" htmlFor={`user`}>User</label>
                            <input type="radio" className="btn-check" id={`admin`} name="role"
                                   onClick={() => setRole("admin")} checked={role === "admin"}/>
                            <label className="btn btn-outline-secondary btn-light" htmlFor={`admin`}>Admin</label>
                        </div>
                        <div>
                            <button className="btn btn-danger" onClick={createUser}>Create User</button>
                        </div>
                    </div>
                </li>
                {
                    activeUsers.map(user => <UserItem user={user}/>)
                }
            </ul>
        </div>
    )
}
export default Users