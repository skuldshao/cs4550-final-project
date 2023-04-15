import React from "react";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router";
import {ADMINKEY} from "../../login/login"

function ProfileHeader({
                           who = {
                               "userName": "Rowlet",
                               "handle": "rowlie",
                               "avatarIcon": "https://ovicio.com.br/wp-content/uploads/2022/06/20220616-20220616_200814-555x555.jpg",
                               "number": "123-456-7890",
                               "email": "rowlet@pokemon.com",
                           }, active, type
                       }) {
    const navigate = useNavigate()
    console.log(ADMINKEY)
    return (
        <div className="d-flex justify-content-between">
            <div className="d-flex">
                <img className="rounded-circle pt-0 ms-5 align-self-center" width={100} height={100}
                     src={who.avatarIcon}/>
                <div className="ps-5 wd-off-white-fg">
                    <div className="lh-1 text-white fw-bold fs-1 wd-off-white-fg pb-2">{who.userName}</div>
                    <div className="lh-1 text-secondary pb-1">@{who.handle}</div>
                    <>
                        <div className="lh-1 text-secondary pb-1">{who.number}</div>
                        <div className="lh-1 text-secondary">{who.email}</div>
                        {type === "admin" && <div className="lh-1 text-secondary pt-1">{ADMINKEY}</div>}
                    </>
                </div>
            </div>
            <div className="align-self-center me-5">
                <button className="btn btn-outline-danger  rounded-3 fw-bold mb-2" onClick={() => {
                    navigate("/login")
                }}>
                    LOGOUT
                </button>
                <br/>
                <Link to={(type === "admin" || active === "overview") ? `/profile/edit` : `/profile/edit/${active}`}>
                    <button className="btn btn-outline-secondary  rounded-3 fw-bold">
                        EDIT
                        <i className="bi bi-pencil ps-2"/>
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default ProfileHeader