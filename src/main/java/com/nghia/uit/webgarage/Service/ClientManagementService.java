package com.nghia.uit.webgarage.Service;

import com.nghia.uit.webgarage.Bean.ResponseDTO;
import com.nghia.uit.webgarage.Model.ClientDTO;
import com.nghia.uit.webgarage.Model.Users;

import java.util.List;

public interface ClientManagementService {
    List<ClientDTO> getAllClient();

    Users getInfoUser(String userID);

    ResponseDTO addClient(ClientDTO users);

    ResponseDTO updateClient(ClientDTO clientDTO, String userID);

    ResponseDTO deleteClient(String userID);
}
