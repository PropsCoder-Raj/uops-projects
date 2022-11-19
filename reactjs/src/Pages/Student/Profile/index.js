import "./style.css";
import { useEffect, useState } from "react";
import FooterComponent from "../../../Components/Layouts/Footer";
import SidemenuComponent from "../../../Components/Layouts/Sidemenu";
import AdminNav from "../../../Components/Layouts/AdminNav";

function StudentProfileComponent() {

    const [details, setDetails] = useState({
        name: "Gerard Wertheimer",
        email: "gerardwertheimer@gmail.com",
        phoneNumber: "7038415053",
    })

    useEffect(() => {
        document.title = "UoPS | Student - Profile";
    }, [])

    return (
        <>
            <div className="layout-wrapper layout-content-navbar">
                <div className="layout-container">

                    <div className="layout-page">
                        <AdminNav profileImgPath="../assets/img/avatars/student.png" role="student" />
                        <div className="content-wrapper">
                            <div className="container-xxl flex-grow-1 container-p-y">


                                <h4 class="fw-bold py-3 mb-4 text-start"><span class="text-muted fw-light">Student /</span> Profile</h4>
                                <div className="card">
                                    <div className="card-content p-3">
                                        <div className="row">
                                            <div class="col-lg-4 text-start">
                                                <div class="col mb-3">
                                                    <label for="Name" class="form-label">Name</label>
                                                    <input type="text" id="Name" class="form-control" placeholder="Name" value={details.name} />
                                                </div>
                                            </div>
                                            <div class="col-lg-4 text-start">
                                                <div class="col mb-3">
                                                    <label for="email" class="form-label">Email</label>
                                                    <input type="email" id="email" class="form-control" placeholder="Email" value={details.email} />
                                                </div>
                                            </div>
                                            <div class="col-lg-4 text-start">
                                                <div class="col mb-3">
                                                    <label for="period" class="form-label">Phone Number</label>
                                                    <div class="input-group">
                                                        <span class="input-group-text">+44</span>
                                                        <input type="number" class="form-control" placeholder="Phone Number" aria-label="Phone Number" value={details.phoneNumber} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 text-start">
                                                <div class="col mb-3">
                                                    <label for="course" class="form-label">Course</label>
                                                    <select class="form-select" id="courseOption">
                                                        <option selected="" disabled>--SELECT--</option>
                                                        <option value="B.Com">B.Com</option>
                                                        <option value="B.Sc">B.Sc</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 text-start">
                                                <div class="col mb-3">
                                                    <label for="status" class="form-label">Status</label>
                                                    <select class="form-select">
                                                        <option selected="" disabled>--SELECT--</option>
                                                        <option value="1">ACTIVE</option>
                                                        <option value="0">DEACTIVE</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 text-start">
                                                <div class="col mb-3">
                                                    <button className="btn btn-primary float-end">Update Profile</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <FooterComponent />

                                <div className="content-backdrop fade"></div>
                            </div>
                        </div>
                    </div>

                    <div className="layout-overlay layout-menu-toggle"></div>
                </div>
            </div>
        </>
    );
}
export default StudentProfileComponent;