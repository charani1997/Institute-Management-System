package lk.ac.pdn.sci.exampleInstitute.repository;

import lk.ac.pdn.sci.exampleInstitute.model.AdminStaff;
import lk.ac.pdn.sci.exampleInstitute.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AdminStaffRepository extends JpaRepository<AdminStaff,Long> {


    AdminStaff findByEmail(String email);

    Optional<AdminStaff> findOneByEmailAndPassword(String email, String encodedPassword);
}
