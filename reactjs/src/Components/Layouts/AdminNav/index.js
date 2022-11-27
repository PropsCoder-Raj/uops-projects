import { Link } from "react-router-dom";
import { useSignOut } from 'react-auth-kit'


function AdminNav(props) {

    const { profileImgPath, role } = props;
    const signOut = useSignOut()

    return (
        <>
            <nav className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme" id="layout-navbar">
                <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
                    <div className="navbar-nav me-auto">
                    </div>
                </div>

                <div className="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
                    {
                        (role === "teacher" || role === "student") && <>
                            <ul className="navbar-nav flex-row align-items-center">
                                <li><div className="fw-bold fs-large">UoPS</div></li>
                            </ul>
                        </>
                    }
                    <ul className="navbar-nav flex-row align-items-center ms-auto">
                        <li className="nav-item lh-1 me-3">
                            { role === "teacher" &&
                                <div className="navbar-nav me-auto w-100">
                                    <Link className={ window.location.pathname === "/teacher-dashboard" ? "nav-item nav-link active" : "nav-item nav-link" } to="/teacher-dashboard">Dashboard</Link>
                                    <Link className={ window.location.pathname === "/teacher-students" ? "nav-item nav-link active" : "nav-item nav-link" } to="/teacher-students">Students</Link>
                                    <Link className={ window.location.pathname === "/teacher-attendance" ? "nav-item nav-link active" : "nav-item nav-link" } to="/teacher-attendance">Daily Attendance</Link>
                                    <Link className={ window.location.pathname === "/teacher-profile" ? "nav-item nav-link active" : "nav-item nav-link" } to="/teacher-profile">Profile</Link>
                                </div>
                            }
                            { role === "student" &&
                                <div className="navbar-nav me-auto">
                                    <Link className={ window.location.pathname === "/student-dashboard" ? "nav-item nav-link active" : "nav-item nav-link" } to="/student-dashboard">Dashboard</Link>
                                    <Link className={ window.location.pathname === "/student-attendance" ? "nav-item nav-link active" : "nav-item nav-link" } to="/student-attendance">Attendance</Link>
                                    <Link className={ window.location.pathname === "/student-profile" ? "nav-item nav-link active" : "nav-item nav-link" } to="/student-profile">Profile</Link>
                                </div>
                            }
                        </li>
                        <li className="nav-item navbar-dropdown dropdown-user dropdown">
                            <a className="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="false">
                                <div className="avatar avatar-online">
                                    <img src={profileImgPath} alt="" className="w-px-40 h-auto rounded-circle" />
                                </div>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li>
                                    <a className="dropdown-item" href="#">
                                        <div className="d-flex">
                                            <div className="flex-shrink-0 me-3">
                                                <div className="avatar avatar-online">
                                                    <img src={profileImgPath} alt="" className="w-px-40 h-auto rounded-circle" />
                                                </div>
                                            </div>
                                            <div className="flex-grow-1">
                                                <span className="fw-semibold d-block">UoPS {role === "teacher" && "Teacher"} {role === "admin" && "Admin"}</span>
                                                <small className="text-muted">{role === "teacher" && "Teacher"} {role === "admin" && "Admin"}</small>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <div className="dropdown-divider"></div>
                                </li>
                                <li>
                                    <a className="dropdown-item"  onClick={() => signOut()}>
                                        <i className="bx bx-power-off me-2"></i>
                                        <span className="align-middle" type="button">Log Out</span>
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
