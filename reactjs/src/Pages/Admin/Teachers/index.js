import "./style.css";
import { useEffect, useState } from "react";
import FooterComponent from "../../../Components/Layouts/Footer";
import SidemenuComponent from "../../../Components/Layouts/Sidemenu";
import AdminNav from "../../../Components/Layouts/AdminNav";
import $ from "jquery";

import { useSelector, useDispatch } from "react-redux";
import { setCourses } from "../../../Actions/index"
import { setTeachers } from "../../../Actions/index"
import toast from 'react-hot-toast';
import { getCourses  } from "../../../Services/api/course";
import { getTeachers, createTeachers, updateTeacher } from "../../../Services/api/teacher";

function TeachersModule() {
  
  const dispatch = useDispatch();
  const teachersSelector = useSelector((state) => state.teachersReducer);
  const courseSelector = useSelector((state) => state.courseReducer);
  
  const [addEdit, setAddEdit] = useState(0);
  var [name, setName] = useState("");
  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");
  var [phoneNumber, setPhoneNumber] = useState("");
  var [courseId, setCourseId] = useState("");
  var [objectId, setObjectId] = useState("");
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    document.title = "UoPS | Admin - Teacher Module";
    getTeachersData();
  }, [])
  
  const validateEmail = (email) => {
    return email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const getTeachersData = async() => {
    $("#teacherTableDT").DataTable().destroy();
    getCourse()
    const res = await getTeachers();
    if (res.status === 200) {
      dispatch(setTeachers(res.data.data))
      dataTableApply();
    } else if (res.status === 500) {
      dispatch(setTeachers([]))
      dataTableApply();
    }
  }

  const getCourse = async() => {
    $("#courseTableDT").DataTable().destroy();
    const res = await getCourses();
    if (res.status === 200) {
      dispatch(setCourses(res.data.data))
      dataTableApply();
    } else if (res.status === 500) {
      dispatch(setCourses([]))
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

  const addTeacher = async() => {
    if (!name || !email || !password || !phoneNumber || !courseId) {
      toast.error("All fields must be provided.")
      return;
    }

    if (!validateEmail(email)) {
      toast.error("Email is not valid");
      return;
    }

    setLoader(true);
    const res = await createTeachers(name, email, password, phoneNumber, courseId, 1, 1);
    if (res.status === 200) {
      toast.success("Teacher created successfully");
      setLoader(false);
      clearFields();
      document.getElementById("closeCourseModal").click();
      getTeachersData()
    } else if (res.status === 500) {
      toast.error(res.data.message);
      getTeachersData();
      clearFields();
    }
  }
  
  const updateSingleTeacher = async() => {
    
    var _name = document.getElementById("adminTeacherName").value;
    var _email = document.getElementById("adminTeacherEmail").value;
    var _courseId = document.getElementById("adminTeacherCourseSelect").value;
    var _phoneNumber = document.getElementById("adminTeacherPhoneNumber").value;

    if (!_name || !_email || !_phoneNumber || !_courseId) {
      toast.error("All fields must be provided.")
      return;
    }

    if (!validateEmail(_email)) {
      toast.error("Email is not valid");
      return;
    }

    setLoader(true);
    const res = await updateTeacher(_name, _email, _phoneNumber, _courseId, objectId);
    if (res.status === 200) {
      toast.success("Update teacher successfully");
      setLoader(false);
      clearFields();
      document.getElementById("closeCourseModal").click();
      getTeachersData()
    } else if (res.status === 500) {
      toast.error(res.data.message);
      getTeachersData();
      clearFields();
    }
  }

  
  const clearFields = async() => {
    document.getElementById("adminTeacherName").value = "";
    document.getElementById("adminTeacherEmail").value = "";
    document.getElementById("adminTeacherPhoneNumber").value = "";
    document.getElementById("adminTeacherCourseSelect").value = "";
    document.getElementById("adminTeacherPassword").value = "";
  }

  const getSingleTeacher = async(ele) => {
    document.getElementById("adminTeacherName").value = ele.name;
    document.getElementById("adminTeacherEmail").value = ele.email;
    document.getElementById("adminTeacherCourseSelect").value = ele.courseId[0];
    document.getElementById("adminTeacherPhoneNumber").value = ele.phoneNumber;
    
    document.getElementById("modalOpenModalBtn").click();
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
                          id="basicModalBtn"
                          onClick={() => { setAddEdit(0); clearFields() }}
                        >
                          Add Teacher
                        </button>
                        <button
                          type="button"
                          className="btn btn-primary float-end"
                          data-bs-toggle="modal"
                          data-bs-target="#basicModal"
                          id="modalOpenModalBtn"
                          hidden="true"
                        >
                          modalOpen
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
                                <th>Phone Number</th>
                                <th>Status</th>
                                <th>Action</th>
                              </tr>
                            </thead>
                            <tbody className="table-border-bottom-0">
                              {
                                teachersSelector.map((eleAdminTeacher, index) => {
                                  return (<>
                                    <tr>
                                      <td>{index + 1}</td>
                                      <td>{eleAdminTeacher.name}</td>
                                      <td>{eleAdminTeacher.email}</td>
                                      <td>{eleAdminTeacher.courses[0].name}</td>
                                      <td>+44 {eleAdminTeacher.phoneNumber}</td>
                                      <td>
                                        {eleAdminTeacher.status === 1 && <span className="badge bg-label-success"> ACTIVE </span>}
                                        {eleAdminTeacher.status === 0 && <span className="badge bg-label-danger"> DEACTIVE </span>}
                                      </td>
                                      <td>
                                        <div className="d-flex align-items-center">
                                          <span style={{ cursor: "pointer" }} onClick={() => {getSingleTeacher(eleAdminTeacher); setAddEdit(1); setObjectId(eleAdminTeacher._id) }}>
                                            <i className="bx bx-pen mx-1"></i>
                                          </span>
                                          <span style={{ cursor: "pointer" }} onClick={() => {getSingleTeacher(eleAdminTeacher); setAddEdit(2); }}>
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


          
          <div className="modal fade" id="basicModal" tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel1">{ addEdit == 0 && "Create"} { addEdit == 1 && "Update"} { addEdit == 2 && "View"} Teacher</h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={() => {setAddEdit(0); clearFields()}}
                  ></button>
                </div>
                <div className="modal-body text-start">
                  <div className="row">
                    <div className="col mb-3">
                      <label htmlFor="adminTeacherName" className="form-label">Teacher Name</label>
                      <input type="text" id="adminTeacherName" className="form-control" placeholder="Teacher Name" onChange={(e) => { setName(e.target.value) }}  disabled={ addEdit === 2 && true } />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col mb-3">
                      <label htmlFor="adminTeacherEmail" className="form-label">Email</label>
                      <input type="email" id="adminTeacherEmail" className="form-control" placeholder="Email" onChange={(e) => { setEmail(e.target.value) }}  disabled={ addEdit === 2 && true } />
                    </div>
                  </div>
                  {
                    addEdit === 0 && <>
                      <div className="row">
                        <div className="col mb-3">
                          <label htmlFor="adminTeacherPassword" className="form-label">Password</label>
                          <input type="password" id="adminTeacherPassword" className="form-control" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }}  disabled={ addEdit === 2 && true } />
                        </div>
                      </div>
                    </>
                  }
                  <div className="row">
                    <div className="col mb-3">
                      <label htmlFor="adminTeacherPhoneNumber" className="form-label">Phone Number</label>
                      <div className="input-group">
                        <span className="input-group-text">+44</span>
                        <input type="number" className="form-control" id="adminTeacherPhoneNumber" placeholder="Phone Number" aria-label="Phone Number" onChange={(e) => { setPhoneNumber(e.target.value) }}  disabled={ addEdit === 2 && true } />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col mb-3">
                      <label htmlFor="course" className="form-label">Course</label>
                      <select className="form-select" id="adminTeacherCourseSelect"  onChange={(e) => { setCourseId(e.target.value) }} disabled={ addEdit === 2 && true }>
                        <option selected="" disabled>--SELECT--</option>
                        {
                          courseSelector.map((course) => {
                            return <option value={course._id}>{course.name}</option>
                          })
                        }
                      </select>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal" id="closeCourseModal" onClick={() => {setAddEdit(0); clearFields()}}>
                    Close
                  </button>
                  <button type="button" className="btn btn-primary" onClick={ () => addEdit === 0 ? addTeacher() : updateSingleTeacher() }  hidden={ addEdit === 2 && true }>
                    {
                      loader === true ? 
                      <div className="spinner-border spinner-border-sm text-dark" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div> :
                      "Save changes"
                    }
                    </button>
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
