import React from "react";
import {Link} from "react-router-dom";

function ProfileHeaderEdit( {who = {
    "isSelf": true,
    "userName": "Rowlet",
    "handle": "rowlie",
    "avatarIcon": "https://ovicio.com.br/wp-content/uploads/2022/06/20220616-20220616_200814-555x555.jpg",
    "phoneNumber": "123-456-7890",
    "email": "rowlet@pokemon.com"
}}) {
    return (
        <div className="row p-5 pb-2 m-0 align-items-center">
            <div className="col-1">
                <button className="btn rounded-circle position-relative">
                    <img className="rounded-circle" width={100} height={100} src={who.avatarIcon}/>
                    <div className="position-absolute text-white bg-opacity-50 bg-black start-0 bottom-0 m-0 mb-0 p-5 pt-1 pb-3 fs-6 fw-bold">
                        Edit
                    </div>
                </button>
            </div>
            <div className="col-9 ps-5 wd-off-white-fg">
                <input type="text"
    className="form-control border-secondary p-0 ps-1 shadow-none lh-1 fw-bold fs-1 bg-black text-secondary mb-2"
    id="userInput"
    placeholder="Search Tuiter" value={who.userName}/>
                <input type="text"
    className="form-control d-inline-block border-secondary p-0 ps-1 shadow-none lh-1 bg-black text-secondary mb-1"
    id="handleInput"
    placeholder="@handle" value={`@${who.handle}`}/>
                <input type="text"
    className="form-control border-secondary p-0 ps-1 shadow-none lh-1 bg-black text-secondary mb-1"
    id="phoneNumberInput"
    placeholder="@handle" value={who.phoneNumber}/>
                <input type="email"
    className="form-control d-inline-block border-secondary p-0 ps-1 shadow-none lh-1 bg-black text-secondary"
    id="emailInput"
    placeholder="@handle" value={who.email}/>
            </div>
            <div className="col-2">
                <Link to="/profile">
                    <button className="btn btn-outline-secondary rounded-pill float-end">
                        Save
                        <i className="bi bi-check-lg ps-1"/>
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default ProfileHeaderEdit