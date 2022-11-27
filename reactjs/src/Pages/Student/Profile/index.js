import "./style.css";
import { useEffect, useState } from "react";
import FooterComponent from "../../../Components/Layouts/Footer";
import AdminNav from "../../../Components/Layouts/AdminNav";
import { useAuthUser } from 'react-auth-kit';
import { getSingleUser, updateSingleUser } from "../../../Services/api/auth";
import toast from 'react-hot-toast';

function TeacherProfileComponent() {
    
    const auth = useAuthUser();

    var [name, setName] = useState("");
    var [email, setEmail] = useState("");
    var [phoneNumber, setPhoneNumber] = useState("");
  
    const validateEmail = (email) => {
      return email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    };

    const getUser = async() => {
        const res = await getSingleUser(auth()._id);
        if (res.status === 200) {
            setName(res.data.data[0].name)
            setEmail(res.data.data[0].email)
            setPhoneNumber(res.data.data[0].phoneNumber)
        } else if (res.status === 500) {
            setName("")
            setEmail("")
            setPhoneNumber("")
        }
    }

    const updateSingleStudent = async() => {
    
        if (!name || !email || !phoneNumber) {
          toast.error("All fields must be provided.")
          return;
        }
    
        if (!validateEmail(email)) {
          toast.error("Email is not valid");
          return;
        }
    
        const res = await updateSingleUser(name, email, phoneNumber, auth().courseId[0], 1, auth()._id);
        if (res.status === 200) {
          toast.success("Update student successfully");
          getUser()
        } else if (res.status === 500) {
          toast.error(res.data.message);
          getUser();
        }
      }

    useEffect(() => {
        document.title = "UoPS | Student - Profile";
        getUser();
    }, [])

    return (
        <>
            <div className="layout-wrapper layout-content-navbar">
                <div className="layout-container">

                    <div className="layout-page">
                        <AdminNav profileImgPath="../assets/img/avatars/student.png" role="student" />
                        <div className="content-wrapper">
                            <div className="container-xxl flex-grow-1 container-p-y">


                                <h4 className="fw-bold py-3 mb-4 text-start"><span className="text-muted fw-light">Student /</span> Profile</h4>
                                <div className="card">
                                    <div className="card-content p-3">
                                        <div className="row">
                                            <div className="col-lg-4 text-start">
                                                <div className="col mb-3">
                                                    <label htmlFor="teacherStudentName" className="form-label">Name</label>
                                                    <input type="text" id="teacherStudentName" className="form-control" placeholder="Name" value={name} onChange={(e) => { setName(e.target.value) }}/>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 text-start">
                                                <div className="col mb-3">
                                                    <label htmlFor="teacherStudentEmail" className="form-label">Email</label>
                                                    <input type="email" id="teacherStudentEmail" className="form-control" placeholder="Email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                                                </div>
                                            </div>
                                            <div className="col-lg-4 text-start">
                                                <div className="col mb-3">
                                                    <label htmlFor="period" className="form-label">Phone Number</label>
                                                    <div className="input-group">
                                                        <span className="input-group-text">+44</span>
                                                        <input type="number" className="form-control" placeholder="Phone Number" aria-label="Phone Number" id="teacherStudentPhoneNumber" value={phoneNumber} onChange={(e) => { setPhoneNumber(e.target.value) }} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 text-start">
                                                <div className="col mb-3">
                                                    <button className="btn btn-primary float-end" onClick={() => { updateSingleStudent() }}>Update Profile</button>
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
export default TeacherProfileComponent;