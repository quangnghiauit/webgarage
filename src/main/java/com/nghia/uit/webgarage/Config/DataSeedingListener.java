package com.nghia.uit.webgarage.Config;

import com.nghia.uit.webgarage.Model.Roles;
import com.nghia.uit.webgarage.Model.UserRole;
import com.nghia.uit.webgarage.Model.Users;
import com.nghia.uit.webgarage.Repository.RoleRepository;
import com.nghia.uit.webgarage.Repository.UserRepository;
import com.nghia.uit.webgarage.Repository.UserRoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.HashSet;

@Component
public class DataSeedingListener implements ApplicationListener<ContextRefreshedEvent> {

    @Autowired
    private UserRoleRepository userRoleRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;


    @Override
    public void onApplicationEvent(ContextRefreshedEvent contextRefreshedEvent) {
        // Roles
        if (roleRepository.findByRole("ADMIN") == null) {
            roleRepository.save(new Roles("ADMIN"));
        }

        if (roleRepository.findByRole("CLIENT") == null) {
            roleRepository.save(new Roles("CLIENT"));
        }

        if (roleRepository.findByRole("ACCOUNTANT") == null) {
            roleRepository.save(new Roles("ACCOUNTANT"));
        }
        if (roleRepository.findByRole("MECHANIC") == null) {
            roleRepository.save(new Roles("MECHANIC"));
        }

                // Admin account
        if (userRepository.findByUserName("quangnghiauit") == null&&userRoleRepository.findByUserName("quangnghiauit").size()==0) {
            Users admin = new Users();
            UserRole userRole = new UserRole();
            admin.setUserName("quangnghiauit");
            userRole.setUsername("quangnghiauit");
            admin.setPassword(passwordEncoder.encode("123456"));
            userRole.setRole("ADMIN");
            userRepository.save(admin);
            userRoleRepository.save(userRole);
        }


    }
}
