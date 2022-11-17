import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import DashboardComponent from './Pages/Dashboard';
import LoginComponent from "./Pages/Auth/Login";
import TeachersModule from './Pages/Teachers';
import StudentsModule from "./Pages/Students";
import CoursesModule from "./Pages/Courses";

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Navigate to="/login" /> }/>
        <Route path="/admin-dashboard" element={<DashboardComponent />} />
        <Route path="/admin-teachers-module" element={<TeachersModule />} />
        <Route path="/admin-students-module" element={<StudentsModule />} />
        <Route path="/admin-courses-module" element={<CoursesModule />} />
        <Route path="/login" element={<LoginComponent />} />
      </Routes>
    </div>
  );
}

export default App;
