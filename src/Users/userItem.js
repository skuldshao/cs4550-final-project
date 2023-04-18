import {Link} from "react-router-dom";
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {createUserThunk, deleteUserThunk, updateUserThunk} from "../services/user-thunk";
import {createAdminThunk, deleteAdminThunk, updateAdminThunk} from "../services/admin-thunk";

const UserItem = ({user, roles}) => {
    const currentUser = 5;
    const dispatch = useDispatch();
    const {users} = useSelector(state => state.userData);
    const {admins} = useSelector(state => state.adminData)
    const [goodEmail, setGoodEmail] = useState(true);
    const [goodHandle, setGoodHandle] = useState(true);
    const deleteUserHandler = (id) => {
        if (roles === "user") {
            dispatch(deleteUserThunk(id))
        } else {
            dispatch(deleteAdminThunk(id))
        }
    }

    const handleEdit = () => {
        const edit = {
            ...user,
            avatarIcon: image,
            userName,
            handle,
            password,
            number,
            email
        }
        const edit2 = {
            avatarIcon: image,
            userName,
            handle,
            password,
            number,
            email
        }
        if (roles === "user" && role === roles) {
            dispatch(updateUserThunk(edit));
        } else if (roles === "admin" && role === roles) {
            dispatch(updateAdminThunk(edit))
        } else if (role === "user") {
            dispatch(deleteAdminThunk(user._id))
            dispatch(createUserThunk(edit2))
        } else if (role === "admin") {
            dispatch(deleteUserThunk(user._id))
            dispatch(createAdminThunk(edit2))
        }
        setEditing(!editing)
    }
    const [role, setRole] = useState(roles)
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
                    {(!editing && roles !== "admin") && <div className="d-flex justify-content-start ">
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
                        (!editing && roles === "admin") &&
                        <div className="d-flex justify-content-start ">
                            <img className="rounded-circle pt-0 align-self-center" width={45} height={45}
                                 src={`/images/${image}`}/>
                            <div className="ps-2">
                                <div className="text-white text-decoration-none fs-5 fw-bold ">
                                    {userName}<br/>
                                    <span className="text-secondary fw-normal"> @{handle}</span>
                                </div>
                            </div>
                        </div>
                    }
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
                                           setHandle(event.target.value);
                                           const usersNX = users.findIndex(u => (u.handle).toLowerCase() === (event.target.value).toLowerCase());
                                           const adminsNX = admins.findIndex(u => (u.handle).toLowerCase() === (event.target.value).toLowerCase());
                                           setGoodHandle((usersNX === -1 && event.target.value.length > 0 && adminsNX === -1) || event.target.value === user.handle);
                                       }}/>
                                {goodHandle ? <i className="bi bi-check fs-2"/> :
                                    <i className="bi bi-exclamation-circle fs-2"/>}
                            </div>
                            <div className="me-5">
                                <label htmlFor={`${user._id} email`}>Email:</label>
                                <input id={`${user._id} email`} className="form-control" value={email}
                                       width="500 px"
                                       onChange={(event) => {
                                           setEmail(event.target.value);
                                           const usersNX = users.findIndex(u => (u.email).toLowerCase() === (event.target.value).toLowerCase());
                                           const adminsNX = admins.findIndex(u => (u.email).toLowerCase() === (event.target.value).toLowerCase());
                                           setGoodEmail((usersNX === -1 && event.target.value.length > 0 && adminsNX === -1) || event.target.value === user.email);
                                       }}/>
                                {goodEmail ? <i className="bi bi-check fs-2"/> :
                                    <i className="bi bi-exclamation-circle fs-2"/>}
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
                        {!editing && <i className="bi bi-pencil-fill" onClick={() => setEditing(true)}/>}
                        {editing && <i className="bi bi-save-fill" onClick={() => handleEdit()}/>}<br/>
                        {user._id !== currentUser ?
                            <i className="bi bi-trash3-fill" onClick={() => deleteUserHandler(user._id)}/> : ""}
                    </div>
                </div>
            </div>
        </li>
    )
}

export default UserItem