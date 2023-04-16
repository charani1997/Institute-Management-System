package lk.ac.pdn.sci.exampleInstitute.service.impl;

import lk.ac.pdn.sci.exampleInstitute.dto.AdminStaffDTO;
import lk.ac.pdn.sci.exampleInstitute.dto.LoginDTO;
import lk.ac.pdn.sci.exampleInstitute.model.AdminStaff;
import lk.ac.pdn.sci.exampleInstitute.repository.AdminStaffRepository;
import lk.ac.pdn.sci.exampleInstitute.response.LoginResponse;
import lk.ac.pdn.sci.exampleInstitute.service.AdminService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AdminImpl implements AdminService {
    @Autowired
    private AdminStaffRepository adminStaffRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private ModelMapper modelMapper;

    AdminStaffDTO adminStaffDTO;
    @Override
    public LoginResponse loginAdmin(LoginDTO loginDTO) {
        String msg = "";
        AdminStaff admin1 = adminStaffRepository.findByEmail(loginDTO.getEmail());
        if (admin1 != null) {
            String password = loginDTO.getPassword();
            String encodedPassword = admin1.getPassword();
            Boolean isPwdRight = passwordEncoder.matches(password, encodedPassword);
            if (isPwdRight) {
                Optional<AdminStaff> adminStaff = adminStaffRepository.findOneByEmailAndPassword(loginDTO.getEmail(), encodedPassword);
                if (adminStaff.isPresent()) {
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
    public String addAdmin(AdminStaffDTO adminStaffDTO) {
        AdminStaff adminStaff = new AdminStaff(
                adminStaffDTO.getAdmin_id(),
                adminStaffDTO.getEmail(),
                this.passwordEncoder.encode(adminStaffDTO.getPassword())
        );
        adminStaffRepository.save(adminStaff);
        return adminStaff.getEmail();
    }

}
