package lk.ac.pdn.sci.exampleInstitute.service;

import lk.ac.pdn.sci.exampleInstitute.dto.LoginDTO;
import lk.ac.pdn.sci.exampleInstitute.dto.StudentDTO;
import lk.ac.pdn.sci.exampleInstitute.response.LoginResponse;

import java.util.List;

public interface StudentService {

    String addStudent(StudentDTO studentDTO);

    LoginResponse loginStudent(LoginDTO loginDTO);

    List<StudentDTO> getAllStudent();

    String updateStudents(StudentDTO studentDTO);

    String deleteStudent(long stuId);

    StudentDTO searchStudent(long stuId);
}
