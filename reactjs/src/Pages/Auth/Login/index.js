import "./style.css";
import { useEffect } from "react"
import { Link } from "react-router-dom";

function LoginComponent() {

    useEffect(() => {
        document.title = "UoPS | Login";
    }, [])

    const login = () => {
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
                                <div className="mb-3">
                                    <div className="d-flex justify-content-between">
                                        <label className="form-label" for="Email">Email</label>
                                    </div>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="email"
                                        name="email-username"
                                        placeholder="Enter your email or username"
                                        autofocus
                                    />
                                </div>
                                <div className="mb-3 form-password-toggle">
                                    <div className="d-flex justify-content-between">
                                        <label className="form-label" for="password">Password</label>
                                    </div>
                                    <div className="input-group input-group-merge">
                                        <input
                                            type="password"
                                            id="password"
                                            className="form-control"
                                            name="password"
                                            placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                                            aria-describedby="password"
                                        />
                                        <span className="input-group-text cursor-pointer"><i className="bx bx-hide"></i></span>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <button className="btn btn-primary d-grid w-100" onClick={login}>Login</button>
                                </div>
                                <p class="text-center">
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