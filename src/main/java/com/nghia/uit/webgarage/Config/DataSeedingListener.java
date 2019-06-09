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

import java.security.Timestamp;
import java.sql.Date;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
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
            admin.setDisplayname("Nguyễn Quang Nghĩa");
            admin.setPassword(passwordEncoder.encode("123456"));
            admin.setCreatedBy("quangnghiauit");
            DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            java.util.Date date = new java.util.Date();
            admin.setCreatedDate(dateFormat.format(date));
            admin.setPhoneNumber("0976565715");
            admin.setAddress("Quảng Bình");
            admin.setEmail("quangnghiauit@gmail.com");

            userRole.setUsername("quangnghiauit");
            userRole.setRole("ADMIN");
            userRepository.save(admin);
            userRoleRepository.save(userRole);
        }

        //RECEPTIONIST
        if (userRepository.findByUserName("MinhThu") == null&&userRoleRepository.findByUserName("MinhThu").size()==0) {
            Users admin = new Users();
            UserRole userRole = new UserRole();
            admin.setUserID(Long.valueOf("201904111812239"));
            admin.setUserName("MinhThu");
            admin.setDisplayname("Trần Ngọc Minh Thư");
            admin.setPassword(passwordEncoder.encode("123456"));
            DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            java.util.Date date = new java.util.Date();
            admin.setCreatedDate(dateFormat.format(date));
            admin.setCreatedBy("quangnghiauit");
            admin.setPhoneNumber("0862834533");
            admin.setAddress("TP HCM");
            admin.setEmail("MinhThu@gmail.com");

            userRole.setUsername("MinhThu");
            userRole.setRole("RECEPTIONIST");
            userRepository.save(admin);
            userRoleRepository.save(userRole);
        }

        //ACCOUNTANT
        if (userRepository.findByUserName("NgocMinh") == null&&userRoleRepository.findByUserName("NgocMinh").size()==0) {
            Users admin = new Users();
            UserRole userRole = new UserRole();
            admin.setUserID(Long.valueOf("20190609125426"));
            admin.setUserName("NgocMinh");
            admin.setDisplayname("Trương Ngọc Minh");
            admin.setPassword(passwordEncoder.encode("123456"));
            DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            java.util.Date date = new java.util.Date();
            admin.setCreatedDate(dateFormat.format(date));
            admin.setCreatedBy("quangnghiauit");
            admin.setPhoneNumber("0865456043");
            admin.setAddress("TP HCM");
            admin.setEmail("NgocMinh@gmail.com");

            userRole.setUsername("NgocMinh");
            userRole.setRole("ACCOUNTANT");
            userRepository.save(admin);
            userRoleRepository.save(userRole);
        }

        //MECHANIC
        if (userRepository.findByUserName("TinhTien") == null&&userRoleRepository.findByUserName("TinhTien").size()==0) {
            Users admin = new Users();
            UserRole userRole = new UserRole();
            admin.setUserID(Long.valueOf("20190609165139"));
            admin.setUserName("TinhTien");
            admin.setDisplayname("Đỗ Tịnh Tiến");
            admin.setPassword(passwordEncoder.encode("123456"));
            DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            java.util.Date date = new java.util.Date();
            admin.setCreatedDate(dateFormat.format(date));
            admin.setCreatedBy("quangnghiauit");
            admin.setPhoneNumber("0375876196");
            admin.setAddress("Hà Nội");
            admin.setEmail("TinhTien@gmail.com");

            userRole.setUsername("TinhTien");
            userRole.setRole("MECHANIC");
            userRepository.save(admin);
            userRoleRepository.save(userRole);
        }

        //CLIENT
        if (userRepository.findByUserName("PhuongLinh") == null&&userRoleRepository.findByUserName("PhuongLinh").size()==0) {
            Users admin = new Users();
            UserRole userRole = new UserRole();
            admin.setUserID(Long.valueOf("20190609265149"));
            admin.setUserName("PhuongLinh");
            admin.setDisplayname("Huỳnh Phương Linh");
            admin.setPassword(passwordEncoder.encode("123456"));
            DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            java.util.Date date = new java.util.Date();
            admin.setCreatedDate(dateFormat.format(date));
            admin.setCreatedBy("quangnghiauit");
            admin.setPhoneNumber("0868089210");
            admin.setAddress("Hà Nội");
            admin.setEmail("PhuongLinh@gmail.com");

            userRole.setUsername("PhuongLinh");
            userRole.setRole("CLIENT");
            userRepository.save(admin);
            userRoleRepository.save(userRole);
        }



    }
}
