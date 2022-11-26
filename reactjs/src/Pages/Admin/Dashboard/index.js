import "./style.css";
import { useEffect, useState } from "react";
import FooterComponent from "../../../Components/Layouts/Footer";
import SidemenuComponent from "../../../Components/Layouts/Sidemenu";
import AdminNav from "../../../Components/Layouts/AdminNav";

import { getDashboardCount } from "../../../Services/api/dashboard";


import { useSelector, useDispatch } from "react-redux";
import { setDashboardCount } from "../../../Actions/index";

function DashboardComponent() {

    const dispatch = useDispatch();
    const dashboardCountSelector = useSelector((state) => state.dashboardCountReducer);

    useEffect(() => {
        document.title = "UoPS | Admin - Dashboard";
        getCounts();
    }, [])


    const getCounts = async () => {
        const res = await getDashboardCount();
        console.log("res, ", res)
        if (res.status === 200) {
            dispatch(setDashboardCount(res.data.teacherCount, res.data.studentCount, res.data.courseCount));
        } else if (res.status === 500) {
            dispatch(setDashboardCount(0, 0, 0));
        }
    }

    return (
        <>
            <div className="layout-wrapper layout-content-navbar">
                <div className="layout-container">

                    <SidemenuComponent />

                    <div className="layout-page">
                        <AdminNav profileImgPath="../assets/img/avatars/admin.png" role="admin" />
                        <div className="content-wrapper">
                            <div className="container-xxl flex-grow-1 container-p-y">


                                <h4 className="fw-bold py-3 mb-4 text-start"><span className="text-muted fw-light">Admin /</span> Dashboard</h4>

                                <div className="row">
                                    <div className="col-lg-12 mb-4 order-0">
                                        <div className="card">
                                            <div className="d-flex align-items-end row">
                                                <div className="col-sm-7">
                                                    <div className="card-body">
                                                        <h5 className="card-title text-primary">University of Professional Sciences</h5>
                                                        <p className="mb-4">
                                                            The College of Professional Sciences is comprised of a vibrant and dedicated community of learners, educators, and support staff committed to preparing undergraduate and graduate students in education, health, and the social sciences.
                                                            Our college is Magis-in-Service as we are women and men for others meeting the needs of people and organizations in our community and beyond.

                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="col-sm-5 text-center text-sm-left">
                                                    <div className="card-body pb-0 px-0 px-md-4">
                                                        <img
                                                            src="../assets/img/illustrations/man-with-laptop-light.png"
                                                            height="140"
                                                            alt="View Badge User"
                                                            data-app-dark-img="illustrations/man-with-laptop-dark.png"
                                                            data-app-light-img="illustrations/man-with-laptop-light.png"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>

                                    <div className="offset-lg-3 col-lg-6 col-md-4 order-1">
                                        <div className="row">
                                            <div className="col-lg-4 col-md-12 mb-4">
                                                <div className="card">
                                                    <div className="card-body">
                                                        <span className="fw-semibold d-block mb-1">Total Teachers</span>
                                                        <h3 className="card-title mb-2">{dashboardCountSelector.data[0].teacherCount}</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-12 mb-4">
                                                <div className="card">
                                                    <div className="card-body">
                                                        <span className="fw-semibold d-block mb-1">Total Students</span>
                                                        <h3 className="card-title mb-2">{dashboardCountSelector.data[0].studentCount}</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-12 mb-4">
                                                <div className="card">
                                                    <div className="card-body">
                                                        <span className="fw-semibold d-block mb-1">Total Courses</span>
                                                        <h3 className="card-title mb-2">{dashboardCountSelector.data[0].courseCount}</h3>
                                                    </div>
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
export default DashboardComponent;