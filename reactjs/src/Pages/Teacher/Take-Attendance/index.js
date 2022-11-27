import "./style.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FooterComponent from "../../../Components/Layouts/Footer";
import AdminNav from "../../../Components/Layouts/AdminNav";

import { getStudentCourseWise } from "../../../Services/api/course";
import { createAttendance } from "../../../Services/api/attendance";
import toast from 'react-hot-toast';
import { useAuthUser } from 'react-auth-kit';

function TeacherTakeAttendaceModule() {
  
  const auth = useAuthUser();
  const navigate = useNavigate();
  const [students, setStudents] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    document.title = "UoPS | Teacher - Take Attendance";
    getStudentData();
  }, [])

  const date = (new Date()).toDateString();

  
  const getStudentData = async() => {
    const res = await getStudentCourseWise(auth().courseId[0]);
    if (res.status === 200) {
      let array = [];
      res.data.data.map((ele) => {
        array.push({ ...ele, attendaceStatus: -1 })
      })
      setStudents(array);
    } else if (res.status === 500) {
      let array = [];
      setStudents(array);
    }
  }

  const setAttendStatus = (ind, value) => {
    students.forEach((ele, index) => {
      if(index === ind) {
        ele.attendaceStatus = value;
      }
    })
    setStudents([...students]);
  }

  const submitAttendStatus = () => {
    var notCheckCount = 0;
    var bar = new Promise((resolve, reject) => {
      students.forEach((ele, index, array) => {
        if(ele.attendaceStatus == -1){
          notCheckCount++
        }

        if(index === array.length - 1) resolve()
      })
    })

    bar.then(() => {
      if(notCheckCount > 0){
        toast.error("Please check all students before submitting the attendance. ")
        return;
      }

      setLoader(true);

      var bar1 = new Promise((resolve, reject) => {
        students.forEach(async(ele, index, array) => {
          const res = await createAttendance(auth().courseId[0], auth()._id, ele._id, ele.attendaceStatus);
          if (res.status === 200) {
            if(index === array.length - 1) resolve()
          }
        });
      });

      bar1.then(() => {
        setLoader(false);
        navigate('/teacher-attendance')
        toast.success("Complete the attendance students.");
      });
    });  
  }

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
                                students.map((ele, index) => {
                                  return (<>
                                    <tr>
                                      <td>{index+1}</td>
                                      <td>{ele.name}</td>
                                      <td>
                                        {
                                          console.log("ele.attendaceStatus: ", ele.attendaceStatus)
                                          }
                                        {
                                          ele.attendaceStatus !== -1 ? <>
                                            {ele.attendaceStatus == 1 && <> <span className="badge bg-label-success"> PRESENT </span> </>}
                                            {ele.attendaceStatus == 0 && <> <span className="badge bg-label-danger"> ABSENT </span> </>}
                                          </> :
                                            <>
                                              <button type="button" className="btn btn-success btn-sm me-2" onClick={() => setAttendStatus(index, 1) }> Present</button>
                                              <button type="button" className="btn btn-danger btn-sm" onClick={() => setAttendStatus(index, 0) }> Absent</button>
                                            </>
                                        }
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
                            onClick={() => submitAttendStatus()}
                          >
                            {
                              loader === true ? 
                              <div className="spinner-border spinner-border-sm text-dark" role="status">
                                <span className="visually-hidden">Loading...</span>
                              </div> :
                              "Submit Attendance"
                            }
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
