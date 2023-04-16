package lk.ac.pdn.sci.exampleInstitute.service.impl;

import lk.ac.pdn.sci.exampleInstitute.dto.*;
import lk.ac.pdn.sci.exampleInstitute.model.Academic_staff;
import lk.ac.pdn.sci.exampleInstitute.model.Student;
import lk.ac.pdn.sci.exampleInstitute.repository.AcademicStaffRepository;
import lk.ac.pdn.sci.exampleInstitute.repository.StudentRepository;
import lk.ac.pdn.sci.exampleInstitute.response.LoginResponse;
import lk.ac.pdn.sci.exampleInstitute.service.AcademicStaffService;
import lk.ac.pdn.sci.exampleInstitute.util.VarList;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class AcademicStaffImpl implements AcademicStaffService {
    @Autowired
    private AcademicStaffRepository academicStaffRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private ModelMapper modelMapper;

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

    @Override
    public LoginResponse loginStaff(LoginDTO loginDTO) {
        String msg = "";
        Academic_staff staff1 = academicStaffRepository.findByEmail(loginDTO.getEmail());
        if (staff1 != null) {
            String password = loginDTO.getPassword();
            String encodedPassword = staff1.getPassword();
            Boolean isPwdRight = passwordEncoder.matches(password, encodedPassword);
            if (isPwdRight) {
                Optional<Academic_staff> staff = academicStaffRepository.findOneByEmailAndPassword(loginDTO.getEmail(), encodedPassword);
                if (staff.isPresent()) {
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
    public List<AcademicStaffListDTO> getListStaff() {
        List<Academic_staff> getListStaff = academicStaffRepository.findAll();
        List<AcademicStaffListDTO> staffList = new ArrayList<>();
        for(Academic_staff a:getListStaff)
        {
            AcademicStaffListDTO staffListDTO = new AcademicStaffListDTO(

                    a.getStaff_id(),
                    a.getFirstName(),
                    a.getLastName(),
                    a.getSalary(),
                    a.getEmail()
            );
            staffList.add(staffListDTO);
        }

        return  staffList;

    }

    @Override
    public AcademicStaffListDTO getStaffById(long staffId) {
        if (academicStaffRepository.existsById(staffId)){
            Academic_staff staff1 =academicStaffRepository.findById(staffId).orElse(null);
            return modelMapper.map(staff1,AcademicStaffListDTO.class);
        }else {
            return null;
        }
    }

    @Override
    public String deleteStaff(long staffId) {
        if (academicStaffRepository.existsById(staffId)){
            academicStaffRepository.deleteById(staffId);
            return VarList.RSP_SUCCESS;
        }else {
            return VarList.RSP_NO_DATA_FOUND;
        }
    }
}
