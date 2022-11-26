import "./style.css";
import { useEffect, useState } from "react";
import FooterComponent from "../../../Components/Layouts/Footer"
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


                                <h4 className="fw-bold py-3 mb-4 text-start"><span className="text-muted fw-light">Student /</span> Profile</h4>
                                <div className="card">
                                    <div className="card-content p-3">
                                        <div className="row">
                                            <div className="col-lg-4 text-start">
                                                <div className="col mb-3">
                                                    <label htmlFor="Name" className="form-label">Name</label>
                                                    <input type="text" id="Name" className="form-control" placeholder="Name" value={details.name} />
                                                </div>
                                            </div>
                                            <div className="col-lg-4 text-start">
                                                <div className="col mb-3">
                                                    <label htmlFor="email" className="form-label">Email</label>
                                                    <input type="email" id="email" className="form-control" placeholder="Email" value={details.email} />
                                                </div>
                                            </div>
                                            <div className="col-lg-4 text-start">
                                                <div className="col mb-3">
                                                    <label htmlFor="period" className="form-label">Phone Number</label>
                                                    <div className="input-group">
                                                        <span className="input-group-text">+44</span>
                                                        <input type="number" className="form-control" placeholder="Phone Number" aria-label="Phone Number" value={details.phoneNumber} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 text-start">
                                                <div className="col mb-3">
                                                    <label htmlFor="course" className="form-label">Course</label>
                                                    <select className="form-select" id="courseOption">
                                                        <option selected="" disabled>--SELECT--</option>
                                                        <option value="B.Com">B.Com</option>
                                                        <option value="B.Sc">B.Sc</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 text-start">
                                                <div className="col mb-3">
                                                    <label htmlFor="status" className="form-label">Status</label>
                                                    <select className="form-select">
                                                        <option selected="" disabled>--SELECT--</option>
                                                        <option value="1">ACTIVE</option>
                                                        <option value="0">DEACTIVE</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 text-start">
                                                <div className="col mb-3">
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