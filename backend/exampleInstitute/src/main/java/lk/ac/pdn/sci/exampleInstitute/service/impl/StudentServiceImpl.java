package lk.ac.pdn.sci.exampleInstitute.service.impl;

import lk.ac.pdn.sci.exampleInstitute.model.Student;
import lk.ac.pdn.sci.exampleInstitute.repository.StudentRepository;
import lk.ac.pdn.sci.exampleInstitute.service.StudentService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentServiceImpl implements StudentService {
    private StudentRepository studentRepository;

    public StudentServiceImpl(StudentRepository studentRepository) {
        super();
        this.studentRepository = studentRepository;
    }
    @Override
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }
}
