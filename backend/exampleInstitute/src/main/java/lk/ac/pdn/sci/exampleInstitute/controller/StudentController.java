package lk.ac.pdn.sci.exampleInstitute.controller;

import lk.ac.pdn.sci.exampleInstitute.service.StudentService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

//Implement list student features,add,update,delete student feature
@Controller
public class StudentController {
    private StudentService studentService;

    public StudentController(StudentService studentService) {
        super();
        this.studentService = studentService;
    }//only one constructor so can omit atwired annotation here
    //handler method to handle list students and return mode and view
    @GetMapping("/students")
    public String listStudents(Model model){
        model.addAttribute("students",studentService.getAllStudents());
        return "students";
    }
}
