import React from "react";
import {Link} from "react-router-dom";

function ProfileHeader( {who = {
    "isSelf": false,
    "userName": "Rowlet",
    "handle": "rowlie",
    "avatarIcon": "https://ovicio.com.br/wp-content/uploads/2022/06/20220616-20220616_200814-555x555.jpg",
    "phoneNumber": "123-456-7890",
    "email": "rowlet@pokemon.com",
    "follow": false
}}) {
    return (
        <div className="row p-5 m-0 pb-2 align-items-center">
            <div className="col-1">
                <img className="rounded-circle" width={100} height={100} src={who.avatarIcon}/>
            </div>
            <div className="col-9 ps-5 wd-off-white-fg">
                <div className="float-start align-items-start position-relative">
                    <div className="lh-1 text-white fw-bold fs-1 wd-off-white-fg">{who.userName}</div>
                    <div className="lh-1 text-secondary">@{who.handle}</div>
                    {who.isSelf?
                        <>
                            <div className="lh-1 text-secondary">{who.phoneNumber}</div>
                            <div className="lh-1 text-secondary">{who.email}</div>
                        </> : <></>
                    }
                </div>
            </div>
            {who.isSelf? <div className="col-2">
                <Link to="edit">
                    <button className="btn btn-outline-secondary rounded-3 fw-bold float-end">
                        EDIT       <i className="bi bi-pencil ps-2"></i>
                    </button>
                </Link>
            </div> : <></>}
            {!who.isSelf ? <div className="col-2">
                    <button className="btn btn-outline-danger rounded-3 fw-bold float-end">
                        <span className="wd-bright-red">{who.follow ? `UNFOLLOW` : 'FOLLOW'}</span>
                    </button>
            </div> : <></>}
        </div>
    );
}

export default ProfileHeader