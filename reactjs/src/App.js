import './App.css';
import React, { useContext } from "react";
import { Route, Routes, Navigate } from 'react-router-dom';
import DashboardComponent from './Pages/Admin/Dashboard';
import LoginComponent from "./Pages/Auth/Login";
import TeachersModule from './Pages/Admin/Teachers';
import StudentsModule from "./Pages/Admin/Students";
import CoursesModule from "./Pages/Admin/Courses";
import RegisterComponent from './Pages/Auth/Register';
import TeacherDashboardComponent from './Pages/Teacher/Dashboard';
import TeacherStudentsModule from './Pages/Teacher/Students';
import TeacherProfileComponent from './Pages/Teacher/Profile';
import TeacherAttendanceComponent from './Pages/Teacher/Attendance';
import TeacherTakeAttendaceModule from './Pages/Teacher/Take-Attendance';
import StudentDashboardComponent from './Pages/Student/Dashboard';
import StudentProfileComponent from './Pages/Student/Profile';
import StudentAttendanceComponent from './Pages/Student/Attendance';

import { Toaster } from 'react-hot-toast';
import { AuthProvider, RequireAuth } from 'react-auth-kit';
import RoleAuthContext from "./Context/roleWiseAuth";

function App() {

  return (
    <>
      <Toaster position="bottom-center" />
      <div className="App">
        <AuthProvider authType={'cookie'}
          authName={'_auth'}
          cookieDomain={window.location.hostname}
          cookieSecure={window.location.protocol === "https:"}> 
            <RoleAuthContext>
              <Routes>
                <Route path='/' element={<Navigate to="/login" />} />
                <Route path="/admin-dashboard" element={<RequireAuth loginPath={'/login'}><DashboardComponent /></RequireAuth>} />
                <Route path="/admin-teachers-module" element={<RequireAuth loginPath={'/login'}><TeachersModule /></RequireAuth>} />
                <Route path="/admin-students-module" element={<RequireAuth loginPath={'/login'}><StudentsModule /></RequireAuth>} />
                <Route path="/admin-courses-module" element={<RequireAuth loginPath={'/login'}><CoursesModule /></RequireAuth>} />

                <Route path="/teacher-dashboard" element={<RequireAuth loginPath={'/login'}><TeacherDashboardComponent /></RequireAuth>} />
                <Route path="/teacher-students" element={<RequireAuth loginPath={'/login'}><TeacherStudentsModule /></RequireAuth>} />
                <Route path="/teacher-profile" element={<RequireAuth loginPath={'/login'}><TeacherProfileComponent /></RequireAuth>} />
                <Route path="/teacher-attendance" element={<RequireAuth loginPath={'/login'}><TeacherAttendanceComponent /></RequireAuth>} />
                <Route path="/teacher-take-attendance" element={<RequireAuth loginPath={'/login'}><TeacherTakeAttendaceModule /></RequireAuth>} />

                <Route path="/student-dashboard" element={<RequireAuth loginPath={'/login'}><StudentDashboardComponent /></RequireAuth>} />
                <Route path="/student-profile" element={<RequireAuth loginPath={'/login'}><StudentProfileComponent /></RequireAuth>} />
                <Route path="/student-attendance" element={<RequireAuth loginPath={'/login'}><StudentAttendanceComponent /></RequireAuth>} />

                <Route path="/login" element={<LoginComponent />} />
                <Route path="/register" element={<RegisterComponent />} />
              </Routes>
            </RoleAuthContext>
        </AuthProvider>
      </div>
    </>
  );
}

export default App;
