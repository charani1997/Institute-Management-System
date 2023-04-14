package lk.ac.pdn.sci.exampleInstitute.service;

import lk.ac.pdn.sci.exampleInstitute.dto.UserDTO;
import lk.ac.pdn.sci.exampleInstitute.model.User;
import lk.ac.pdn.sci.exampleInstitute.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder encoder;

    public void createNewUser(UserDTO userDTO) {
        User user = new User(
                userDTO.getName(),
                userDTO.getEmail(),
                encoder.encode(userDTO.getPassword()),
                userDTO.getRole()
        );
        userRepository.save(user);
    }
}
