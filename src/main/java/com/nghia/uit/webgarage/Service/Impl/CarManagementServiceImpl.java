package com.nghia.uit.webgarage.Service.Impl;

import com.nghia.uit.webgarage.Bean.ResponseDTO;
import com.nghia.uit.webgarage.Message.Constants;
import com.nghia.uit.webgarage.Model.Car;
import com.nghia.uit.webgarage.Model.ClientDTO;
import com.nghia.uit.webgarage.Model.RepairInvoice;
import com.nghia.uit.webgarage.Model.Users;
import com.nghia.uit.webgarage.Repository.CarRepository;
import com.nghia.uit.webgarage.Repository.RepairInvoiceRepository;
import com.nghia.uit.webgarage.Repository.UserRepository;
import com.nghia.uit.webgarage.Service.CarManagementService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CarManagementServiceImpl implements CarManagementService {

    public final static Logger logger = LoggerFactory.getLogger(CarManagementServiceImpl.class);

    @Autowired
    private CarRepository carRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RepairInvoiceRepository repairInvoiceRepository;


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
    public ResponseDTO addCar(Car car) {
        try {
            long userID = car.getUserID();
            if(String.valueOf(userID)!=null) {
                car.setStatus(Constants.INIT_PROCESS);
                carRepository.save(car);
                return new ResponseDTO().success(Constants.DONE_ADDREQUESTCAR);
            }

        } catch (Exception ex) {
            logger.error(ex.getMessage());
            return new ResponseDTO().fail(ex.getMessage());
        }
        return null;
    }

    @Override
    public ResponseDTO processStatusCar(String id) {
        try {

            Car car = carRepository.findCarById(id);
            car.setStatus(Constants.PROCESSING);
            carRepository.save(car);
            RepairInvoice repairInvoice = new RepairInvoice();
            repairInvoice.doMappingRepairInvoice(car.getLicensePlate(),car.getUserID());
            repairInvoice.setStatus(Constants.PROCESSING);
            repairInvoiceRepository.save(repairInvoice);
            return new ResponseDTO().success(Constants.PROCESSING_MESSAGE);
        } catch (Exception ex) {
            logger.error(ex.getMessage());
            return new ResponseDTO().fail(ex.getMessage());
        }
    }

    @Override
    public ResponseDTO processDoneStatusCar(String id) {
        try {

            Car car = carRepository.findCarById(id);
            car.setStatus(Constants.DONE_PROCESS);
            carRepository.save(car);
            return new ResponseDTO().success(Constants.DONE_PROCESSMESSAGE);
        } catch (Exception ex) {
            logger.error(ex.getMessage());
            return new ResponseDTO().fail(ex.getMessage());
        }
    }

    @Override
    public ResponseDTO updateCar(ClientDTO clientDTO, String licensePlate) {
        try {
            Car car = carRepository.findCarByLicensePlate(licensePlate);
            Users user = userRepository.findByUserID(String.valueOf(car.getUserID()));
            //saveCarMapping(clientDTO, user, car);
            return new ResponseDTO().success(Constants.DONE_UPDATEREQUESTCAR);
        } catch (Exception ex) {
            logger.error(ex.getMessage());
            return new ResponseDTO().fail(ex.getMessage());
        }

    }

    @Override
    public ResponseDTO deleteCar(String licensePlate) {
        try {
            Car car = carRepository.findCarByLicensePlate(licensePlate);
            carRepository.delete(car);
            return new ResponseDTO().success(Constants.DONE_DELETEREQUESTCAR);
        } catch (Exception ex) {
            return new ResponseDTO().fail(ex.getMessage());
        }
    }

//    public ClientDTO saveCarMapping(ClientDTO clientDTO, Users users, Car car) {
//        ClientDTO entity = new ClientDTO();
//        users.doMappingClientDTO(clientDTO);
//        car.doMappingCar(clientDTO);
//        userRepository.save(users);
//        carRepository.save(car);
//        entity.doMappingClientDTO(users, car);
//        return entity;
//    }
}
