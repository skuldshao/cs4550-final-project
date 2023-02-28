import React from "react";
import NavTab from "./tab-nav";

function Reviews( {
      who = {
          "isSelf": true,
          "userName": "SpaceX",
          "handle": "2h",
          "avatarIcon": "https://ovicio.com.br/wp-content/uploads/2022/06/20220616-20220616_200814-555x555.jpg",
          "phoneNumber": "tesla.png",
          "email": "blah"
      }, tabs } ) {
    return (
        <div className="row wd-black-bg">
            <NavTab tabs={tabs}></NavTab>
        </div>
    );
}

export default Reviews