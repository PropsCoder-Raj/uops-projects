import "./style.css";
import { useEffect, useContext, useState } from "react";
import FooterComponent from "../../../Components/Layouts/Footer";
import AdminNav from "../../../Components/Layouts/AdminNav";
import { useAuthUser } from 'react-auth-kit';
import { getSingleCourse, getStudentCourseWise } from "../../../Services/api/course";


function TeacherDashboardComponent() {
    const auth = useAuthUser();
    const [course, setCourse] = useState([]);
    const [studentCount, setStudentCount] = useState([]);

    useEffect(() => {
        document.title = "UoPS | Teacher - Dashboard";
        getCourse();
        getStudentCount();
    }, [])

    const getCourse = async() => {
        const res = await getSingleCourse(auth().courseId[0]);
        if (res.status === 200) {
            setCourse(res.data.data[0].name);
        } else if (res.status === 500) {
            setCourse("")
        }
    }
    
    const getStudentCount = async() => {
        const res = await getStudentCourseWise(auth().courseId[0]);
        if (res.status === 200) {
            console.log("res.data: ", res.data)
            setStudentCount(res.data.count);
        } else if (res.status === 500) {
            setStudentCount(0)
        }
    }

    return (
        <>
            <div className="layout-wrapper layout-content-navbar">
                <div className="layout-container">

                    <div className="layout-page">
                        <AdminNav profileImgPath="../assets/img/avatars/mentor.png" role="teacher" />
                        <div className="content-wrapper">
                            <div className="container-xxl flex-grow-1 container-p-y">


                                <h4 className="fw-bold py-3 mb-4 text-start"><span className="text-muted fw-light">Teacher /</span> Dashboard</h4>

                                <div className="row">
                                    <div className="col-lg-8 mb-4 order-0">
                                        <div className="card" style={{ height: "18rem" }}>
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
                                    <div className="col-lg-4">
                                        <div className="row">
                                            <div className="card" style={{ height: "18rem" }}>
                                                <div className="d-flex align-items-end row">
                                                    <div className="col-8 my-5 pt-1">
                                                        <div className="card-body text-start">
                                                            <h3 className="card-title mb-1 text-nowrap">{course}</h3>
                                                            <small className="d-block mb-3 text-nowrap">Course</small>

                                                            <h5 className="card-title text-primary mb-1">{studentCount}</h5>
                                                            <small className="d-block mb-4 pb-1 text-muted">Total Students</small>
                                                        </div>
                                                    </div>
                                                    <div className="col-4 pt-3 ps-0">
                                                        <img src="../../assets/img/avatars/student.png" width="100" height="100" className="rounded-start" alt="View Sales" />
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
export default TeacherDashboardComponent;