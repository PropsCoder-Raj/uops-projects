import "./style.css";
import { useEffect, useState } from "react";
import FooterComponent from "../../../Components/Layouts/Footer";
import AdminNav from "../../../Components/Layouts/AdminNav";

import { getAttendaceWithStudentId } from "../../../Services/api/attendance";
import { useAuthUser } from 'react-auth-kit';

import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

function StudentAttendanceComponent() {
    
    const auth = useAuthUser();
    const [attendance, setAttendance] = useState([]);

    useEffect(() => {
        document.title = "UoPS | Student - Daily Attendance";
        getAttendace();
    }, []);

    const getAttendace = async() => {
        const res = await getAttendaceWithStudentId(auth()._id);
        if (res.status === 200) {
            var eventsArr = [];
            var bar = new Promise((resolve, reject) => {
                res.data.attendance.forEach((ele, index, array) => {
                    console.log("ele, ", ele);
                    let newdate = new Date(ele.createdAt)
                    let title = "";
                    let date =  `${newdate.getFullYear()}-${newdate.getMonth()+1}-${newdate.getDate()}`;
                    let className = "";
                    if(ele.status === 1){
                        title = `Present (Teacher: ${ele.teacherdata[0].name})`;
                        className = "badge bg-success border-0 text-wrap lh-1 px-0 text-capitalize";
                    }else{
                        title = `Absent (Teacher: ${ele.teacherdata[0].name})`;
                        className = "badge bg-danger border-0 text-wrap lh-1 px-0 text-capitalize";
                    }
                    eventsArr.push({ title: title, date: date, className: className });
                    console.log("array: ", eventsArr)


                    if(index == array.length - 1){ resolve() }
                });
            })

            bar.then(() => {
                console.log("array: ", eventsArr)
                setAttendance(eventsArr);
                console.log("attendance: ", attendance)
            });
        } else if (res.status === 500) {
        }
    }

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
                                        <h4 className="fw-bold py-3 mb-4 text-start"><span className="text-muted fw-light">Student /</span> Attendance</h4>
                                    </div>
                                    <div className="col-lg-4">
                                    </div>
                                </div>
                                <div>
                                    <div className="col-lg-12 col-md-6 order-1">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <FullCalendar
                                                    plugins={[ dayGridPlugin ]}
                                                    initialView="dayGridMonth"
                                                    events={[...attendance]}
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