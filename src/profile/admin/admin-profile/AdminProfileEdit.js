import ProfileHeaderEdit from "../../loggedInProfile/profile-header-edit";
import About from "../../tabs/overview/about";

const AdminProfileEdit = () => {
    return (
        <div>
            <ProfileHeaderEdit type="admin"/>
            <div className="mt-4 ms-5 me-5">
                <About isEditing={true} type="admin"/>
            </div>
        </div>
    )

}
export default AdminProfileEdit