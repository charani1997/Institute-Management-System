import axios from 'axios'

const STUDENT_BASE_REST_API_URL = 'http://localhost:8080/api/v1/student';

class StudentService{

    getStudents(){
        return axios.get(STUDENT_BASE_REST_API_URL);
    }


     createStudent(student){
        return axios.post(STUDENT_BASE_REST_API_URL,student)
    } 


     getStudentById(stu_id){
        return axios.get(STUDENT_BASE_REST_API_URL + '/' + stu_id);
    }

     updateStudent(stu_id, student){
        return axios.put(STUDENT_BASE_REST_API_URL+ '/' + stu_id, student);
     }

     deleteStudent(stu_id){
         return axios.delete(STUDENT_BASE_REST_API_URL + '/' + stu_id);
     }
}

export default new StudentService();