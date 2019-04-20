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
        if (roleRepository.findByRole("ROLE_ADMIN") == null) {
            roleRepository.save(new Roles("ROLE_ADMIN"));
        }

        if (roleRepository.findByRole("ROLE_CLIENT") == null) {
            roleRepository.save(new Roles("ROLE_CLIENT"));
        }

        if (roleRepository.findByRole("ROLE_OPERATOR") == null) {
            roleRepository.save(new Roles("ROLE_OPERATOR"));
        }
        if (roleRepository.findByRole("ROLE_MECHANIC") == null) {
            roleRepository.save(new Roles("ROLE_MECHANIC"));
        }

                // Admin account
        if (userRepository.findByUserName("quangnghiauit") == null&&userRoleRepository.findByUserName("quangnghiauit")==null) {
            Users admin = new Users();
            UserRole userRole = new UserRole();
            admin.setUserName("quangnghiauit");
            userRole.setUsername("quangnghiauit");
            admin.setPassword(passwordEncoder.encode("123456"));
            userRole.setRole("ROLE_ADMIN");
            userRepository.save(admin);
            userRoleRepository.save(userRole);
        }

        // Member account
//        if (userRoleRepository.findByUserName("executive") == null) {
//
//
//            UserRole executive = new UserRole();
//            executive.setUserName("executive");
//            executive.setPassword(passwordEncoder.encode("123456"));
//            executive.setUserID(1);
//            executive.setRoles("ROLE_EXECUTIVE");
//            userRoleRepository.save(executive);
//        }
    }
}
