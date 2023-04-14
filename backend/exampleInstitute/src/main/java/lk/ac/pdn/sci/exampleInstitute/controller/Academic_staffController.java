package lk.ac.pdn.sci.exampleInstitute.controller;

import lk.ac.pdn.sci.exampleInstitute.dto.Academic_staffDTO;
import lk.ac.pdn.sci.exampleInstitute.dto.ResponseDTO;
import lk.ac.pdn.sci.exampleInstitute.dto.StudentDTO;
import lk.ac.pdn.sci.exampleInstitute.service.AcademicStaffService;
import lk.ac.pdn.sci.exampleInstitute.service.StudentService;
import lk.ac.pdn.sci.exampleInstitute.util.VarList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api/v1/academicStaff")
//@Controller
public class Academic_staffController {
    @Autowired
    private AcademicStaffService academicStaffService;

    @Autowired
    private ResponseDTO responseDTO;
    @PostMapping(path = "/save")
    public String saveAcademicStaff(@RequestBody Academic_staffDTO academic_staffDTO){
        String id = academicStaffService.addStaff(academic_staffDTO);
        return id;
    }
 /*   @Autowired
    private Academic_staffService academic_staffService;

    @Autowired
    private ResponseDTO responseDTO;

    @PostMapping(value = "/saveStaff")
    public ResponseEntity saveStaff(@RequestBody Academic_staffDTO academic_staffDTO){
        try {
            String res=academic_staffService.saveStaff(academic_staffDTO);
            if (res.equals("00")){
                responseDTO.setCode(VarList.RSP_SUCCESS);
                responseDTO.setMessage("Success");
                responseDTO.setContent(academic_staffDTO);
                return new ResponseEntity(responseDTO, HttpStatus.ACCEPTED);

            }else if(res.equals("06")) {
                responseDTO.setCode(VarList.RSP_DUPLICATED);
                responseDTO.setMessage("Staff Registered");
                responseDTO.setContent(academic_staffDTO);
                return new ResponseEntity(responseDTO, HttpStatus.BAD_REQUEST);
            }else {
                responseDTO.setCode(VarList.RSP_FAIL);
                responseDTO.setMessage("Error");
                responseDTO.setContent(null);
                return new ResponseEntity(responseDTO, HttpStatus.BAD_REQUEST);
            }

        }catch (Exception ex){
            responseDTO.setCode(VarList.RSP_ERROR);
            responseDTO.setMessage(ex.getMessage());
            responseDTO.setContent(null);
            return new ResponseEntity(responseDTO, HttpStatus.INTERNAL_SERVER_ERROR);

        }*/

   /* }
    @PutMapping(value = "/updateStaff")
    public ResponseEntity updateStaff(@RequestBody Academic_staffDTO academic_staffDTO){
        try {
            String res=academic_staffService.updateStaff(academic_staffDTO);
            if (res.equals("00")){
                responseDTO.setCode(VarList.RSP_SUCCESS);
                responseDTO.setMessage("Success");
                responseDTO.setContent(academic_staffDTO);
                return new ResponseEntity(responseDTO, HttpStatus.ACCEPTED);

            }else if(res.equals("01")) {
                responseDTO.setCode(VarList.RSP_DUPLICATED);
                responseDTO.setMessage("Not A Registered Staff");
                responseDTO.setContent(academic_staffDTO);
                return new ResponseEntity(responseDTO, HttpStatus.BAD_REQUEST);
            }else {
                responseDTO.setCode(VarList.RSP_FAIL);
                responseDTO.setMessage("Error");
                responseDTO.setContent(null);
                return new ResponseEntity(responseDTO, HttpStatus.BAD_REQUEST);
            }

        }catch (Exception ex){
            responseDTO.setCode(VarList.RSP_ERROR);
            responseDTO.setMessage(ex.getMessage());
            responseDTO.setContent(null);
            return new ResponseEntity(responseDTO, HttpStatus.INTERNAL_SERVER_ERROR);

        }

    }

    @GetMapping
    public ResponseEntity getAllStaff(){
        try {
            List<Academic_staffDTO> academic_staffDTOList = academic_staffService.getAllStaff();
            responseDTO.setCode(VarList.RSP_SUCCESS);
            responseDTO.setMessage("Success");
            responseDTO.setContent(academic_staffDTOList);
            return new ResponseEntity(responseDTO, HttpStatus.ACCEPTED);

        }catch (Exception ex){
            responseDTO.setCode(VarList.RSP_ERROR);
            responseDTO.setMessage(ex.getMessage());
            responseDTO.setContent(null);
            return new ResponseEntity(responseDTO, HttpStatus.INTERNAL_SERVER_ERROR);

        }
    }
    @GetMapping("/searchStaff/{staff_id}")
    public ResponseEntity searchStaff(@PathVariable long staff_id){
        try {
            Academic_staffDTO academic_staffDTO = academic_staffService.searchStaff(staff_id);
            if (academic_staffDTO !=null) {
                responseDTO.setCode(VarList.RSP_SUCCESS);
                responseDTO.setMessage("Success");
                responseDTO.setContent(academic_staffDTO);
                return new ResponseEntity(responseDTO, HttpStatus.ACCEPTED);
            } else {
                responseDTO.setCode(VarList.RSP_NO_DATA_FOUND);
                responseDTO.setMessage("No Student Available For this staffID");
                responseDTO.setContent(null);
                return new ResponseEntity(responseDTO, HttpStatus.BAD_REQUEST);
            }
        } catch (Exception e) {
            responseDTO.setCode(VarList.RSP_ERROR);
            responseDTO.setMessage(e.getMessage());
            responseDTO.setContent(e);
            return new ResponseEntity(responseDTO, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @DeleteMapping("/deleteStaff/{staff_id}")
    public ResponseEntity deleteStaff(@PathVariable long staff_id){
        try {
            String res = academic_staffService.deleteStaff(staff_id);
            if (res.equals("00")) {
                responseDTO.setCode(VarList.RSP_SUCCESS);
                responseDTO.setMessage("Success");
                responseDTO.setContent(null);
                return new ResponseEntity(responseDTO, HttpStatus.ACCEPTED);
            } else {
                responseDTO.setCode(VarList.RSP_NO_DATA_FOUND);
                responseDTO.setMessage("No Student Available For this staffID");
                responseDTO.setContent(null);
                return new ResponseEntity(responseDTO, HttpStatus.BAD_REQUEST);
            }
        } catch (Exception e) {
            responseDTO.setCode(VarList.RSP_ERROR);
            responseDTO.setMessage(e.getMessage());
            responseDTO.setContent(e);
            return new ResponseEntity(responseDTO, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

*/
}
