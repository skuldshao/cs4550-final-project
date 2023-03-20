import React from "react";

function ProfileHeader( {who = {
    "isSelf": true,
    "userName": "Rowlet",
    "handle": "rowlie",
    "avatarIcon": "https://ovicio.com.br/wp-content/uploads/2022/06/20220616-20220616_200814-555x555.jpg",
    "phoneNumber": "123-456-7890",
    "email": "rowlet@pokemon.com"
}}) {
    return (
        <div className="row wd-black-bg p-5 m-0 pb-2 align-items-center">
            <div className="col-1">
                <img className="rounded-circle" width={100} height={100} src={who.avatarIcon}/>
            </div>
            <div className="col-9 ps-5 wd-off-white-fg">
                <div className="float-start align-items-start position-relative">
                    <div className="lh-1 fw-bold fs-1 wd-off-white-fg">{who.userName}</div>
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
                <a href="#">
                    <button className="btn btn-outline-secondary rounded-pill float-end">
                        Edit
                        <i className="bi bi-pencil ps-2"></i>
                    </button>
                </a>
            </div> : <></>}
        </div>
    );
}

export default ProfileHeader