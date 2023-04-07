import React from "react";
import {Link} from "react-router-dom";

function ProfileHeaderEdit( {who = {
    "userName": "Rowlet",
    "handle": "rowlie",
    "avatarIcon": "https://ovicio.com.br/wp-content/uploads/2022/06/20220616-20220616_200814-555x555.jpg",
    "phoneNumber": "123-456-7890",
    "email": "rowlet@pokemon.com"
}, active}) {
    return (
        <div className="d-flex justify-content-between">
            <div className="d-flex">
            <div>
                <button className="btn position-relative">
                    <img className="pt-0 ms-5 align-self-center rounded-circle" width={100} height={100} src={who.avatarIcon}/>
                    <div className="text-white bg-opacity-50 bg-black fs-6 fw-bold position-absolute start-50 wd-bottom-25">
                        Edit
                    </div>
                </button>
            </div>
            <div className="ps-5 wd-off-white-fg">
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
            </div>
            <div className="align-self-center me-5">
                <Link to={active === "overview" ? `/profile` : `/profile/${active}`}>
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