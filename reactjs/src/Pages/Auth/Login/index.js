import "./style.css";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

import toast from 'react-hot-toast';
import { loginAuth } from "../../../Services/api/auth"

function LoginComponent() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        document.title = "UoPS | Login";
    }, [])

    const login = async() => {
        const res = await loginAuth(email, password);
        if (res.status === 200) {
            toast.success("Login successful");
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("userId", res.data.user._id);
        }else if(res.status === 500){
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
                                <div className="mb-3">
                                    <div className="d-flex justify-content-between">
                                        <label className="form-label" htmlFor="Email">Email</label>
                                    </div>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="email"
                                        name="email-username"
                                        placeholder="Enter your email or username"
                                        onChange={(e) => setEmail(e.target.value)}
                                        autoFocus
                                    />
                                </div>
                                <div className="mb-3 form-password-toggle">
                                    <div className="d-flex justify-content-between">
                                        <label className="form-label" htmlFor="password">Password</label>
                                    </div>
                                    <div className="input-group input-group-merge">
                                        <input
                                            type="password"
                                            id="password"
                                            className="form-control"
                                            name="password"
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                                            aria-describedby="password"
                                        />
                                        <span className="input-group-text cursor-pointer"><i className="bx bx-hide"></i></span>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <button className="btn btn-primary d-grid w-100" onClick={login}>Login</button>
                                </div>
                                <p className="text-center">
                                    <span>New on our platform?</span>&nbsp;
                                    <Link to="/register">
                                        <span>Create an account</span>
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

export default LoginComponent;