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

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Navigate to="/login" /> }/>
        <Route path="/admin-dashboard" element={<DashboardComponent />} />
        <Route path="/admin-teachers-module" element={<TeachersModule />} />
        <Route path="/admin-students-module" element={<StudentsModule />} />
        <Route path="/admin-courses-module" element={<CoursesModule />} />

        <Route path="/teacher-dashboard" element={<TeacherDashboardComponent />} />
        <Route path="/teacher-students" element={<TeacherStudentsModule />} />
        <Route path="/teacher-profile" element={<TeacherProfileComponent />} />

        <Route path="/login" element={<LoginComponent />} />
        <Route path="/register" element={<RegisterComponent />} />
      </Routes>
    </div>
  );
}

export default App;
