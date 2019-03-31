package com.nghia.uit.webgarage.Service.Impl;

import com.nghia.uit.webgarage.Config.MessagesConstants;
import com.nghia.uit.webgarage.Model.Car;
import com.nghia.uit.webgarage.Model.ClientDTO;
import com.nghia.uit.webgarage.Model.Users;
import com.nghia.uit.webgarage.Repository.CarRepository;
import com.nghia.uit.webgarage.Repository.UserRepository;
import com.nghia.uit.webgarage.Service.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CarServiceImpl implements CarService {

    @Autowired
    private CarRepository carRepository;

    @Autowired
    private UserRepository userRepository;


    @Override
    public List<ClientDTO> getDataCar() {
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
    public ClientDTO addCar(ClientDTO clientDTO) {
        Users users = new Users();
        Car car = new Car();
        return saveCarMapping(clientDTO, users, car);
    }

    @Override
    public ClientDTO updateCar(ClientDTO clientDTO, String licensePlate) {
        Car car = carRepository.findCarByLicensePlate(licensePlate);
        Users user = userRepository.findByUserID(String.valueOf(car.getUserID()));
        return saveCarMapping(clientDTO, user, car);
    }

    @Override
    public String deleteCar(String licensePlate) {
        try {
            Car car = carRepository.findCarByLicensePlate(licensePlate);
            Users user = userRepository.findByUserID(String.valueOf(car.getUserID()));
            carRepository.delete(car);
            userRepository.delete(user);
            return MessagesConstants.DONE_DELETEREQUEST;
        } catch (Exception ex) {
            return ex.getMessage();
        }
    }

    public ClientDTO saveCarMapping(ClientDTO clientDTO, Users users, Car car) {
        ClientDTO entity = new ClientDTO();
        users.doMappingClientDTO(clientDTO);
        car.doMappingCar(clientDTO);
        userRepository.save(users);
        carRepository.save(car);
        entity.doMappingClientDTO(users, car);
        return entity;
    }
}
