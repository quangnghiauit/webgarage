package com.nghia.uit.webgarage.Service;

import com.nghia.uit.webgarage.Bean.ResponseDTO;
import com.nghia.uit.webgarage.Model.ClientDTO;

import java.util.List;

public interface ClientManagementService {
    List<ClientDTO> getAllClient();

    List<ClientDTO> getInfoUser(String userID);

    ResponseDTO addClient(ClientDTO users);

    ResponseDTO updateClient(ClientDTO clientDTO, String userID);

    ResponseDTO deleteClient(String userID);
}
