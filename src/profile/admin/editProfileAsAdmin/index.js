import React, {useState} from "react";
import {Link} from "react-router-dom";
import {findUserByIdThunk, updateUserThunk} from "../../../services/user-thunk";
import {useDispatch} from "react-redux";
import {updateAdminThunk} from "../../../services/admin-auth-thunk";

function EditProfileAsAdmin({
                                user = {
                                    "userName": "Rowlet",
                                    "handle": "rowlie",
                                    "avatarIcon": "https://ovicio.com.br/wp-content/uploads/2022/06/20220616-20220616_200814-555x555.jpg",
                                    "number": "123-456-7890",
                                    "email": "rowlet@pokemon.com"
                                }, active, type = false
                            }) {
    const dispatch = useDispatch();
    const [changePhoto, setChangePhoto] = useState(false);
    const [image, setImage] = useState(user.avatarIcon);
    const [userName, setUsername] = useState(user.userName);
    const [handle, setHandle] = useState(user.handle);
    const [email, setEmail] = useState(user.email);
    const [number, setNumber] = useState(user.number);

    const update = async () => {
        if (type) {
            const toUpdate = {
                ...user,
                avatarIcon: image,
                email,
                handle,
                number,
                userName
            }
            dispatch(updateAdminThunk(toUpdate))
        } else {
            const toSet = await dispatch(findUserByIdThunk(user._id))
            const thing = toSet.payload
            const toUpdate = {
                ...thing,
                avatarIcon: image,
                email,
                handle,
                number,
                userName
            }
            dispatch(updateUserThunk(toUpdate))
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
                    <label htmlFor="userInput" className="form-label fw-5 wd-gold fw-bold">User name</label>
                    <input
                        className="form-control  border-danger p-1 ps-1 shadow-none lh-1 fw-bold fs-5 bg-black text-secondary mb-2"
                        id="userInput"
                        placeholder="user name" value={userName}
                        onChange={(event) => {
                            setUsername(event.target.value)
                        }}/>
                    <label htmlFor="handleInput" className="form-label fw-5 wd-gold fw-bold">Handle</label>
                    <input type="text"
                           className="form-control d-inline-block  border-danger p-1 ps-1 shadow-none lh-1 bg-black text-secondary mb-1"
                           id="handleInput"
                           placeholder="@handle" value={`${handle}`}
                           onChange={(event) => {
                               setHandle(event.target.value)
                           }}/>
                    <label htmlFor="numberInput" className="form-label fw-5 wd-gold fw-bold">Number</label>
                    <input type="text"
                           className="form-control border-danger p-1 ps-1 shadow-none lh-1 bg-black text-secondary mb-1"
                           id="numberInput"
                           placeholder="number" value={number} onChange={(event) => {
                        setNumber(event.target.value)
                    }}/>
                    <label htmlFor="emailInput" className="form-label fw-5 wd-gold fw-bold">Email</label>
                    <input type="email"
                           className="form-control d-inline-block  border-danger p-1 ps-1 shadow-none lh-1 bg-black text-secondary"
                           id="emailInput"
                           placeholder="email" value={email} onChange={(event) => {
                        setEmail(event.target.value)
                    }}/>
                </div>
            </div>
            <div className="align-self-center me-5">
                <Link to={active === "overview" ? `/profile/${user._id}` : `/profile/${active}/${user._id}`}>
                    <button className="btn btn-outline-secondary  rounded-3 fw-bold float-end"
                            onClick={update}>
                        SAVE
                        <i className="bi bi-check-lg ps-1"/>
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default EditProfileAsAdmin