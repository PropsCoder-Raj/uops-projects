import "./style.css";
import { useEffect } from "react"
import { Link } from "react-router-dom";

function RegisterComponent() {

    useEffect(() => {
        document.title = "UoPS | Register";
    }, [])

    const register = () => {
        window.location = "/admin-dashboard";
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
                                        <input type="text" id="Name" className="form-control" placeholder="Name" />
                                    </div>
                                </div>
                                <div className="row text-start">
                                    <div className="col mb-3">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input type="email" id="email" className="form-control" placeholder="Email" />
                                    </div>
                                </div>
                                <div className="row text-start">
                                    <div className="col mb-3">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input type="password" id="password" className="form-control" placeholder="Password" />
                                    </div>
                                </div>
                                <div className="row text-start">
                                    <div className="col mb-3">
                                        <label htmlFor="period" className="form-label">Phone Number</label>
                                        <div className="input-group">
                                            <span className="input-group-text">+44</span>
                                            <input type="number" className="form-control" placeholder="Phone Number" aria-label="Phone Number" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row text-start">
                                    <div className="col mb-3">
                                        <label htmlFor="course" className="form-label">Course</label>
                                        <select className="form-select" id="courseOption">
                                            <option selected="" disabled>--SELECT--</option>
                                            <option value="B.Com">B.Com</option>
                                            <option value="B.Sc">B.Sc</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row text-start">
                                    <div className="col mb-3">
                                        <label htmlFor="status" className="form-label">Status</label>
                                        <select className="form-select">
                                            <option selected="" disabled>--SELECT--</option>
                                            <option value="1">ACTIVE</option>
                                            <option value="0">DEACTIVE</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row text-start">
                                    <div className="col mb-3">
                                        <label htmlFor="status" className="form-label">Role</label>
                                        <select className="form-select">
                                            <option selected="" disabled>--SELECT--</option>
                                            <option value="Student">Student</option>
                                            <option value="Teacher">Teacher</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <button className="btn btn-primary d-grid w-100" onClick={register}>Register</button>
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