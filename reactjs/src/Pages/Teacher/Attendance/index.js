import "./style.css";
import { useEffect } from "react";
import FooterComponent from "../../../Components/Layouts/Footer";
import AdminNav from "../../../Components/Layouts/AdminNav";

function TeacherAttendanceComponent() {

    const array = [
        { name: "Gina Rinehart", email: "gina@gmail.com", course: "BE in Computer Engineering", phoneNumber: '+44 5487986532', status: "ACTIVE", presenty: "Present" },
        { name: "Andrey Melnichenko", email: "andreymelnichenko@gmail.com", course: "B.Com", phoneNumber: '+44 9865542145', status: "ACTIVE", presenty: "Present" },
        { name: "Jim Simons", email: "jimsimons@gmail.com", course: "BE in Computer Engineering", phoneNumber: '+44 4578651278', status: "DEACTIVE", presenty: "Absent" },
        { name: "Stephen Schwarzman", email: "stephenschwarzman@gmail.com", course: "BE in Computer Engineering", phoneNumber: '+44 5487986532', status: "ACTIVE", presenty: "Present" },
        { name: "Lee Shau Kee", email: "leeshaukee@gmail.com", course: "BE in Computer Engineering", phoneNumber: '+44 7845568989', status: "ACTIVE", presenty: "Present" },
        { name: "Jeff Yass", email: "jeffyass@gmail.com", course: "B.B.A", phoneNumber: '+44 7878989865', status: "ACTIVE", presenty: "Present" },
        { name: "Robin Zeng", email: "robinzeng@gmail.com", course: "BE in Computer Engineering", phoneNumber: '+44 1256234556', status: "ACTIVE", presenty: "Present" },
    ]

    useEffect(() => {
        document.title = "UoPS | Teacher - Daily Attendance";
    }, [])

    const takeAttendace = () => {
        window.location = "/teacher-take-attendance";
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
                                        <h4 class="fw-bold py-3 mb-4 text-start"><span class="text-muted fw-light">Teacher /</span> Daily Attendance</h4>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="row">
                                            <div className="col-4">
                                                <button type="button" class="btn btn-sm btn-primary float-end mt-1" onClick={takeAttendace}>Take Attendance</button>
                                            </div>
                                            <div class="col">
                                                <div class="input-group">
                                                    <span class="input-group-text">Date</span>
                                                    <input type="date" aria-label="Date" class="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="col-lg-12 col-md-6 order-1">
                                        <div className="row">
                                            {
                                                array.map((item, index) => {
                                                    return (
                                                        <>

                                                            <div className="col-lg-2 col-md-12 mb-4">
                                                                <div className="card">
                                                                    <div className="card-body">
                                                                        <div class="user-avatar-section">
                                                                            <div class=" d-flex align-items-center flex-column">
                                                                                <img class="img-fluid rounded my-4" src="../../assets/img/avatars/student.png" height="110" width="110" alt="User avatar" />
                                                                                <div class="user-info text-center">
                                                                                    <h6 class="mb-2">{item.name.length > 15 ? item.name.slice(0, 15)+"..." : item.name }</h6>
                                                                                </div>
                                                                                <div>
                                                                                    {
                                                                                        item.presenty === "Present" ?
                                                                                            <>
                                                                                                <button type="button" class="btn rounded-pill btn-icon btn-success">
                                                                                                    P
                                                                                                </button>
                                                                                            </> :
                                                                                            <>
                                                                                                <button type="button" class="btn rounded-pill btn-icon btn-light">
                                                                                                    P
                                                                                                </button>
                                                                                            </>
                                                                                    }
                                                                                    {
                                                                                        item.presenty === "Absent" ?
                                                                                            <>
                                                                                                <button type="button" class="btn rounded-pill btn-icon btn-danger">
                                                                                                    A
                                                                                                </button>
                                                                                            </> :
                                                                                            <>
                                                                                                <button type="button" class="btn rounded-pill btn-icon btn-light">
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