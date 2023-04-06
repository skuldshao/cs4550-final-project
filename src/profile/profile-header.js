import React from "react";
import {Link} from "react-router-dom";

function ProfileHeader( { who = {
    "isSelf": true,
    "userName": "Rowlet",
    "handle": "rowlie",
    "avatarIcon": "https://ovicio.com.br/wp-content/uploads/2022/06/20220616-20220616_200814-555x555.jpg",
    "phoneNumber": "123-456-7890",
    "email": "rowlet@pokemon.com",
    "follow": false
}, active }) {
    return (
        <div className="d-flex justify-content-between">
            <div className="d-flex">
                <img className="rounded-circle pt-0 ms-5 align-self-center" width={100} height={100} src={who.avatarIcon}/>
                <div className="ps-5 wd-off-white-fg">
                    <div className="lh-1 text-white fw-bold fs-1 wd-off-white-fg pb-2">{who.userName}</div>
                    <div className="lh-1 text-secondary pb-1">@{who.handle}</div>
                    {who.isSelf?
                        <>
                            <div className="lh-1 text-secondary pb-1">{who.phoneNumber}</div>
                            <div className="lh-1 text-secondary">{who.email}</div>
                        </> : <></>
                    }
                </div>
            </div>
                {who.isSelf? <div className="align-self-center me-5">
                    <Link to={active === "overview" ? `/profile/edit` : `/profile/edit/${active}`}>
                        <button className="btn btn-outline-secondary  rounded-3 fw-bold">
                            EDIT
                            <i className="bi bi-pencil ps-2"></i>
                        </button>
                    </Link>
                </div> : <></>}
                {!who.isSelf ? <div>
                        <button className="btn btn-outline-danger rounded-3 fw-bold float-end">
                            <span className="wd-bright-red">{who.follow ? `UNFOLLOW` : 'FOLLOW'}</span>
                        </button>
                </div> : <></>}
        </div>
    );
}

export default ProfileHeader