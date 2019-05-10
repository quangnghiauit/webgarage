package com.nghia.uit.webgarage.Service;

import com.nghia.uit.webgarage.Bean.ResponseDTO;
import com.nghia.uit.webgarage.Model.AdminUsersDTO;

import java.util.List;

public interface AdminManagementService {

    ResponseDTO addRole(String role);

    ResponseDTO deleteRole(String role);

    List<AdminUsersDTO> getUsers();

    ResponseDTO addUsers(AdminUsersDTO adminUsersDTO,String currentUser);

    ResponseDTO updateUsers(AdminUsersDTO adminUsersDTO,String userID,String currentUser);

    ResponseDTO deleteUsers(String userID);

}
