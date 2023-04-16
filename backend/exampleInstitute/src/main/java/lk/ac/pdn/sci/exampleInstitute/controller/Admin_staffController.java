package lk.ac.pdn.sci.exampleInstitute.controller;

import lk.ac.pdn.sci.exampleInstitute.dto.AdminStaffDTO;
import lk.ac.pdn.sci.exampleInstitute.dto.LoginDTO;
import lk.ac.pdn.sci.exampleInstitute.dto.StudentDTO;
import lk.ac.pdn.sci.exampleInstitute.response.LoginResponse;
import lk.ac.pdn.sci.exampleInstitute.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/admin")
public class Admin_staffController {

    @Autowired
    private AdminService adminService;

    @GetMapping("/admin_staff")
    public String getAllAdminStaff(){
        return "This is admin controller";
    }

    @PostMapping(path = "/save")
    public String saveAdmin(@RequestBody AdminStaffDTO adminStaffDTO){
        String id = adminService.addAdmin(adminStaffDTO);
        return id;
    }

    @PostMapping(path = "/login")
    public ResponseEntity<?> loginAdmin(@RequestBody LoginDTO loginDTO){
        LoginResponse loginResponse = adminService.loginAdmin(loginDTO);
        return ResponseEntity.ok(loginResponse);
    }
}
