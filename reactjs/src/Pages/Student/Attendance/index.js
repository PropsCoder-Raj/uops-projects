import "./style.css";
import { useEffect } from "react";
import FooterComponent from "../../../Components/Layouts/Footer";
import AdminNav from "../../../Components/Layouts/AdminNav";

import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

function StudentAttendanceComponent() {

    useEffect(() => {
        document.title = "UoPS | Teacher - Daily Attendance";
    }, [])

    return (
        <>
            <div className="layout-wrapper layout-content-navbar">
                <div className="layout-container">

                    <div className="layout-page">
                        <AdminNav profileImgPath="../assets/img/avatars/student.png" role="student" />
                        <div className="content-wrapper">
                            <div className="container-xxl flex-grow-1 container-p-y">

                                <div className="row">
                                    <div className="col">
                                        <h4 class="fw-bold py-3 mb-4 text-start"><span class="text-muted fw-light">Teacher /</span> Attendance</h4>
                                    </div>
                                    <div className="col-lg-4">
                                    </div>
                                </div>
                                <div>
                                    <div className="col-lg-12 col-md-6 order-1">
                                        <div className="row">
                                            <div className="offset-lg-3 col-lg-6">
                                                <FullCalendar
                                                    plugins={[ dayGridPlugin ]}
                                                    initialView="dayGridMonth"
                                                    weekends={false}
                                                    events={[
                                                    { title: 'Present', date: '2022-11-01', className: "badge bg-success border-0" },
                                                    { title: 'Absent', date: '2022-11-02', className: "badge bg-danger border-0" }
                                                    ]}
                                                />
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
export default StudentAttendanceComponent;