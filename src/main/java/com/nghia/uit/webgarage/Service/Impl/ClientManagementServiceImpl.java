package com.nghia.uit.webgarage.Service.Impl;

import com.nghia.uit.webgarage.Bean.ResponseDTO;
import com.nghia.uit.webgarage.Message.Constants;
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

    public static final Logger logger = LoggerFactory.getLogger(ClientManagementServiceImpl.class);

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CarRepository carRepository;

    @Override
    public List<ClientDTO> getAllClient() {
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
    public List<ClientDTO> getInfoUser(String userID) {
        Users users = userRepository.findByUserID(userID);
        List<Car> carList = new ArrayList<>();
        List<ClientDTO> clientDTOS = new ArrayList<>();
        Car car = new Car();
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
        return clientDTOS;
    }

    @Override
    public ResponseDTO addClient(ClientDTO users) {
        try {
            String userName=users.getUserName();
            if(userName!=null) {
                Users users1 = userRepository.findByUserName(userName);
                if(users1!=null) {
                    return new ResponseDTO().fail(Constants.FAIL_EXISTSUSERS);
                }
                Users entity = new Users();
                entity.doMappingClientDTO(users);
                userRepository.save(entity);
                return new ResponseDTO().success(Constants.DONE_ADDREQUESTUSERS);
            }

        } catch (Exception ex) {
            logger.error(ex.getMessage());
            return new ResponseDTO().fail(ex.getMessage());
        }
        return null;
    }

    @Override
    public ResponseDTO updateClient(ClientDTO clientDTO, String userID) {
        try {
            Users user = userRepository.findByUserID(userID);
            user.doMappingClientDTO(clientDTO);
            userRepository.save(user);
            return new ResponseDTO().success(Constants.DONE_UPDATEREQUESTUSERS);
        } catch (Exception ex) {
            logger.error(ex.getMessage());
            return  new ResponseDTO().fail(ex.getMessage());
        }
    }

    @Override
    public ResponseDTO deleteClient(String userID) {
        try {
            Users user = userRepository.findByUserID(userID);
            userRepository.delete(user);
            return  new ResponseDTO().success(Constants.DONE_DELETEREQUESTUSERS);
        } catch (Exception ex) {
            return new ResponseDTO().fail(ex.getMessage());
        }
    }


}
