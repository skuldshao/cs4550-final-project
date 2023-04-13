import NavTab from "../../tab-nav";
import React from "react";
import ViewProfileAsAdmin from "../../../admin/viewProfileAsAdmin";

const ListenToMoreAdmin = ({
                               user = {
                                   "userName": "SpaceX",
                                   "_id": 5,
                                   "handle": "2h",
                                   "avatarIcon": "https://ovicio.com.br/wp-content/uploads/2022/06/20220616-20220616_200814-555x555.jpg",
                                   "number": "66666666",
                                   "email": "blah"
                               }, tabs
                           }) => {
    return (
        <div>
            <div className="row wd-black-bg text-start">
                <ViewProfileAsAdmin user={user} active={tabs.active}/>
                <NavTab tabs={tabs} isEditing={false} user={user} isSelf={false}/>
            </div>
        </div>
    )
}

export default ListenToMoreAdmin;