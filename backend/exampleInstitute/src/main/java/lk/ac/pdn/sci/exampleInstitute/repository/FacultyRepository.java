package lk.ac.pdn.sci.exampleInstitute.repository;

import lk.ac.pdn.sci.exampleInstitute.model.Faculty;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FacultyRepository extends JpaRepository<Faculty,Long> {
}
