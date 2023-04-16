package lk.ac.pdn.sci.exampleInstitute.repository;

import lk.ac.pdn.sci.exampleInstitute.model.Academic_staff;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AcademicStaffRepository extends JpaRepository<Academic_staff,Long> {

    Academic_staff findByEmail(String email);

    Optional<Academic_staff> findOneByEmailAndPassword(String email, String encodedPassword);
}
