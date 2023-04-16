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

import StudentSignIn from './User/StudentSignIn';
import StaffSignIn from './User/StaffSignIn';

//service
import Registration from './Services/Registration';
import SignIn from './Services/SignIn';
import StudentService from './Services/StudentService';

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
import ChatRoom from './Chat/ChatRoom';

//Google sheet
import NavbarSheet from './GoogleSheet/NavbarSheet';
//import HomeSheet from './GoogleSheet/Pages/HomeSheet';
//import AddSheet from './GoogleSheet/Pages/AddSheet';
//import EditSheet from './GoogleSheet/Pages/EditSheet';

//Students
// import Students from './Student/Students';
//import CreateStudentComponent from './Student/CreateStudentComponent';

//import ListStudentComponent from './Student/ListStudentComponent';
//import StudentService from './Services/StudentService';

//import StudentList from './Student/StudentList';

//Admin
import AdminSidebar from './Admin/AdminSidebar';
import AdminDashboard from './Admin/AdminDashboard';
import AdminSignin from './Admin/AdminSignin';

import ListStudent from '../StudentList/ListStudent';
import StudentHeader from '../StudentList/StudentHeader';
import StudentFooter from '../StudentList/StudentFooter';
import CreateStudent from '../StudentList/CreateStudent';

import StaffHeader from './StaffList/StaffHeader';
import ListStaff from './StaffList/ListStaff';
import CreateStaff from './StaffList/CreateStaff';




//-----------------------------------------------------------------------------------------
import {Routes as Switch,Route} from 'react-router-dom';
import StaffService from './Services/StaffService';

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
            
            
           
         
            {/*<Route exact path="/forum" component={Forum} />
            <Route exact path="/add" component={Add} />
            <Route exact path="/edit" component={Edit} />
          <Route exact path="/bar" component={Navbar} />*/}

            <Route path='/studentsignin' element={<StudentSignIn />} />
            <Route path='/staffsignin' element={<StaffSignIn />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/chat' element={<ChatRoom />} />

            <Route path='/sheet' element={<NavbarSheet />} />
            {/*<Route path='/homesheet' element={<HomeSheet />} />
            <Route path='/addsheet' element={<AddSheet />} />
          <Route path='/editsheet' element={<EditSheet />} />*/}


            <Route path='/admindashboard' element={<AdminDashboard />} />
            <Route path='/adminsidebar' element={<AdminSidebar />} />
            <Route path='/adminsignin' element={<AdminSignin />} />

            <Route path='/studentheader' element={<StudentHeader />} />
            <Route path='/liststudent' element={<ListStudent />} />
            <Route path='/studentfooter' element={<StudentFooter />} />
            <Route path='/addstudent' element={<CreateStudent />} />
            <Route path='/editstudent/:id' element={<CreateStudent />} />
            <Route path='/studentservice' element={<StudentService />} />
                            
          
            <Route path='/staffheader' element={<StaffHeader />} />
            <Route path='/liststaff' element={<ListStaff />} />
            <Route path='/addstaff' element={<CreateStaff />} />
            <Route path='/editstaff/:id' element={<CreateStaff />} />
            <Route path='/staffservice' element={<StaffService />} />
        
    

        </Switch>
        <Footer />
    </div>
  );
}

export default Main;
