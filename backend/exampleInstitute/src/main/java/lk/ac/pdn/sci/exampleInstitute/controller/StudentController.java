package lk.ac.pdn.sci.exampleInstitute.controller;

import lk.ac.pdn.sci.exampleInstitute.dto.LoginDTO;
import lk.ac.pdn.sci.exampleInstitute.dto.ResponseDTO;
import lk.ac.pdn.sci.exampleInstitute.dto.StudentDTO;
import lk.ac.pdn.sci.exampleInstitute.dto.StudentListDTO;
import lk.ac.pdn.sci.exampleInstitute.exception.ResourceNotFoundException;
import lk.ac.pdn.sci.exampleInstitute.model.Student;
import lk.ac.pdn.sci.exampleInstitute.repository.StudentRepository;
import lk.ac.pdn.sci.exampleInstitute.response.LoginResponse;
import lk.ac.pdn.sci.exampleInstitute.service.StudentService;
import lk.ac.pdn.sci.exampleInstitute.util.VarList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:3000/"},methods={RequestMethod.GET,RequestMethod.POST,RequestMethod.PUT,RequestMethod.DELETE})
@RequestMapping("/api/v1/student")
//@Controller
public class StudentController {
    @Autowired
    private StudentService studentService;

    @Autowired
    private ResponseDTO responseDTO;
    @Autowired
    private StudentRepository studentRepository;

    @PostMapping(path = "/save")
    public String saveStudents(@RequestBody StudentDTO studentDTO){
        String id = studentService.addStudent(studentDTO);
        return id;
    }
    @PostMapping(path = "/login")
    public ResponseEntity<?> loginStudent(@RequestBody LoginDTO loginDTO){
        LoginResponse loginResponse = studentService.loginStudent(loginDTO);
        return ResponseEntity.ok(loginResponse);
    }

    @GetMapping(path = "/getAllStudent")
    public List<StudentDTO> getAllStudent()
    {
        List<StudentDTO>allStudents= studentService.getAllStudent();
        return allStudents;
    }

    //1)get all student list
    //@GetMapping(path = "/listStudent")
    @GetMapping
    public List<StudentListDTO> getListStudent()
    {
        List<StudentListDTO>listStudents= studentService.getListStudent();
        return listStudents;
    }

    //2)create student rest api
    @PostMapping
    public Student createStudent(@RequestBody Student student){
        return studentRepository.save(student);
    }

