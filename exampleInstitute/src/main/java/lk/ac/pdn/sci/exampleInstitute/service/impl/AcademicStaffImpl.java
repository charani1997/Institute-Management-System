package lk.ac.pdn.sci.exampleInstitute.service.impl;

import lk.ac.pdn.sci.exampleInstitute.dto.Academic_staffDTO;
import lk.ac.pdn.sci.exampleInstitute.dto.StudentDTO;
import lk.ac.pdn.sci.exampleInstitute.model.Academic_staff;
import lk.ac.pdn.sci.exampleInstitute.model.Student;
import lk.ac.pdn.sci.exampleInstitute.repository.AcademicStaffRepository;
import lk.ac.pdn.sci.exampleInstitute.repository.StudentRepository;
import lk.ac.pdn.sci.exampleInstitute.service.AcademicStaffService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AcademicStaffImpl implements AcademicStaffService {
    @Autowired
    private AcademicStaffRepository academicStaffRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public String addStaff(Academic_staffDTO academic_staffDTO) {
        Academic_staff academic_staff = new Academic_staff(
                academic_staffDTO.getStaff_id(),
                academic_staffDTO.getFirstName(),
                academic_staffDTO.getLastName(),
                academic_staffDTO.getSalary(),
                academic_staffDTO.getUsername(),
                this.passwordEncoder.encode(academic_staffDTO.getPassword()),
                academic_staffDTO.getEmail(),
                academic_staffDTO.getMobileNumber()
        );
        academicStaffRepository.save(academic_staff);
        return academic_staff.getUsername();
    }
}
