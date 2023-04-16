package lk.ac.pdn.sci.exampleInstitute.service;

import lk.ac.pdn.sci.exampleInstitute.dto.AcademicStaffListDTO;
import lk.ac.pdn.sci.exampleInstitute.dto.Academic_staffDTO;
import lk.ac.pdn.sci.exampleInstitute.dto.LoginDTO;
import lk.ac.pdn.sci.exampleInstitute.response.LoginResponse;

import java.util.List;

public interface AcademicStaffService {
    String addStaff(Academic_staffDTO academicStaffDTO);

    LoginResponse loginStaff(LoginDTO loginDTO);

    List<AcademicStaffListDTO> getListStaff();

    AcademicStaffListDTO getStaffById(long staffId);

    String deleteStaff(long staffId);
}
