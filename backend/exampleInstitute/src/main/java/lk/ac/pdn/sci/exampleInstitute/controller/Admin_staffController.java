package lk.ac.pdn.sci.exampleInstitute.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping
public class Admin_staffController {
    @GetMapping("/admin_staff")
    public String getAllAdminStaff(){
        return "This is admin controller";
    }
}
