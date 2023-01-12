import Header from './Header';
import Home from './Home';
import About from './About';
import Footer from './Footer';

import CourseDetail from './CourseDetail';
import StaffDetails from './StaffDetails';

//Courses
import CourseDetail2 from './Courses/CourseDetail2';
import AllCourses from './Courses/AllCourses'; // List pages
import CategoryCourses from './Courses/CategoryCourses';
import AllCourses2 from './Courses/AllCourses2';

//Faculty
import Computing from './Faculty/Computing';
import Engineering from './Faculty/Engineering';
import Science from './Faculty/Science';

//Department
import Departments from './Department/Departments';

//User
import Login from './User/Login';
import Register from './User/Register';
import Dashboard from './User/Dashboard';
import My_courses from './User/My_courses';
import Grades from './User/Grades';
import Profile from './User/Profile';
import ChangePassword from './User/ChangePassword';

//Staff
import StaffLogin from './Staff/StaffLogin';
import StaffRegister from './Staff/StaffRegister';
import StaffDashboard from './Staff/StaffDashboard';
import StaffMyCourses from './Staff/StaffMyCourses';
import StaffAddCourses from './Staff/StaffAddCourses';
import UserList from './Staff/UserList';
import StaffProfile from './Staff/StaffProfile';
import StaffChangePassword from './Staff/StaffChangePassword';
import StaffDetails2 from './Staff/StaffDetails2';
import AllStaff from './Staff/AllStaff';

//Chat
import Groupchat from './Chat/Groupchat';
import Forum from './Chat/Forum';

import {Routes as Switch,Route} from 'react-router-dom';


function Main() {
  return (
    <div className="App">
        <Header />
        <Switch>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/detail/:course_id' element={<CourseDetail />} />
            <Route path='/user-login' element={<Login />} />
            <Route path='/user-register' element={<Register />} />
            <Route path='/user-dashboard' element={<Dashboard />} />
            <Route path='/user-mycourses' element={<My_courses />} />
            <Route path='/user-grades' element={<Grades />} />
            <Route path='/user-Profile' element={<Profile />} />
            <Route path='/ChangePassword' element={<ChangePassword />} />
            <Route path='/staff-login' element={<StaffLogin />} />
            <Route path='/staff-register' element={<StaffRegister />} />
            <Route path='/staff-dashboard' element={<StaffDashboard />} />
            <Route path='/staff-ChangePassword' element={<StaffChangePassword />} />
            <Route path='/staff-profile' element={<StaffProfile />} />
            <Route path='/staff-mycourses' element={<StaffMyCourses />} />
            <Route path='/staff-addcourses' element={<StaffAddCourses />} />
            <Route path='/my-users' element={<UserList />} />
            <Route path='/staff-detail/:staff_id' element={<StaffDetails />} />
            <Route path='/detail2/:course_id' element={<CourseDetail2 />} />
            <Route path='/staff-detail2/:staff_id' element={<StaffDetails2 />} />
            <Route path='/all-courses' element={<AllCourses />} />
            <Route path='/all-staff' element={<AllStaff />} />
            <Route path='/category/:catogory_slug' element={<CategoryCourses />} />
            
            <Route path='/departments' element={<Departments />} />
            <Route path='/all-courses2' element={<AllCourses2 />} />

            <Route path='/computing' element={<Computing />} />
            <Route path='/engineering' element={<Engineering />} />
            <Route path='/science' element={<Science />} />
            
            <Route path='/chat' element={<Groupchat />} />
            <Route path='/forum' element={<Forum />} />

        </Switch>
        <Footer />
    </div>
  );
}

export default Main;
