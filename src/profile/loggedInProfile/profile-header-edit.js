import React, {useState} from "react";
import {Link} from "react-router-dom";

function ProfileHeaderEdit({
                               user = {
                                   "userName": "Rowlet",
                                   "handle": "rowlie",
                                   "avatarIcon": "profile3.jpeg",
                                   "number": "123-456-7890",
                                   "email": "rowlet@pokemon.com"
                               }, active, type
                           }) {
    const [changePhoto, setChangePhoto] = useState(false);
    const [image, setImage] = useState(user.avatarIcon);
    console.log(image);
    return (
        <div className="d-flex justify-content-between">
            <div className="d-flex">
                <div>
                    <button className="btn position-relative" onClick={() => setChangePhoto(!changePhoto)}>
                        <img className="pt-0 ms-5 align-self-center rounded-circle" width={100} height={100}
                             src={`/images/${user.avatarIcon}`}/>
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
                    <input type="text"
                           className="form-control border-secondary p-0 ps-1 shadow-none lh-1 fw-bold fs-1 bg-black text-secondary mb-2"
                           id="userInput"
                           placeholder="Search Tuiter" value={user.userName}/>
                    <input type="text"
                           className="form-control d-inline-block border-secondary p-0 ps-1 shadow-none lh-1 bg-black text-secondary mb-1"
                           id="handleInput"
                           placeholder="@handle" value={`@${user.handle}`}/>
                    <input type="text"
                           className="form-control border-secondary p-0 ps-1 shadow-none lh-1 bg-black text-secondary mb-1"
                           id="numberInput"
                           placeholder="@handle" value={user.number}/>
                    <input type="email"
                           className="form-control d-inline-block border-secondary p-0 ps-1 shadow-none lh-1 bg-black text-secondary"
                           id="emailInput"
                           placeholder="@handle" value={user.email}/>
                </div>
            </div>
            <div className="align-self-center me-5">
                <Link to={(type === "admin" || active === "overview") ? `/profile` : `/profile/${active}`}>
                    <button className="btn btn-outline-secondary  rounded-3 fw-bold float-end">
                        SAVE
                        <i className="bi bi-check-lg ps-1"/>
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default ProfileHeaderEdit