import React from "react";

function ProfileHeaderEdit( {who = {
    "isSelf": true,
    "userName": "Rowlet",
    "handle": "rowlie",
    "avatarIcon": "https://ovicio.com.br/wp-content/uploads/2022/06/20220616-20220616_200814-555x555.jpg",
    "phoneNumber": "123-456-7890",
    "email": "rowlet@pokemon.com"
}}) {
    return (
        <div className="row wd-black-bg p-5 pb-2 align-items-center">
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
                       className="form-control border-secondary p-0 ps-1 shadow-none lh-1 fw-bold fs-1 bg-black text-secondary"
                       id="searchinput"
                       placeholder="Search Tuiter" value={who.userName}></input>
                <input type="text"
                       className="form-control d-inline-block border-secondary p-0 ps-1 shadow-none lh-1 bg-black text-secondary"
                       id="searchinput"
                       placeholder="@handle" value={`@${who.handle}`}></input>
                <input type="text"
                       className="form-control border-secondary p-0 ps-1 shadow-none lh-1 bg-black text-secondary"
                       id="searchinput"
                       placeholder="@handle" value={who.phoneNumber}></input>
                <input type="email"
                       className="form-control d-inline-block border-secondary p-0 ps-1 shadow-none lh-1 bg-black text-secondary"
                       id="searchinput"
                       placeholder="@handle" value={who.email}></input>
            </div>
            <div className="col-2">
                <a href="#">
                    <button className="btn btn-outline-secondary rounded-pill float-end">
                        Save
                        <i className="bi bi-check-lg ps-1"></i>
                    </button>
                </a>
            </div>
        </div>
    );
}

export default ProfileHeaderEdit