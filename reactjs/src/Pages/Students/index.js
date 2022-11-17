import "./style.css";
import { useEffect } from "react";
import FooterComponent from "../../Components/Layouts/Footer";
import SidemenuComponent from "../../Components/Layouts/Sidemenu";

function StudentsModule() {

  useEffect(() => {
    document.title = "UoPS | Admin - Student Module";
  }, [])

  const array = [
    { name: "Rohit Pandit", email: "rohit@gmail.com", course: "BE in Computer Engineering", phoneNumber: '+91 5487986532', status: "ACTIVE" },
    { name: "Aditya Pandit", email: "aditya@gmail.com", course: "B.Com", phoneNumber: '+91 9865542145', status: "ACTIVE" },
    { name: "Pratik", email: "pratik@gmail.com", course: "BE in Computer Engineering", phoneNumber: '+91 4578651278', status: "DEACTIVE" },
    { name: "Aniket", email: "ani@gmail.com", course: "BE in Computer Engineering", phoneNumber: '+91 5487986532', status: "ACTIVE" },
    { name: "Suraj P", email: "suraj@gmail.com", course: "BE in Computer Engineering", phoneNumber: '+91 7845568989', status: "ACTIVE" },
    { name: "Rakesh", email: "rak@gmail.com", course: "B.B.A", phoneNumber: '+91 7878989865', status: "ACTIVE" },
    { name: "Siddhu", email: "siddhu@gmail.com", course: "BE in Computer Engineering", phoneNumber: '+91 1256234556', status: "ACTIVE" },
  ]

  return (
    <>
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">

          <SidemenuComponent />

          <div className="layout-page">
            <div className="content-wrapper">
              <div className="container-xxl flex-grow-1 container-p-y">

                <h4 class="fw-bold py-3 mb-4 text-start"><span class="text-muted fw-light">Admin /</span> Students Module</h4>

                <div className="row">
                  <div className="col-lg-12">
                    <div class="card text-start">
                      <h5 class="card-header">
                        Students List
                        
                        <button
                          type="button"
                          class="btn btn-primary float-end"
                          data-bs-toggle="modal"
                          data-bs-target="#basicModal"
                        >
                          Add Student
                        </button>
                      </h5>
                      <div class="card-content pt-0">
                        <div class="table-responsive text-start">
                          <table class="table text-nowrap">
                            <thead>
                              <tr>
                                <th>No</th>
                                <th>Students Name</th>
                                <th>Email</th>
                                <th>Phone Number</th>
                                <th>Courses</th>
                                <th>Status</th>
                                <th>Action</th>
                              </tr>
                            </thead>
                            <tbody className="table-border-bottom-0">
                              {
                                array.map((ele, index) => {
                                  return (<>
                                    <tr>
                                      <td>{index+1}</td>
                                      <td>{ele.name}</td>
                                      <td>{ele.email}</td>
                                      <td>{ele.phoneNumber}</td>
                                      <td>{ele.course}</td>
                                      <td>
                                        { ele.status === "ACTIVE" && <span class="badge bg-label-success"> ACTIVE </span> }
                                        { ele.status === "DEACTIVE" && <span class="badge bg-label-danger"> DEACTIVE </span> }
                                      </td>
                                      <td>
                                        <div class="d-flex align-items-center">
                                          <span style={{ cursor: "pointer" }}>
                                            <i class="bx bx-pen mx-1"></i>
                                          </span>
                                          <span style={{ cursor: "pointer" }}>
                                            <i class="bx bx-show mx-1"></i>
                                          </span>
                                        </div>
                                      </td>
                                    </tr>
                                  </>)
                                })
                              }
                            </tbody>
                          </table>
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


          
          <div class="modal fade" id="basicModal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel1">Create/Update Student</h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body text-start">
                  <div class="row">
                    <div class="col mb-3">
                      <label for="studentName" class="form-label">Student Name</label>
                      <input type="text" id="studentName" class="form-control" placeholder="Student Name" />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col mb-3">
                      <label for="email" class="form-label">Email</label>
                      <input type="number" id="email" class="form-control" placeholder="Email" />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col mb-3">
                      <label for="period" class="form-label">Phone Number</label>
                      <div class="input-group">
                        <span class="input-group-text">+91</span>
                        <input type="number" class="form-control" placeholder="Phone Number" aria-label="Phone Number" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div class="col mb-3">
                      <label for="course" class="form-label">Course</label>
                      <select class="form-select" id="courseOption">
                        <option selected="" disabled>--SELECT--</option>
                        <option value="B.Com">B.Com</option>
                        <option value="B.Sc">B.Sc</option>
                      </select>
                    </div>
                  </div>
                  <div className="row">
                    <div class="col mb-3">
                      <label for="status" class="form-label">Status</label>
                      <select class="form-select">
                        <option selected="" disabled>--SELECT--</option>
                        <option value="1">ACTIVE</option>
                        <option value="0">DEACTIVE</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                    Close
                  </button>
                  <button type="button" class="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
          </div>

          <div className="layout-overlay layout-menu-toggle"></div>
        </div>
      </div>
    </>
  );
}

export default StudentsModule;