    //3)build get student by id rest api
    @GetMapping("{stu_id}")
    public ResponseEntity getStudentById(@PathVariable long stu_id){
        try {
            StudentListDTO studentListDTO = studentService.getStudentById(stu_id);
            if (studentListDTO !=null) {
                responseDTO.setCode(VarList.RSP_SUCCESS);
                responseDTO.setMessage("Success");
                responseDTO.setContent(studentListDTO);
                return new ResponseEntity(responseDTO, HttpStatus.ACCEPTED);
            } else {
                responseDTO.setCode(VarList.RSP_NO_DATA_FOUND);
                responseDTO.setMessage("No Student Available For this studentID");
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

    //4) build update student rest api
   //@PutMapping

  /*  public ResponseEntity update(@RequestBody StudentListDTO studentListDTO){
        try {
            String res= studentService.update(studentListDTO);
            if (res.equals("00")){
                responseDTO.setCode(VarList.RSP_SUCCESS);
                responseDTO.setMessage("Success");
                responseDTO.setContent(studentListDTO);
                return new ResponseEntity(responseDTO, HttpStatus.ACCEPTED);

            }else if(res.equals("01")) {
                responseDTO.setCode(VarList.RSP_DUPLICATED);
                responseDTO.setMessage("Not A Registered Student");
                responseDTO.setContent(studentListDTO);
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
*/
    @PutMapping("{stu_id}")
    public ResponseEntity<Student> update(@PathVariable long stu_id,@RequestBody Student studentDetails) {
        Student update = studentRepository.findById(stu_id)
                .orElseThrow(() -> new ResourceNotFoundException("Student not exist with id: " + stu_id));

        update.setFirstName(studentDetails.getFirstName());
        update.setLastName(studentDetails.getLastName());
        update.setEmail(studentDetails.getEmail());

        studentRepository.save(update);

        return ResponseEntity.ok(update);
    }


//5) build delete student rest api
    @DeleteMapping("{stu_id}")
    public ResponseEntity deleteStudent(@PathVariable long stu_id){
        try {
            String res = studentService.deleteStudent(stu_id);
            if (res.equals("00")) {
                responseDTO.setCode(VarList.RSP_SUCCESS);
                responseDTO.setMessage("Success");
                responseDTO.setContent(null);
                return new ResponseEntity(responseDTO, HttpStatus.ACCEPTED);
            } else {
                responseDTO.setCode(VarList.RSP_NO_DATA_FOUND);
                responseDTO.setMessage("No Student Available For this studentID");
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

//-------------------------------------------------------------------------------
    @GetMapping("/forAdmin")
    @PreAuthorize("hasRole('ADMIN')")
    public String forAdmin(){
        return "for admin";
    }
    @GetMapping("/forUser")

    @PreAuthorize("hasAnyRole('ADMIN','USER')")
    public String forUser(){
        return "for user";
    }

/*    @PutMapping("{stu_id}")
    public String update(@RequestBody StudentListDTO studentListDTO)
    {
        String id = studentService.update(studentListDTO);
        return id;
    }*/

   /* @PostMapping(value = "/saveStudent")
    public ResponseEntity saveStudent(@RequestBody StudentDTO studentDTO){
        try {
            String res= studentService.addStudent(studentDTO);
            if (res.equals("00")){
                responseDTO.setCode(VarList.RSP_SUCCESS);
                responseDTO.setMessage("Success");
                responseDTO.setContent(studentDTO);
                return new ResponseEntity(responseDTO, HttpStatus.ACCEPTED);

            }else if(res.equals("06")) {
                responseDTO.setCode(VarList.RSP_DUPLICATED);
                responseDTO.setMessage("Student Registered");
                responseDTO.setContent(studentDTO);
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

    }*/
   @PutMapping(value = "/updateStudent")
    public ResponseEntity updateStudent(@RequestBody StudentDTO studentDTO){
        try {
            String res= studentService.updateStudents(studentDTO);
            if (res.equals("00")){
                responseDTO.setCode(VarList.RSP_SUCCESS);
                responseDTO.setMessage("Success");
                responseDTO.setContent(studentDTO);
                return new ResponseEntity(responseDTO, HttpStatus.ACCEPTED);

            }else if(res.equals("01")) {
                responseDTO.setCode(VarList.RSP_DUPLICATED);
                responseDTO.setMessage("Not A Registered Student");
                responseDTO.setContent(studentDTO);
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
/*
    @GetMapping
    public ResponseEntity getAllStudents(){
        try {
            List<StudentDTO> studentDTOList = studentService.getAllStudents();
            responseDTO.setCode(VarList.RSP_SUCCESS);
            responseDTO.setMessage("Success");
            responseDTO.setContent(studentDTOList);
            return new ResponseEntity(responseDTO, HttpStatus.ACCEPTED);

        }catch (Exception ex){
            responseDTO.setCode(VarList.RSP_ERROR);
            responseDTO.setMessage(ex.getMessage());
            responseDTO.setContent(null);
            return new ResponseEntity(responseDTO, HttpStatus.INTERNAL_SERVER_ERROR);

        }
    }*/
    @GetMapping("/searchStudent/{stu_id}")
    public ResponseEntity searchStudent(@PathVariable long stu_id){
        try {
            StudentDTO studentDTO = studentService.searchStudent(stu_id);
            if (studentDTO !=null) {
                responseDTO.setCode(VarList.RSP_SUCCESS);
                responseDTO.setMessage("Success");
                responseDTO.setContent(studentDTO);
                return new ResponseEntity(responseDTO, HttpStatus.ACCEPTED);
            } else {
                responseDTO.setCode(VarList.RSP_NO_DATA_FOUND);
                responseDTO.setMessage("No Student Available For this studentID");
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

}
