package com.nghia.uit.webgarage.Service;

import com.nghia.uit.webgarage.Model.ClientDTO;
import com.nghia.uit.webgarage.Model.Users;

import java.util.List;

public interface ClientManagementService {
    List<ClientDTO> getInfoClient();

    Users addClient(ClientDTO users);

    Users updateClient(ClientDTO clientDTO,String userID);

    String deleteClient(String userID);
}
