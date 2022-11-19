import { Link } from "react-router-dom";

function AdminNav(props) {

    const { profileImgPath, role } = props;

    console.log("window.location.pathname: ", window.location.pathname)

    return (
        <>
            <nav class="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme" id="layout-navbar">
                <div class="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
                    <div class="navbar-nav me-auto">
                    </div>
                </div>

                <div class="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
                    {
                        (role === "teacher" || role === "student") && <>
                            <ul class="navbar-nav flex-row align-items-center">
                                <li><div className="fw-bold fs-large">UoPS</div></li>
                            </ul>
                        </>
                    }
                    <ul class="navbar-nav flex-row align-items-center ms-auto">
                        <li class="nav-item lh-1 me-3">
                            { role === "teacher" &&
                                <div class="navbar-nav me-auto w-100">
                                    <Link class={ window.location.pathname === "/teacher-dashboard" ? "nav-item nav-link active" : "nav-item nav-link" } to="/teacher-dashboard">Dashboard</Link>
                                    <Link class={ window.location.pathname === "/teacher-students" ? "nav-item nav-link active" : "nav-item nav-link" } to="/teacher-students">Students</Link>
                                    <Link class={ window.location.pathname === "/teacher-attendance" ? "nav-item nav-link active" : "nav-item nav-link" } to="/teacher-attendance">Daily Attendance</Link>
                                    <Link class={ window.location.pathname === "/teacher-profile" ? "nav-item nav-link active" : "nav-item nav-link" } to="/teacher-profile">Profile</Link>
                                </div>
                            }
                            { role === "student" &&
                                <div class="navbar-nav me-auto">
                                    <Link class={ window.location.pathname === "/student-dashboard" ? "nav-item nav-link active" : "nav-item nav-link" } to="/student-dashboard">Dashboard</Link>
                                    <Link class={ window.location.pathname === "/student-attendance" ? "nav-item nav-link active" : "nav-item nav-link" } to="/student-attendance">Attendance</Link>
                                    <Link class={ window.location.pathname === "/student-profile" ? "nav-item nav-link active" : "nav-item nav-link" } to="/student-profile">Profile</Link>
                                </div>
                            }
                        </li>
                        <li class="nav-item navbar-dropdown dropdown-user dropdown">
                            <a class="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="false">
                                <div class="avatar avatar-online">
                                    <img src={profileImgPath} alt="" class="w-px-40 h-auto rounded-circle" />
                                </div>
                            </a>
                            <ul class="dropdown-menu dropdown-menu-end">
                                <li>
                                    <a class="dropdown-item" href="#">
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 me-3">
                                                <div class="avatar avatar-online">
                                                    <img src={profileImgPath} alt="" class="w-px-40 h-auto rounded-circle" />
                                                </div>
                                            </div>
                                            <div class="flex-grow-1">
                                                <span class="fw-semibold d-block">UoPS {role === "teacher" && "Teacher"} {role === "admin" && "Admin"}</span>
                                                <small class="text-muted">{role === "teacher" && "Teacher"} {role === "admin" && "Admin"}</small>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <div class="dropdown-divider"></div>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="auth-login-basic.html">
                                        <i class="bx bx-power-off me-2"></i>
                                        <span class="align-middle">Log Out</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default AdminNav;
