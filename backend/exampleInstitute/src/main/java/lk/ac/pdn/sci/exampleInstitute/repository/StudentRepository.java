package lk.ac.pdn.sci.exampleInstitute.repository;

import lk.ac.pdn.sci.exampleInstitute.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student, Long> {

}
