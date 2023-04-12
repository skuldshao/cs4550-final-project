import {Link} from "react-router-dom";
import React, {useState} from "react";

const UserItem = ({user}) => {
    const currentUser = 5;
    const handleDelete = () => {
        //TODO: delete
    }

    const handleEdit = () => {
        setEditing(!editing)
    }

    const [editing, setEditing] = useState(false);
    const [image, setImage] = useState(user.avatarIcon);
    const [showImages, setShowImages] = useState(false);
    const [userName, setUserName] = useState(user.userName);
    const [handle, setHandle] = useState(user.handle);
    const [password, setPassword] = useState(user.password);

    return (
        <li className="list-group-item border-0 bg-black">
            <div className="wd-bg-grey p-2 rounded-2">
                <div className="d-flex justify-content-between">
                    {!editing && <div className="d-flex justify-content-start ">
                        <Link to={`/profile/${user._id}`}>
                            <img className="rounded-circle pt-0 align-self-center" width={45} height={45}
                                 src={`/images/${user.avatarIcon}`}/>
                        </Link>
                        <div className="ps-2">
                            <Link to={`/profile/${user._id}`} className="text-white text-decoration-none fs-5 fw-bold ">
                                {user.userName}<br/>
                                <span className="text-secondary fw-normal"> @{user.handle}</span>
                            </Link>
                        </div>
                    </div>}
                    {
                        editing && <div className="d-flex justify-content-between">
                            <div className="me-5">
                                <img className="rounded-circle pt-0 align-self-center" width={60} height={60}
                                     src={`/images/${user.avatarIcon}`}/><br/>
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
                            <div>
                                <label htmlFor={`${user._id} password`}>Password:</label>
                                <input id={`${user._id} password`} className="form-control" type="password"
                                       value={password}
                                       onChange={(event) => {
                                           setPassword(event.target.value)
                                       }
                                       }/>
                                <br/>
                                {user.role === "user" && <div className="btn-group" role={`${user._id}group`}
                                                              aria-label="Basic radio toggle button group"
                                                              onChange={(event) => {
                                                                  const rolething = event.target.valueOf().id;
                                                                  const [id, role] = rolething.split(" ");
                                                                  if (user._id === id) {
                                                                      user.role = role;
                                                                  }
                                                              }
                                                              }>
                                    <input type="radio" className="btn-check" name={`${user._id}role`}
                                           id={`${user._id} user`} checked/>
                                    <label className="btn btn-outline-secondary"
                                           htmlFor={`${user._id} user`}>User</label>
                                    <input type="radio" className="btn-check" name={`${user._id}role`}
                                           id={`${user._id} admin`}/>
                                    <label className="btn btn-outline-secondary"
                                           htmlFor={`${user._id} admin`}>Admin</label>
                                </div>}
                                {user.role === "admin" && <div className="btn-group" role={`${user._id}group`}
                                                               aria-label="Basic radio toggle button group"
                                                               onChange={(event) => {
                                                                   user.role = event.target.valueOf().id
                                                               }
                                                               }>
                                    <input type="radio" className="btn-check" name={`${user._id}role`}
                                           id={`${user._id} user`}/>
                                    <label className="btn btn-outline-primary" htmlFor={`${user._id} user`}>User</label>
                                    <input type="radio" className="btn-check" name={`${user._id}role`}
                                           id={`${user._id} admin`} checked/>
                                    <label className="btn btn-outline-primary"
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