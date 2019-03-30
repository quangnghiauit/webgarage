package com.nghia.uit.webgarage.Service;

import com.nghia.uit.webgarage.Model.ClientDTO;
import com.nghia.uit.webgarage.Model.Users;

import java.util.List;

public interface ClientManagementService {
    List<ClientDTO> getInfoClient();

    Users addClient(Users users);
}
