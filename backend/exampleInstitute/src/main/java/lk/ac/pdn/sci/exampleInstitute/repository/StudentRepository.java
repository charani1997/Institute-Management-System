package lk.ac.pdn.sci.exampleInstitute.repository;

import lk.ac.pdn.sci.exampleInstitute.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@EnableJpaRepositories
@Repository
public interface StudentRepository extends JpaRepository<Student, Long> {
    Optional<Student> findOneByEmailAndPassword(String email, String password);

    Student findByEmail(String email);

}
