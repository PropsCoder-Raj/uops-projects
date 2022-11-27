import { Link } from "react-router-dom";


function SidemenuComponent() {

    return (
        <>

            <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
                <div className="app-brand demo">
                    <Link to="/admin-dashboard" className="app-brand-link">
                        <span className="app-brand-text demo menu-text fw-bolder ms-2" style={{ textTransform: "none" }}>UoPS</span>
                    </Link>
                </div>

                <div className="menu-inner-shadow"></div>

                <ul className="menu-inner py-1">
                    <li className={ window.location.pathname === "/admin-dashboard" ? "menu-item active" : "menu-item" }>
                        <Link to="/admin-dashboard" className="menu-link">
                            <i className="menu-icon tf-icons bx bx-home-circle"></i>
                            <div data-i18n="Analytics">Dashboard</div>
                        </Link>
                    </li>
                    <li className={ window.location.pathname === "/admin-courses-module" ? "menu-item active" : "menu-item" }>
                        <Link to="/admin-courses-module" className="menu-link">
                            <i className="menu-icon tf-icons bx bx-file"></i>
                            <div data-i18n="Analytics">Courses Module</div>
                        </Link>
                    </li>
                    <li className={ window.location.pathname === "/admin-teachers-module" ? "menu-item active" : "menu-item" }>
                        <Link to="/admin-teachers-module" className="menu-link">
                            <i className="menu-icon tf-icons bx bx-user-circle"></i>
                            <div data-i18n="Analytics">Teachers Module</div>
                        </Link>
                    </li>
                    <li className={ window.location.pathname === "/admin-students-module" ? "menu-item active" : "menu-item" }>
                        <Link to="/admin-students-module" className="menu-link">
                            <i className="menu-icon tf-icons bx bx-user-circle"></i>
                            <div data-i18n="Analytics">Students Module</div>
                        </Link>
                    </li>
                </ul>
            </aside>
        </>
    );
}

export default SidemenuComponent;
