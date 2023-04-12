import {Link} from "react-router-dom";
import React, {useState} from "react";

const UserItem = ({user}) => {
    const currentUser = 5;
    const handleDelete = () => {
        //TODO: delete
    }

    const handleEdit = () => {
        user = {
            ...user,
            role,
            avatarIcon: image,
            userName,
            handle,
            password,
            number,
            email
        }
        setEditing(!editing)
    }
    const [role, setRole] = useState(user.role)
    const [editing, setEditing] = useState(false);
    const [image, setImage] = useState(user.avatarIcon);
    const [showImages, setShowImages] = useState(false);
    const [userName, setUserName] = useState(user.userName);
    const [handle, setHandle] = useState(user.handle);
    const [password, setPassword] = useState(user.password);
    const [number, setNumber] = useState(user.number);
    const [email, setEmail] = useState(user.email);

    return (
        <li className="list-group-item border-0 bg-black">
            <div className="wd-bg-grey p-2 rounded-2">
                <div className="d-flex justify-content-between">
                    {!editing && <div className="d-flex justify-content-start ">
                        <Link to={`/profile/${user._id}`}>
                            <img className="rounded-circle pt-0 align-self-center" width={45} height={45}
                                 src={`/images/${image}`}/>
                        </Link>
                        <div className="ps-2">
                            <Link to={`/profile/${user._id}`} className="text-white text-decoration-none fs-5 fw-bold ">
                                {userName}<br/>
                                <span className="text-secondary fw-normal"> @{handle}</span>
                            </Link>
                        </div>
                    </div>}
                    {
                        editing && <div className="d-flex justify-content-between">
                            <div className="me-5">
                                <img className="rounded-circle pt-0 align-self-center" width={60} height={60}
                                     src={`/images/${image}`}/><br/>
                                <button className="btn btn-secondary"
                                        onClick={() => setShowImages(!showImages)}>{showImages ? `Save Image` : `Change Image`}</button>
                                {showImages &&
                                <div>
                                    <img src="/images/profile1.jpeg" height="40px" width="40px"
                                         className={image === "profile1.jpeg" ? "border border-danger m-1 rounded-circle" : `m-1 rounded-circle`}
                                         onClick={(event) => {
                                             setImage("profile1.jpeg")
                                         }}/>
                                    <img src="/images/profile2.jpeg" height="40px" width="40px"
                                         className={image === "profile2.jpeg" ? "border border-danger m-1 rounded-circle" : `m-1 rounded-circle`}
                                         onClick={(event) => {
                                             setImage("profile2.jpeg")
                                         }}/>
                                    <img src="/images/profile3.jpeg" height="40px" width="40px"
                                         className={image === "profile3.jpeg" ? "border border-danger m-1 rounded-circle" : `m-1 rounded-circle`}
                                         onClick={(event) => {
                                             setImage("profile3.jpeg")
                                         }}/>
                                    <img src="/images/profile4.jpeg" height="40px" width="40px"
                                         className={image === "profile4.jpeg" ? "border border-danger m-1 rounded-circle" : `m-1 rounded-circle`}
                                         onClick={(event) => {
                                             setImage("profile4.jpeg")
                                         }}/>
                                    <img src="/images/profile5.jpeg" height="40px" width="40px"
                                         className={image === "profile5.jpeg" ? "border border-danger m-1 rounded-circle" : `m-1 rounded-circle`}
                                         onClick={(event) => {
                                             setImage("profile5.jpeg")
                                         }}/>
                                    <img src="/images/profile6.jpeg" height="40px" width="40px"
                                         className={image === "profile6.jpeg" ? "border border-danger m-1 rounded-circle" : `m-1 rounded-circle`}
                                         onClick={(event) => {
                                             setImage("profile6.jpeg")
                                         }}/>
                                    <img src="/images/profile7.jpeg" height="40px" width="40px"
                                         className={image === "profile7.jpeg" ? "border border-danger m-1 rounded-circle" : `m-1 rounded-circle`}
                                         onClick={(event) => {
                                             setImage("profile7.jpeg")
                                         }}/>
                                    <img src="/images/profile8.jpeg" height="40px" width="40px"
                                         className={image === "profile8.jpeg" ? "border border-danger m-1 rounded-circle" : `m-1 rounded-circle`}
                                         onClick={(event) => {
                                             setImage("profile8.jpeg")
                                         }}/>
                                    <img src="/images/profile9.jpeg" height="40px" width="40px"
                                         className={image === "profile9.jpeg" ? "border border-danger m-1 rounded-circle" : `m-1 rounded-circle`}
                                         onClick={(event) => {
                                             setImage("profile9.jpeg")
                                         }}/>
                                    <img src="/images/profile10.jpeg" height="40px" width="40px"
                                         className={image === "profile10.jpeg" ? "border border-danger m-1 rounded-circle" : `m-1 rounded-circle`}
                                         onClick={(event) => {
                                             setImage("profile10.jpeg")
                                         }}/>
                                </div>}
                            </div>
                            <div className="me-5">
                                <label htmlFor={`${user._id} userName`}>User name:</label>
                                <input id={`${user._id} userName`} className="form-control" value={userName}
                                       width="500 px"
                                       onChange={(event) => {
                                           setUserName(event.target.value)
                                       }
                                       }/>
                                <label htmlFor={`${user._id} handle`}>Handle:</label>
                                <input id={`${user._id} handle`} className="form-control" value={handle}
                                       onChange={(event) => {
                                           setHandle(event.target.value)
                                       }
                                       }/>
                            </div>
                            <div className="me-5">
                                <label htmlFor={`${user._id} email`}>Email:</label>
                                <input id={`${user._id} email`} className="form-control" value={email}
                                       width="500 px"
                                       onChange={(event) => {
                                           setEmail(event.target.value)
                                       }
                                       }/>
                                <label htmlFor={`${user._id} number`}>Number:</label>
                                <input id={`${user._id} number`} className="form-control" value={number}
                                       onChange={(event) => {
                                           setNumber(event.target.value)
                                       }
                                       }/>
                            </div>
                            <div>
                                <label htmlFor={`${user._id} password`}>Password:</label>
                                <input id={`${user._id} password`} className="form-control" type="password"
                                       value={password}
                                       onChange={(event) => {
                                           setPassword(event.target.value)
                                       }
                                       }/>
                                <br/>
                                {role === "user" && <div className="btn-group" role={`${user._id}group`}
                                                         aria-label="Basic radio toggle button group">
                                    <input type="radio" className="btn-check" name={`${user._id}role`}
                                           id={`${user._id} user`} checked/>
                                    <label className="btn btn-outline-secondary"
                                           htmlFor={`${user._id} user`}>User</label>
                                    <input type="radio" className="btn-check" name={`${user._id}role`}
                                           id={`${user._id} admin`} onClick={() => setRole("admin")}/>
                                    <label className="btn btn-outline-secondary"
                                           htmlFor={`${user._id} admin`}>Admin</label>
                                </div>}
                                {role === "admin" && <div className="btn-group" role={`${user._id}group`}
                                                          aria-label="Basic radio toggle button group">
                                    <input type="radio" className="btn-check" name={`${user._id}role`}
                                           id={`${user._id} user`} onClick={(event) => {
                                        setRole("user")
                                    }
                                    }/>
                                    <label className="btn btn-outline-secondary"
                                           htmlFor={`${user._id} user`}>User</label>
                                    <input type="radio" className="btn-check" name={`${user._id}role`}
                                           id={`${user._id} admin`} checked/>
                                    <label className="btn btn-outline-secondary"
                                           htmlFor={`${user._id} admin`}>Admin</label>
                                </div>}
                            </div>
                        </div>
                    }
                    <div className="float-end">
                        {!editing && <i className="bi bi-pencil-fill" onClick={handleEdit}/>}
                        {editing && <i className="bi bi-save-fill" onClick={handleEdit}/>}<br/>
                        {user._id !== currentUser ? <i className="bi bi-trash3-fill" onClick={handleDelete}/> : ""}
                    </div>
                </div>
            </div>
        </li>
    )
}

export default UserItem