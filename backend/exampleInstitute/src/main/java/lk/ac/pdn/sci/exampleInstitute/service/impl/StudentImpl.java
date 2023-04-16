package lk.ac.pdn.sci.exampleInstitute.service.impl;

import lk.ac.pdn.sci.exampleInstitute.dto.LoginDTO;
import lk.ac.pdn.sci.exampleInstitute.dto.StudentDTO;
import lk.ac.pdn.sci.exampleInstitute.dto.StudentListDTO;
import lk.ac.pdn.sci.exampleInstitute.model.Student;
import lk.ac.pdn.sci.exampleInstitute.repository.StudentRepository;
import lk.ac.pdn.sci.exampleInstitute.response.LoginResponse;
import lk.ac.pdn.sci.exampleInstitute.service.StudentService;
import lk.ac.pdn.sci.exampleInstitute.util.VarList;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
@Service
public class StudentImpl implements StudentService {
    @Autowired
    private StudentRepository studentRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private ModelMapper modelMapper;
    @Override
    public String addStudent(StudentDTO studentDTO) {
        Student student = new Student(
                studentDTO.getStu_id(),
                studentDTO.getFirstName(),
                studentDTO.getLastName(),
                studentDTO.getDateOfBirth(),
                studentDTO.getAdmissionDate(),
                studentDTO.getEmail(),
                studentDTO.getAddress(),
                studentDTO.getUsername(),
                this.passwordEncoder.encode(studentDTO.getPassword()),
                //studentDTO.getPassword(),
                studentDTO.getMobileNumber()

        );
        studentRepository.save(student);



        return student.getUsername();

    }
    StudentDTO studentDTO;
    @Override
    public LoginResponse loginStudent(LoginDTO loginDTO) {
        String msg = "";
        Student student1 = studentRepository.findByEmail(loginDTO.getEmail());
        if (student1 != null) {
            String password = loginDTO.getPassword();
            String encodedPassword = student1.getPassword();
            Boolean isPwdRight = passwordEncoder.matches(password, encodedPassword);
            if (isPwdRight) {
                Optional<Student> student = studentRepository.findOneByEmailAndPassword(loginDTO.getEmail(), encodedPassword);
                if (student.isPresent()) {
                    return new LoginResponse("Login Success", true);
                } else {
                    return new LoginResponse("Login Failed", false);
                }
            } else {

                return new LoginResponse("password Not Match", false);
            }
        }else {
            return new LoginResponse("Email not exits", false);
        }
    }

    @Override
    public List<StudentDTO> getAllStudent() {
        List<Student> getStudents = studentRepository.findAll();
        List<StudentDTO> studentDTOList = new ArrayList<>();
        for(Student a:getStudents)
        {
            StudentDTO studentDTO = new StudentDTO(

                    a.getStu_id(),
                    a.getFirstName(),
                    a.getLastName(),
                    a.getDateOfBirth(),
                    a.getAdmissionDate(),
                    a.getEmail(),
                    a.getAddress(),
                    a.getUsername(),
                    a.getPassword(),
                    a.getMobileNumber()
            );
            studentDTOList.add(studentDTO);
        }

        return  studentDTOList;
    }

 /*   @Override
    public String updateStudents(StudentDTO studentDTO) {
        if (studentRepository.existsById(studentDTO.getStu_id())) {
            Student student = studentRepository.getById(studentDTO.getStu_id());


            student.setFirstName(studentDTO.getFirstName());
            student.setLastName(studentDTO.getLastName());
            student.setDateOfBirth(studentDTO.getDateOfBirth());
            student.setAdmissionDate(studentDTO.getAdmissionDate());
            student.setEmail(studentDTO.getEmail());
            student.setAddress(studentDTO.getAddress());
            student.setUsername(studentDTO.getUsername());
            student.setPassword(studentDTO.getPassword());
            student.setMobileNumber(studentDTO.getMobileNumber());
            studentRepository.save(student);
        }
        else
        {
            System.out.println("Student ID do not Exist");
        }
        return null;
    }*/

    public String updateStudents(StudentDTO studentDTO){
        if (studentRepository.existsById(studentDTO.getStu_id())){
            studentRepository.save(modelMapper.map(studentDTO, Student.class));
            return VarList.RSP_SUCCESS;

        }else {
            return VarList.RSP_NO_DATA_FOUND;
        }
    }
    public String deleteStudent(long stu_id){
        if (studentRepository.existsById(stu_id)){
            studentRepository.deleteById(stu_id);
            return VarList.RSP_SUCCESS;
        }else {
            return VarList.RSP_NO_DATA_FOUND;
        }
    }

    @Override
    public StudentDTO searchStudent(long stuId) {
        if (studentRepository.existsById(stuId)){
            Student student =studentRepository.findById(stuId).orElse(null);
            return modelMapper.map(student,StudentDTO.class);
        }else {
            return null;
        }
    }
//1)
    @Override
    public List<StudentListDTO> getListStudent() {
        List<Student> getListStudents = studentRepository.findAll();
        List<StudentListDTO> studentList = new ArrayList<>();
        for(Student a:getListStudents)
        {
            StudentListDTO studentListDTO = new StudentListDTO(

                    a.getStu_id(),
                    a.getFirstName(),
                    a.getLastName(),
                    a.getEmail()
            );
            studentList.add(studentListDTO);
        }

        return  studentList;

    }
//2)
    @Override
    public StudentListDTO getStudentById(long stuId) {
        if (studentRepository.existsById(stuId)){
            Student student1 =studentRepository.findById(stuId).orElse(null);
            return modelMapper.map(student1,StudentListDTO.class);
        }else {
            return null;
        }
    }
//3)
    @Override
    public String update(StudentListDTO studentListDTO) {
        if (studentRepository.existsById(studentListDTO.getStu_id())){
            studentRepository.save(modelMapper.map(studentListDTO, Student.class));
            return VarList.RSP_SUCCESS;

        }else {
            return VarList.RSP_NO_DATA_FOUND;
        }
    }
}
