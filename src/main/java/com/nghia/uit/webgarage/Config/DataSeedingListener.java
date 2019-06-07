package com.nghia.uit.webgarage.Config;

import com.nghia.uit.webgarage.Message.Constants;
import com.nghia.uit.webgarage.Model.Car;
import com.nghia.uit.webgarage.Model.Roles;
import com.nghia.uit.webgarage.Model.UserRole;
import com.nghia.uit.webgarage.Model.Users;
import com.nghia.uit.webgarage.Repository.CarRepository;
import com.nghia.uit.webgarage.Repository.RoleRepository;
import com.nghia.uit.webgarage.Repository.UserRepository;
import com.nghia.uit.webgarage.Repository.UserRoleRepository;
import com.nghia.uit.webgarage.Service.CarManagementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.HashSet;
import java.util.Random;

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

    @Autowired
    private CarRepository carRepository;

    @Override
    public void onApplicationEvent(ContextRefreshedEvent contextRefreshedEvent) {
        // Roles
        if (roleRepository.findByRole("ADMIN") == null) {
            roleRepository.save(new Roles("ADMIN"));
        }

        if (roleRepository.findByRole("CLIENT") == null) {
            roleRepository.save(new Roles("CLIENT"));
        }
        if (roleRepository.findByRole("RECEPTIONIST") == null) {
            roleRepository.save(new Roles("RECEPTIONIST"));
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
            admin.setUserID(Long.valueOf("20190311181159"));
            admin.setUserName("quangnghiauit");
            userRole.setUsername("quangnghiauit");
            admin.setPassword(passwordEncoder.encode("123456"));
            userRole.setRole("ADMIN");
            userRepository.save(admin);
            userRoleRepository.save(userRole);
        }

        // Admin account
        if (userRepository.findByUserName("quangnghiaclient") == null&&userRoleRepository.findByUserName("quangnghiaclient").size()==0) {
            Users admin = new Users();
            UserRole userRole = new UserRole();
            admin.setUserID(Long.valueOf("201904111812239"));
            admin.setUserName("quangnghiaclient");
            userRole.setUsername("quangnghiaclient");
            admin.setPassword(passwordEncoder.encode("123456"));
            userRole.setRole("CLIENT");
            userRepository.save(admin);
            userRoleRepository.save(userRole);
        }

//        for(int i = 0 ; i<100;i++) {
//            if (userRepository.findByUserName("Nghia client"+String.valueOf(i)) == null&&userRoleRepository.findByUserName("Nghia client"+String.valueOf(i)).size()==0) {
//                Users admin = new Users();
//                UserRole userRole = new UserRole();
//                admin.setUserName("Nghia client"+String.valueOf(i));
//                admin.setDisplayname("Nghia client"+String.valueOf(i));
//                userRole.setUsername("Nghia client"+String.valueOf(i));
//                admin.setPassword(passwordEncoder.encode("123456"));
//                userRole.setRole("CLIENT");
//                userRepository.save(admin);
//                userRoleRepository.save(userRole);
//            }
//        }


//        for(int i = 0 ; i<200;i++) {
//            Car car = new Car();
//            car.setLicensePlate("ABC"+i+3);
//            if(i%3==0){
//                car.setStatus(Constants.INIT_PROCESS);
//            } else {
//                car.setStatus(Constants.PROCESSING);
//            }
//
//            car.setUserID(Long.valueOf("201904111812239"));
//            carRepository.save(car);
//        }

    }
}
