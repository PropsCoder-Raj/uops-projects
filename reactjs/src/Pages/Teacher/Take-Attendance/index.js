import "./style.css";
import { useEffect } from "react";
import FooterComponent from "../../../Components/Layouts/Footer";
import SidemenuComponent from "../../../Components/Layouts/Sidemenu";
import AdminNav from "../../../Components/Layouts/AdminNav";
import $ from "jquery";


function TeacherTakeAttendaceModule() {

  useEffect(() => {
    document.title = "UoPS | Teacher - Take Attendance";
  }, [])

  const array = [
    { name: "Gina Rinehart", email: "gina@gmail.com", course: "BE in Computer Engineering", phoneNumber: '+44 5487986532', status: "ACTIVE" },
    { name: "Andrey Melnichenko", email: "andreymelnichenko@gmail.com", course: "B.Com", phoneNumber: '+44 9865542145', status: "ACTIVE" },
    { name: "Jim Simons", email: "jimsimons@gmail.com", course: "BE in Computer Engineering", phoneNumber: '+44 4578651278', status: "DEACTIVE" },
    { name: "Stephen Schwarzman", email: "stephenschwarzman@gmail.com", course: "BE in Computer Engineering", phoneNumber: '+44 5487986532', status: "ACTIVE" },
    { name: "Lee Shau Kee", email: "leeshaukee@gmail.com", course: "BE in Computer Engineering", phoneNumber: '+44 7845568989', status: "ACTIVE" },
    { name: "Jeff Yass", email: "jeffyass@gmail.com", course: "B.B.A", phoneNumber: '+44 7878989865', status: "ACTIVE" },
    { name: "Robin Zeng", email: "robinzeng@gmail.com", course: "BE in Computer Engineering", phoneNumber: '+44 1256234556', status: "ACTIVE" },
  ];

  const date = (new Date()).toDateString();

  return (
    <>
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">

          <div className="layout-page">
            <AdminNav profileImgPath="../assets/img/avatars/mentor.png" role="teacher" />
            <div className="content-wrapper">
              <div className="container-xxl flex-grow-1 container-p-y">

                <h4 className="fw-bold py-3 mb-4 text-start"><span className="text-muted fw-light">Admin /</span> Take Attendance</h4>

                <div className="row">
                  <div className="col-lg-12">
                    <div className="card text-start">
                      <h5 className="card-header">
                        Students List
                        <span className="float-end">{date}</span>
                      </h5>
                      <div className="card-content p-2">
                        <div className="table-responsive text-start">
                          <table className="table text-nowrap" id="studentTableDT">
                            <thead>
                              <tr>
                                <th width="10%">No</th>
                                <th>Students Name</th>
                                <th width="15%">Action</th>
                              </tr>
                            </thead>
                            <tbody className="table-border-bottom-0">
                              {
                                array.map((ele, index) => {
                                  return (<>
                                    <tr>
                                      <td>{index+1}</td>
                                      <td>{ele.name}</td>
                                      <td>
                                      <button type="button" className="btn btn-success btn-sm me-2"> Present</button>
                                      <button type="button" className="btn btn-danger btn-sm"> Absent</button>
                                      </td>
                                    </tr>
                                  </>)
                                })
                              }
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="card-footer">
                        <button
                            type="button"
                            className="btn btn-primary float-end"
                            data-bs-toggle="modal"
                            data-bs-target="#basicModal"
                          >
                            Submit Attendance
                          </button>
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

export default TeacherTakeAttendaceModule;
