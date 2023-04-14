package lk.ac.pdn.sci.exampleInstitute.controller;

import lk.ac.pdn.sci.exampleInstitute.dto.AuthUserDTO;
import lk.ac.pdn.sci.exampleInstitute.service.JwtAuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtAuthService jwtAuthService;

    @PostMapping("/authenticate")
    public String authenticate(@RequestBody AuthUserDTO dto){
        Authentication authenticate = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(dto.getUsername(), dto.getPassword()));
        if(authenticate.isAuthenticated()){
            return jwtAuthService.generateToken(dto.getUsername());

        }else{
            throw new UsernameNotFoundException("username or password is wrong");
        }

    }
}
