import "./style.css";
import { useEffect, useState } from "react";
import FooterComponent from "../../../Components/Layouts/Footer";
import AdminNav from "../../../Components/Layouts/AdminNav";
import { getCheckAttendanceWithCourseIdAndTeacherIdAndDate } from "../../../Services/api/attendance";
import { useAuthUser } from 'react-auth-kit';

function TeacherAttendanceComponent() {

    const auth = useAuthUser();
    const [date, setDate] = useState("");
    const [count, setCount] = useState(0);
    const [attendance, setAttendance] = useState([]);
    const [takeAttendaceStatus, setTakeAttendanceStatus] = useState(false);

    useEffect(() => {
        document.title = "UoPS | Teacher - Daily Attendance";
        let today = new Date();
        setDate(`${today.getFullYear()}-${today.getMonth()+1}-${today.getDate() < 10 ? "0"+today.getDate() : today.getDate() }`)
        setTimeout(() => {
            changeaDateGetAttendance();
        }, 500);
    }, []);

    const takeAttendace = () => {
        window.location = "/teacher-take-attendance";
    }

    const changeaDateGetAttendance = async() => {
        var _date = document.getElementById("attendDate").value;
        let today = new Date();
        var todayString = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate() < 10 ? "0"+today.getDate() : today.getDate()  }`
        const res = await getCheckAttendanceWithCourseIdAndTeacherIdAndDate(auth().courseId[0], auth()._id, _date);
        if (res.status === 200) {
            if(res.data.count > 0){
                setAttendance(res.data.attendance)
                if(todayString.toString() === _date.toString()){
                    setTakeAttendanceStatus(false)
                    console.log("takeAttendaceStatus: ", takeAttendaceStatus);
                }
            }else{
                if(todayString.toString() === _date.toString()){
                    setTakeAttendanceStatus(true)
                    console.log("takeAttendaceStatus: ", takeAttendaceStatus);
                }else{
                    setTakeAttendanceStatus(false)
                }
                setAttendance([])
            }
            setCount(res.data.count)
        } else if (res.status === 500) {
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

                                <div className="row">
                                    <div className="col">
                                        <h4 className="fw-bold py-3 mb-4 text-start"><span className="text-muted fw-light">Teacher /</span> Daily Attendance</h4>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="row">
                                            <div className="col-4">
                                                {
                                                    takeAttendaceStatus && <button type="button" className="btn btn-sm btn-primary float-end mt-1" onClick={takeAttendace}>Take Attendance</button>
                                                }
                                            </div>
                                            <div className="col">
                                                <div className="input-group">
                                                    <span className="input-group-text">Date</span>
                                                    <input type="date" aria-label="Date" className="form-control" id="attendDate" value={date} onChange={(e) => {setDate(e.target.value); changeaDateGetAttendance()}}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="col-lg-12 col-md-6 order-1">
                                        {
                                            count === 0 && 
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div>
                                                        <img src="../assets/img/favicon.png" height={200} />
                                                    </div>
                                                    <div>
                                                        <h4 className="py-3 mb-4 text-center">No see attendance for {date}</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                        <div className="row">
                                            {
                                                attendance.map((item, index) => {
                                                    return (
                                                        <>

                                                            <div className="col-lg-2 col-md-12 mb-4">
                                                                <div className="card">
                                                                    <div className="card-body">
                                                                        <div className="user-avatar-section">
                                                                            <div className=" d-flex align-items-center flex-column">
                                                                                <img className="img-fluid rounded my-4" src="../../assets/img/avatars/student.png" height="110" width="110" alt="User avatar" />
                                                                                <div className="user-info text-center">
                                                                                    <h6 className="mb-2">{item.studentdata[0].name.length > 15 ? item.studentdata[0].name.slice(0, 15)+"..." : item.studentdata[0].name }</h6>
                                                                                </div>
                                                                                <div>
                                                                                    {
                                                                                        item.status === 1 ?
                                                                                            <>
                                                                                                <button type="button" className="btn rounded-pill btn-icon btn-success">
                                                                                                    P
                                                                                                </button>
                                                                                            </> :
                                                                                            <>
                                                                                                <button type="button" className="btn rounded-pill btn-icon btn-light">
                                                                                                    P
                                                                                                </button>
                                                                                            </>
                                                                                    }
                                                                                    {
                                                                                        item.status === 0 ?
                                                                                            <>
                                                                                                <button type="button" className="btn rounded-pill btn-icon btn-danger">
                                                                                                    A
                                                                                                </button>
                                                                                            </> :
                                                                                            <>
                                                                                                <button type="button" className="btn rounded-pill btn-icon btn-light">
                                                                                                    A
                                                                                                </button>
                                                                                            </>

                                                                                    }
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </>
                                                    )
                                                })
                                            }
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
export default TeacherAttendanceComponent;