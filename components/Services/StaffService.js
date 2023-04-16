import axios from 'axios'

const STAFF_BASE_REST_API_URL = 'http://localhost:8080/api/v1/academicStaff';

class StaffService{

    getStaffs(){
        return axios.get(STAFF_BASE_REST_API_URL);
    }


     createStaff(staff){
        return axios.post(STAFF_BASE_REST_API_URL,staff)
    } 


     getStaffById(staff_id){
        return axios.get(STAFF_BASE_REST_API_URL + '/' + staff_id);
    }

     updateStaff(staff_id, staff){
        return axios.put(STAFF_BASE_REST_API_URL+ '/' + staff_id, staff);
     }

     deleteStaff(staff_id){
         return axios.delete(STAFF_BASE_REST_API_URL + '/' + staff_id);
     }
}

export default new StaffService();