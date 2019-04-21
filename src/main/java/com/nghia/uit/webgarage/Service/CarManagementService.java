package com.nghia.uit.webgarage.Service;

import com.nghia.uit.webgarage.Bean.ResponseDTO;
import com.nghia.uit.webgarage.Model.Car;
import com.nghia.uit.webgarage.Model.ClientDTO;

import java.util.List;

public interface CarManagementService {

    List<ClientDTO> getDataCar();

    ResponseDTO addCar(Car car);

    ResponseDTO processStatusCar(String id);

    ResponseDTO processDoneStatusCar(String id);

    ResponseDTO updateCar(ClientDTO clientDTO,String licensePlate);

    ResponseDTO deleteCar(String licensePlate);
}
