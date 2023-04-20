import {Routes} from "react-router";
import {Route} from "react-router-dom";
import React from "react";
import AdminProfile from "./index";
import AdminProfileEdit from "./AdminProfileEdit";
import ViewProfileAsAdminRouter from "../viewProfileAsAdmin/viewProfileAsAdminRouter";
import EditProfileAsAdminRouter from "../editProfileAsAdmin/editProfileAsAdminRouter";

const AdminProfileRouter = () => {
    return (
        <Routes>
            <Route index
                   element={<AdminProfile/>}/>
            <Route path="edit"
                   element={<AdminProfileEdit/>}/>
            <Route path="edit/:uid"
                   element={<EditProfileAsAdminRouter tabs={{active: "overview"}}/>}/>
            <Route path="edit/reviews/:uid"
                   element={<EditProfileAsAdminRouter tabs={{active: "reviews"}}/>}/>
            <Route path="edit/following/:uid"
                   element={<EditProfileAsAdminRouter tabs={{active: "following"}}/>}/>
            <Route path="edit/followers/:uid"
                   element={<EditProfileAsAdminRouter tabs={{active: "followers"}}/>}/>
            <Route path="edit/favoriteSongs/:uid"
                   element={<EditProfileAsAdminRouter tabs={{active: "favoriteSongs"}}/>}/>
            <Route path="edit/newSongs/:uid"
                   element={<EditProfileAsAdminRouter tabs={{active: "newSongs"}}/>}/>
            <Route path=":uid"
                   element={<ViewProfileAsAdminRouter tabs={{active: "overview"}}/>}/>
            <Route path="reviews/:uid"
                   element={<ViewProfileAsAdminRouter tabs={{active: "reviews"}}/>}/>
            <Route path="following/:uid"
                   element={<ViewProfileAsAdminRouter tabs={{active: "following"}}/>}/>
            <Route path="followers/:uid"
                   element={<ViewProfileAsAdminRouter tabs={{active: "followers"}}/>}/>
            <Route path="favoriteSongs/:uid"
                   element={<ViewProfileAsAdminRouter tabs={{active: "favoriteSongs"}}/>}/>
            <Route path="newSongs/:uid"
                   element={<ViewProfileAsAdminRouter tabs={{active: "newSongs"}}/>}/>
        </Routes>
    )
}
export default AdminProfileRouter;