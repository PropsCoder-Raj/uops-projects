import "./style.css";
import { useEffect } from "react";
import FooterComponent from "../../../Components/Layouts/Footer";
import SidemenuComponent from "../../../Components/Layouts/Sidemenu";
import AdminNav from "../../../Components/Layouts/AdminNav";
import $ from "jquery";

import { useSelector, useDispatch } from "react-redux";
import { setTeachers } from "../../../Actions/index"
import toast from 'react-hot-toast';
import { getTeachers } from "../../../Services/api/teacher";

function TeachersModule() {
  
  const dispatch = useDispatch();
  const teachersSelector = useSelector((state) => state.teachersReducer);

  useEffect(() => {
    document.title = "UoPS | Admin - Teacher Module";
    getTecahers()
  }, [])

  const getTecahers = async() => {
    $("#teacherTableDT").DataTable().destroy();
    const res = await getTeachers();
    if (res.status === 200) {
      dispatch(setTeachers(res.data.data))
      dataTableApply();
    } else if (res.status === 500) {
      dispatch(setTeachers([]))
      dataTableApply();
    }
  }

  const dataTableApply = () => {
    if (!$.fn.DataTable.isDataTable("#teacherTableDT")) {
      // $(document).ready(function () {
      setTimeout(function () {
        $("#teacherTableDT").dataTable({
          destroy: true,
          pagingType: "full_numbers",
          pageLength: 20,
          processing: true,
          dom: "Bfrtip",
          select: {
            style: "single",
          },

          buttons: [
            {
              extend: "pageLength",
              className: "btn btn-sm btn-secondary bg-secondary",
            },
            {
              extend: "csv",
              className: "btn btn-sm btn-success bg-success",
            },
            {
              extend: "print",
              customize: function (win) {
                $(win.document.body).css("font-size", "10pt");
                $(win.document.body)
                  .find("table")
                  .addClass("compact")
                  .css("font-size", "inherit");
              },
              className: "btn btn-sm btn-danger bg-danger",
            },
          ],

          fnRowCallback: function (
            nRow,
            aData,
            iDisplayIndex,
            iDisplayIndexFull
          ) {
            var index = iDisplayIndexFull + 1;
            $("td:first", nRow).html(index);
            return nRow;
          },

          lengthMenu: [
            [10, 20, 30, 50, -1],
            [10, 20, 30, 50, "All"],
          ],
          columnDefs: [
            {
              targets: 0,
              render: function (data, type, row, meta) {
                return type === "export" ? meta.row + 1 : data;
              },
            },
          ],
        });
      }, 500);
      // });
    }
  }

  const array = [
    { name: "Stephen Schwarzman", email: "stephenschwarzman@gmail.com", course: "BE in Computer Engineering", status: "ACTIVE" },
    { name: "Lee Shau Kee", email: "leeshaukee@gmail.com", course: "BE in Computer Engineering", status: "ACTIVE" },
    { name: "Jeff Yass", email: "jeffyass@gmail.com", course: "B.B.A", status: "ACTIVE" },
    { name: "Andrey Melnichenko", email: "andreymelnichenko@gmail.com", course: "B.Com", status: "ACTIVE" },
    { name: "Jim Simons", email: "jimsimons@gmail.com", course: "BE in Computer Engineering", status: "DEACTIVE" },
    { name: "Robin Zeng", email: "robinzeng@gmail.com", course: "BE in Computer Engineering", status: "ACTIVE" },
    { name: "Gina Rinehart", email: "gina@gmail.com", course: "BE in Computer Engineering", status: "ACTIVE" },
  ]

  return (
    <>
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">

          <SidemenuComponent />

          <div className="layout-page">
            <AdminNav profileImgPath="../assets/img/avatars/admin.png" role="admin" />
            <div className="content-wrapper">
              <div className="container-xxl flex-grow-1 container-p-y">

                <h4 className="fw-bold py-3 mb-4 text-start"><span className="text-muted fw-light">Admin /</span> Teachers Module</h4>

                <div className="row">
                  <div className="col-lg-12">
                    <div className="card text-start">
                      <h5 className="card-header">
                        Teachers List
                        
                        <button
                          type="button"
                          className="btn btn-primary float-end"
                          data-bs-toggle="modal"
                          data-bs-target="#basicModal"
                        >
                          Add Teacher
                        </button>
                      </h5>
                      <div className="card-content p-2">
                        <div className="table-responsive text-start">
                          <table className="table text-nowrap" id="teacherTableDT">
                            <thead>
                              <tr>
                                <th>No</th>
                                <th>Teachers Name</th>
                                <th>Email</th>
                                <th>Courses</th>
                                <th>Status</th>
                                <th>Action</th>
                              </tr>
                            </thead>
                            <tbody className="table-border-bottom-0">
                              {
                                teachersSelector.map((ele, index) => {
                                  return (<>
                                    <tr>
                                      <td>{index + 1}</td>
                                      <td>{ele.name}</td>
                                      <td>{ele.email}</td>
                                      <td>{ele.courses[0].name}</td>
                                      <td>
                                        {ele.status === 1 && <span className="badge bg-label-success"> ACTIVE </span>}
                                        {ele.status === 0 && <span className="badge bg-label-danger"> DEACTIVE </span>}
                                      </td>
                                      <td>
                                        <div className="d-flex align-items-center">
                                          <span style={{ cursor: "pointer" }}>
                                            <i className="bx bx-pen mx-1"></i>
                                          </span>
                                          <span style={{ cursor: "pointer" }}>
                                            <i className="bx bx-show mx-1"></i>
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


          
          <div className="modal fade" id="basicModal" tabindex="-1" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel1">Create/Update Teacher</h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body text-start">
                  <div className="row">
                    <div className="col mb-3">
                      <label htmlFor="teacherName" className="form-label">Teacher Name</label>
                      <input type="text" id="teacherName" className="form-control" placeholder="Teacher Name" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col mb-3">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input type="email" id="email" className="form-control" placeholder="Email" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col mb-3">
                      <label htmlFor="period" className="form-label">Phone Number</label>
                      <div className="input-group">
                        <span className="input-group-text">+44</span>
                        <input type="number" className="form-control" placeholder="Phone Number" aria-label="Phone Number" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col mb-3">
                      <label htmlFor="course" className="form-label">Course</label>
                      <select className="form-select" id="courseOption">
                        <option selected="" disabled>--SELECT--</option>
                        <option value="B.Com">B.Com</option>
                        <option value="B.Sc">B.Sc</option>
                      </select>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col mb-3">
                      <label htmlFor="status" className="form-label">Status</label>
                      <select className="form-select">
                        <option selected="" disabled>--SELECT--</option>
                        <option value="1">ACTIVE</option>
                        <option value="0">DEACTIVE</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">Save changes</button>
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

export default TeachersModule;
