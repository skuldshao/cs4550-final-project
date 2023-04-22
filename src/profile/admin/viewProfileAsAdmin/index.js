import React from "react";
import {Link} from "react-router-dom";
import {ADMINKEY} from "../../../login/login";

function ViewProfileAsAdmin({
                                user = {
                                    "userName": "Rowlet",
                                    "handle": "rowlie",
                                    "avatarIcon": "https://ovicio.com.br/wp-content/uploads/2022/06/20220616-20220616_200814-555x555.jpg",
                                    "number": "123-456-7890",
                                    "email": "rowlet@pokemon.com",
                                }, active, type
                            }) {
    return (
        <div className="d-flex justify-content-between">
            <div className="d-flex">
                <img className="rounded-circle pt-0 ms-5 align-self-center" width={100} height={100}
                     src={`/images/${user.avatarIcon}`}/>
                <div className="ps-5 wd-off-white-fg">
                    <div className="lh-1 text-white fw-bold fs-1 wd-off-white-fg pb-2">{user.userName}</div>
                    <div className="lh-1 text-secondary pb-1">@{user.handle}</div>
                    <>
                        <div className="lh-1 text-secondary pb-1">{user.number}</div>
                        <div className="lh-1 text-secondary">{user.email}</div>
                        {type && <div className="lh-1 text-secondary pt-1">{ADMINKEY}</div>}
                    </>
                </div>
            </div>
            <div className="align-self-center me-5">
                <Link to={active === "overview" ? `/profile/edit/${user._id}` : `/profile/edit/${active}/${user._id}`}>
                    <button className="btn btn-outline-secondary  rounded-3 fw-bold">
                        EDIT
                        <i className="bi bi-pencil ps-2"/>
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default ViewProfileAsAdmin