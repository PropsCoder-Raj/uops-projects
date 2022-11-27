import "./style.css";
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';

import { useSelector, useDispatch } from "react-redux";
import { setCourses } from "../../../Actions/index"
import { getCourses } from "../../../Services/api/course";
import { createUser } from "../../../Services/api/auth";


function RegisterComponent() {

    
    const dispatch = useDispatch();
    const courseSelector = useSelector((state) => state.courseReducer);

    const navigate = useNavigate();
    var [name, setName] = useState("");
    var [email, setEmail] = useState("");
    var [password, setPassword] = useState("");
    var [phoneNumber, setPhoneNumber] = useState("");
    var [courseId, setCourseId] = useState("");
    var [role, setRole] = useState("");
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        document.title = "UoPS | Register";
        getCourse();
    }, [])

    const getCourse = async() => {
        const res = await getCourses();
        if (res.status === 200) {
          dispatch(setCourses(res.data.data))
        } else if (res.status === 500) {
          dispatch(setCourses([]))
        }
    }

    const validateEmail = (email) => {
        return email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };

    const registerUser = async () => {
        if (!name || !email || !password || !phoneNumber || !courseId) {
            toast.error("All fields must be provided.")
            return;
        }

        if (!validateEmail(email)) {
            toast.error("Email is not valid");
            return;
        }

        setLoader(true);
        const res = await createUser(name, email, password, phoneNumber, courseId, role, 1);
        if (res.status === 200) {
            navigate('/admin-dashboard');
            toast.success(`${ role === 1 ? "Teacher" : "Student" } created successfully`);
            setLoader(false);
        } else if (res.status === 500) {
            toast.error(res.data.message);
        }
    }

    return (
        <>
            <div className="container-xxl">
                <div className="authentication-wrapper authentication-basic container-p-y">
                    <div className="authentication-inner">
                        <div className="card">
                            <div className="card-body">
                                <div className="app-brand justify-content-center">
                                    <a href="index.html" className="app-brand-link gap-2">
                                        <span className="app-brand-text demo text-body fw-bolder" style={{ textTransform: "capitalize" }}>UoPS</span>
                                    </a>
                                </div>
                                <div className="row text-start">
                                    <div className="col mb-3">
                                        <label htmlFor="Name" className="form-label">Name</label>
                                        <input type="text" id="Name" className="form-control" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                                    </div>
                                </div>
                                <div className="row text-start">
                                    <div className="col mb-3">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input type="email" id="email" className="form-control" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                                    </div>
                                </div>
                                <div className="row text-start">
                                    <div className="col mb-3">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input type="password" id="password" className="form-control" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                                    </div>
                                </div>
                                <div className="row text-start">
                                    <div className="col mb-3">
                                        <label htmlFor="period" className="form-label">Phone Number</label>
                                        <div className="input-group">
                                            <span className="input-group-text">+44</span>
                                            <input type="number" className="form-control" placeholder="Phone Number" aria-label="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row text-start">
                                    <div className="col mb-3">
                                        <label htmlFor="course" className="form-label">Course</label>
                                        <select className="form-select" id="courseOption" value={courseId} onChange={(e) => setCourseId(e.target.value)}>
                                            <option value="" disabled>--SELECT--</option>
                                            {
                                                courseSelector.map((course) => {
                                                    return <option value={course._id}>{course.name}</option>
                                                })
                                            }
                                        </select>
                                    </div>
                                </div>
                                {/* <div className="row text-start">
                                    <div className="col mb-3">
                                        <label htmlFor="status" className="form-label">Status</label>
                                        <select className="form-select">
                                            <option selected="" disabled>--SELECT--</option>
                                            <option value="1">ACTIVE</option>
                                            <option value="0">DEACTIVE</option>
                                        </select>
                                    </div>
                                </div> */}
                                <div className="row text-start">
                                    <div className="col mb-3">
                                        <label htmlFor="status" className="form-label">Role</label>
                                        <select className="form-select" value={role} onChange={(e) => setRole(e.target.value)}>
                                            <option value="" disabled>--SELECT--</option>
                                            <option value="2">Student</option>
                                            <option value="1">Teacher</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <button className="btn btn-primary d-grid w-100" onClick={() => registerUser()}>Register</button>
                                </div>
                                <p className="text-center">
                                    <span>Already have an account?</span>&nbsp;
                                    <Link to="/login">
                                        <span>Sign in method</span>
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RegisterComponent;