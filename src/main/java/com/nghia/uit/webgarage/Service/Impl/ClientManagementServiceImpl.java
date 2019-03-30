package com.nghia.uit.webgarage.Service.Impl;

import com.nghia.uit.webgarage.Config.MessagesConstants;
import com.nghia.uit.webgarage.Model.Car;
import com.nghia.uit.webgarage.Model.ClientDTO;
import com.nghia.uit.webgarage.Model.Users;
import com.nghia.uit.webgarage.Repository.CarRepository;
import com.nghia.uit.webgarage.Repository.UserRepository;
import com.nghia.uit.webgarage.Service.ClientManagementService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@Service
public class ClientManagementServiceImpl implements ClientManagementService {

    private static final Logger logger = LoggerFactory.getLogger(ClientManagementServiceImpl.class);

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CarRepository carRepository;

    @Override
    public List<ClientDTO> getInfoClient() {
        List<Users> usersList = userRepository.findAllByFilter();
        List<Car> carList = new ArrayList<>();
        List<ClientDTO> clientDTOS = new ArrayList<>();
        Car car = new Car();
        for (Users users : usersList) {
            ClientDTO client = new ClientDTO();
            carList = carRepository.findCarByUserID(users.getUserID());
            if (carList.size() == 0) {
                client.doMappingClientDTO(users, car);
                clientDTOS.add(client);
            } else {
                for (Car car1 : carList) {
                    client.doMappingClientDTO(users, car1);
                    clientDTOS.add(client);
                }
            }
        }
        return clientDTOS;
    }

    @Override
    public Users addClient(ClientDTO users) {
        Users entity = new Users();
        entity.doMappingClientDTO(users);
        userRepository.save(entity);
        return entity;
    }

    @Override
    public Users updateClient(ClientDTO clientDTO, String userID) {
        Users user = userRepository.findByUserID(userID);
        user.doMappingClientDTO(clientDTO);
        userRepository.save(user);
        return user;
    }

    @Override
    public String deleteClient(String userID) {
        try {
            Users user = userRepository.findByUserID(userID);
            userRepository.delete(user);
            return MessagesConstants.DONE_DELETEREQUEST;
        } catch (Exception ex) {
            return ex.getMessage();
        }
    }


}
