package lk.ac.pdn.sci.exampleInstitute.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1")
public class DepartmentController {
    @GetMapping("departments")
    public String getAllDepartments(){
        return "this is department controller";
    }
}
