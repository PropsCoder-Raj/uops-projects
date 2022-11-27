import './App.css';
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
import { AuthProvider } from 'react-auth-kit'
import { RequireAuth } from 'react-auth-kit'



function App() {

  return (
    <>
      <Toaster position="bottom-center" />
      <div className="App">
        <AuthProvider authType={'cookie'}
          authName={'_auth'}
          cookieDomain={window.location.hostname}
          cookieSecure={window.location.protocol === "https:"}> 
            <Routes>
              <Route path='/' element={<Navigate to="/login" />} />
              <Route path="/admin-dashboard" element={<RequireAuth loginPath={'/login'}><DashboardComponent /></RequireAuth>} />
              <Route path="/admin-teachers-module" element={<RequireAuth loginPath={'/login'}><TeachersModule /></RequireAuth>} />
              <Route path="/admin-students-module" element={<RequireAuth loginPath={'/login'}><StudentsModule /></RequireAuth>} />
              <Route path="/admin-courses-module" element={<RequireAuth loginPath={'/login'}><CoursesModule /></RequireAuth>} />

              {/* <Route path="/teacher-dashboard" element={<TeacherDashboardComponent />} />
              <Route path="/teacher-students" element={<TeacherStudentsModule />} />
              <Route path="/teacher-profile" element={<TeacherProfileComponent />} />
              <Route path="/teacher-attendance" element={<TeacherAttendanceComponent />} />
              <Route path="/teacher-take-attendance" element={<TeacherTakeAttendaceModule />} />

              <Route path="/student-dashboard" element={<StudentDashboardComponent />} />
              <Route path="/student-profile" element={<StudentProfileComponent />} />
              <Route path="/student-attendance" element={<StudentAttendanceComponent />} /> */}

              <Route path="/login" element={<LoginComponent />} />
              <Route path="/register" element={<RegisterComponent />} />
            </Routes>
        </AuthProvider>
      </div>
    </>
  );
}

export default App;
