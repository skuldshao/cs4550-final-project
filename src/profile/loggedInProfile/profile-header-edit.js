import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {
    profileThunk as adminProfileThunk,
    updateAdminThunk
} from "../../services/admin-auth-thunk";
import {
    profileThunk as userProfileThunk,
    updateUserThunk
} from "../../services/user-auth-thunk";

function ProfileHeaderEdit({
                               active, type
                           }) {

    const [profile, setProfile] = useState({});
    const dispatch = useDispatch();
    const getAdminProfile = async () => {
        const user = await dispatch(adminProfileThunk());
        setProfile(user.payload);
        setImage(user.payload.avatarIcon);
        setUserName(user.payload.userName);
        setEmail(user.payload.email);
        setHandle(user.payload.handle);
        setPassword(user.payload.password)
        setNumber(user.payload.number)
    };
    const getUserProfile = async () => {
        const user = await dispatch(userProfileThunk())
        setProfile(user.payload);
        setImage(user.payload.avatarIcon);
        setUserName(user.payload.userName);
        console.log(user.payload.userName);
        setEmail(user.payload.email);
        setHandle(user.payload.handle);
        setPassword(user.payload.password)
        setNumber(user.payload.number)
    };
    useEffect(() => {
        if (type === "admin") {
            getAdminProfile();
        } else {
            getUserProfile();
        }
    }, []);


    const [changePhoto, setChangePhoto] = useState(false);
    const [image, setImage] = useState("profile1.jpeg");
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState();
    const [handle, setHandle] = useState("");
    const [password, setPassword] = useState("");

    const updateUser = async () => {
        let thing;
        if (type === "admin") {
            const toSet = await dispatch(adminProfileThunk());
            thing = toSet.payload

        } else {
            const toSet = await dispatch(userProfileThunk())
            thing = toSet.payload
        }
        if (type === "admin") {
            const newAdmin = {
                ...profile,
                avatarIcon: image,
                userName,
                email,
                number,
                handle,
                password

            }
            dispatch(updateAdminThunk(newAdmin))
        } else {
            const newUser = {
                ...thing,
                avatarIcon: image,
                userName,
                email,
                number,
                handle,
                password
            }
            dispatch(updateUserThunk(newUser))
        }
    }
    return (
        <div className="d-flex justify-content-between">
            <div className="d-flex">
                <div>
                    <button className="btn position-relative" onClick={() => setChangePhoto(!changePhoto)}>
                        <img className="pt-0 ms-5 align-self-center rounded-circle" width={100} height={100}
                             src={`/images/${image}`}/>
                        <div
                            className={`btn text-white bg-opacity-50 bg-black fs-6 fw-bold ${changePhoto ? `position-absolute-profile-save` : `position-absolute-profile-change`}`}>
                            {changePhoto ? 'SAVE' : 'CHANGE'}
                        </div>
                    </button>
                    {
                        changePhoto &&
                        <div className="ms-5">
                            <br/>
                            <div>
                                <img src="/images/profile1.jpeg" height={40} width={40}
                                     className={image === "profile1.jpeg" ? "border border-danger m-1 rounded-circle" : `m-1 rounded-circle`}
                                     onClick={(event) => {
                                         setImage("profile1.jpeg")
                                     }}/>
                                <img src="/images/profile2.jpeg" height={40} width={40}
                                     className={image === "profile2.jpeg" ? "border border-danger m-1 rounded-circle" : `m-1 rounded-circle`}
                                     onClick={(event) => {
                                         setImage("profile2.jpeg")
                                     }}/>
                                <img src="/images/profile3.jpeg" height={40} width={40}
                                     className={image === "profile3.jpeg" ? "border border-danger m-1 rounded-circle" : `m-1 rounded-circle`}
                                     onClick={(event) => {
                                         setImage("profile3.jpeg")
                                     }}/>
                            </div>
                            <div>
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
                            </div>
                            <div>
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
                            </div>
                            <img src="/images/profile10.jpeg" height="40px" width="40px"
                                 className={image === "profile10.jpeg" ? "border border-danger m-1 rounded-circle" : `m-1 rounded-circle`}
                                 onClick={(event) => {
                                     setImage("profile10.jpeg")
                                 }}/>
                        </div>
                    }
                </div>
                <div className="ps-5 wd-off-white-fg">
                    <label htmlFor="userInput" className="wd-gold fs-5 fw-bold form-label">Username</label>
                    <input
                        className="form-control  border-danger p-1 ps-1 shadow-none lh-1 fw-bold fs-5 bg-black text-secondary mb-2"
                        id="userInput"
                        placeholder="user name" value={userName}
                        onChange={(event) => setUserName(event.target.value)}/>
                    <label htmlFor="handleInput" className="wd-gold fs-5 fw-bold form-label">Handle</label>
                    <input
                        className="form-control border-danger p-1 ps-1 shadow-none lh-1 bg-black text-secondary mb-1"
                        id="handleInput"
                        placeholder="@handle" value={`${handle}`}
                        onChange={(event) => setHandle(event.target.value)}/>
                    <label htmlFor="numberInput" className="wd-gold fs-5 fw-bold form-label">Phone Number</label>
                    <input
                        className="form-control border-danger p-1 ps-1 shadow-none lh-1 bg-black text-secondary mb-1"
                        id="numberInput"
                        placeholder="phone number" value={number}
                        onChange={(event) => setNumber(Number(event.target.value))}/>
                    <label htmlFor="emailInput" className="wd-gold fs-5 fw-bold form-label">Email</label>
                    <input type="email"
                           className="form-control d-inline-block border-danger p-1 ps-1 shadow-none lh-1 bg-black text-secondary"
                           id="emailInput"
                           placeholder="email" value={email} onChange={(event) => setEmail(event.target.value)}/>
                    <label htmlFor="passwordInput" className="wd-gold fs-5 fw-bold form-label">Password</label>
                    <input type="password"
                           className="form-control d-inline-block border-danger p-1 ps-1 shadow-none lh-1 bg-black text-secondary"
                           id="passwordInput"
                           placeholder="password" value={password}
                           onChange={(event) => setPassword(event.target.value)}/>
                </div>
            </div>
            <div className="align-self-center me-5">
                <Link to={(type === "admin" || active === "overview") ? `/profile` : `/profile/${active}`}>
                    <button className="btn btn-outline-secondary  rounded-3 fw-bold float-end" onClick={updateUser}>
                        SAVE
                        <i className="bi bi-check-lg ps-1"/>
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default ProfileHeaderEdit