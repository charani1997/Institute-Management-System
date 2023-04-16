package lk.ac.pdn.sci.exampleInstitute.service;

import lk.ac.pdn.sci.exampleInstitute.dto.AdminStaffDTO;
import lk.ac.pdn.sci.exampleInstitute.dto.LoginDTO;
import lk.ac.pdn.sci.exampleInstitute.response.LoginResponse;

public interface AdminService {
    LoginResponse loginAdmin(LoginDTO loginDTO);

    String addAdmin(AdminStaffDTO adminStaffDTO);
}
