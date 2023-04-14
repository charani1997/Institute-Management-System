//import axios from 'axios'

//const EMPLOYEE_BASE_REST_API_URL = 'http://localhost:8080/api/v1/students';

class StudentService{

    getAllStudents(){
        return axios.get(EMPLOYEE_BASE_REST_API_URL)
    }

    // createStudents(student){
    //     return axios.post(EMPLOYEE_BASE_REST_API_URL, student)
    // }

    // getStudentById(studentId){
    //     return axios.get(EMPLOYEE_BASE_REST_API_URL + '/' + studentId);
    // }

    // updateStudent(studentId, student){
    //     return axios.put(EMPLOYEE_BASE_REST_API_URL + '/' +studentId, student);
    // }

    // deleteStudent(studentId){
    //     return axios.delete(EMPLOYEE_BASE_REST_API_URL + '/' + studentId);
    // }
}

export default new StudentService();