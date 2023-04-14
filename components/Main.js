import Header from './Header';
import Home from './Home';
import About from './About';
import Footer from './Footer';

import CourseDetail from './CourseDetail';


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
import SignIn from './User/SignIn';
import Registration from './Services/Registration';

//Student
import Login from './Student/Login';
import Register from './Student/Register';
import Dashboard from './Student/Dashboard';
import My_courses from './Student/My_courses';
import Grades from './Student/Grades';
import Profile from './Student/Profile';
import ChangePassword from './Student/ChangePassword';


//Staff
import StaffLogin from './Staff/StaffLogin';
import StaffRegister from './Staff/StaffRegister';
import StaffDashboard from './Staff/StaffDashboard';
import StaffMyCourses from './Staff/StaffMyCourses';
import StaffAddCourses from './Staff/StaffAddCourses';
import UserList from './Staff/UserList';
import StaffProfile from './Staff/StaffProfile';
import StaffChangePassword from './Staff/StaffChangePassword';
import AllStaff from './Staff/AllStaff';
import Staff1 from './Staff/Staff1';
import StaffDetails2 from './Staff/StaffDetails2';
import Staff3 from './Staff/Staff3';
import Staff4 from './Staff/Staff4';
import Staff5 from './Staff/Staff5';
import Staff6 from './Staff/Staff6';
import Staff7 from './Staff/Staff7';
import Staff8 from './Staff/Staff8';
import Staff9 from './Staff/Staff9';
import Staff10 from './Staff/Staff10';
import Staff11 from './Staff/Staff11';
import Staff12 from './Staff/Staff12';

//Chat
import Groupchat from './Chat/Groupchat';
import Forum from './Chat/Forum';
import Add from './Chat/Add';
import Edit from './Chat/Edit';
import Navbar from './Chat/Navbar';
import ChatRoom from './Chat/ChatRoom';

//Students
// import Students from './Student/Students';
//import CreateStudentComponent from './Student/CreateStudentComponent';

//import ListStudentComponent from './Student/ListStudentComponent';
//import StudentService from './Services/StudentService';

import StudentList from './Student/StudentList';

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
            <Route path='/student-register' element={<Register />} />
            <Route path='/user-register' element={<Registration />} />


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
            <Route path='/detail2/:course_id' element={<CourseDetail2 />} />
            
            <Route path='/all-courses' element={<AllCourses />} />
            <Route path='/all-staff' element={<AllStaff />} />
            <Route path='/category/:catogory_slug' element={<CategoryCourses />} />

            <Route path='/staff1/:staff_id' element={<Staff1 />} />
            <Route path='/staff-details2/:staff_id' element={<StaffDetails2 />} />
            <Route path='/staff3/:staff_id' element={<Staff3 />} />
            <Route path='/staff4/:staff_id' element={<Staff4 />} />
            <Route path='/staff5/:staff_id' element={<Staff5 />} />
            <Route path='/staff6/:staff_id' element={<Staff6 />} />
            <Route path='/staff7/:staff_id' element={<Staff7 />} />
            <Route path='/staff8/:staff_id' element={<Staff8 />} />
            <Route path='/staff9/:staff_id' element={<Staff9 />} />
            <Route path='/staff10/:staff_id' element={<Staff10 />} />
            <Route path='/staff11/:staff_id' element={<Staff11 />} />
            <Route path='/staff12/:staff_id' element={<Staff12 />} />

            
            <Route path='/departments' element={<Departments />} />
            <Route path='/all-courses2' element={<AllCourses2 />} />

            <Route path='/computing' element={<Computing />} />
            <Route path='/engineering' element={<Engineering />} />
            <Route path='/science' element={<Science />} />

            {/* <Route path='/students' element={<Students />} /> */}
            {/* <Route path='/students_component' element={<CreateStudentComponent />} /> */}
            
            {/*<Route path='/students' element={<ListStudentComponent />} />
            <Route path='/students' element={<StudentService />} />*/}
            
            
            <Route path='/students' element={<StudentList />} />

            
            {/*<Route path='/chat' element={<Groupchat />} />*/}
           
         
            <Route exact path="/forum" component={Forum} />
            <Route exact path="/add" component={Add} />
            <Route exact path="/edit" component={Edit} />
            <Route exact path="/bar" component={Navbar} />

            <Route path='/signin' element={<SignIn />} />
            <Route path='/chat' element={<ChatRoom />} />

        </Switch>
        <Footer />
    </div>
  );
}

export default Main;
