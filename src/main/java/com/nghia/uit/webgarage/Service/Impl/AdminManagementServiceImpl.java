package com.nghia.uit.webgarage.Service.Impl;

import com.nghia.uit.webgarage.Bean.ResponseDTO;
import com.nghia.uit.webgarage.Model.Roles;
import com.nghia.uit.webgarage.Repository.RoleRepository;
import com.nghia.uit.webgarage.Service.AdminManagementService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminManagementServiceImpl implements AdminManagementService {

    public static final Logger logger = LoggerFactory.getLogger(AdminManagementServiceImpl.class);

    @Autowired
    private RoleRepository roleRepository;
    @Override
    public ResponseDTO addRole(String role) {
        try {
            Roles roles = new Roles(role);
            roleRepository.save(roles);
            return new ResponseDTO().success("Thêm thành công");

        }catch (Exception ex) {
            logger.error(ex.getMessage());
            return new ResponseDTO().fail("Thêm không thành công");
        }
    }


    @Override
    public ResponseDTO deleteRole(String role) {
        try {
            Roles roles = new Roles();
            roles= roleRepository.findByRole(role);
            if(roles==null) {
                return new ResponseDTO().fail("Xóa không thành công");
            }
            roleRepository.delete(roles);
            return new ResponseDTO().success("Xóa thành công");

        }catch (Exception ex) {
            logger.error(ex.getMessage());
            return new ResponseDTO().fail("Xóa không thành công");
        }
    }
}
