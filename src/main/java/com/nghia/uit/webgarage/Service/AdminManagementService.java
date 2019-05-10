package com.nghia.uit.webgarage.Service;

import com.nghia.uit.webgarage.Bean.ResponseDTO;

public interface AdminManagementService {

    ResponseDTO addRole(String role);

    ResponseDTO deleteRole(String role);

}
