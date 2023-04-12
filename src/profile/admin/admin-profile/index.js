import ProfileHeader from "../../loggedInProfile/profile-header";
import About from "../../tabs/overview/about";

const AdminProfile = () => {
    return (
        <div>
            <ProfileHeader type="admin"/>
            <div className="mt-4 ms-5 me-5">
                <About isEditing={false} type="admin"/>
            </div>
        </div>
    )
}
export default AdminProfile