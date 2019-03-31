package com.nghia.uit.webgarage.Service;

import com.nghia.uit.webgarage.Model.ClientDTO;

import java.util.List;

public interface CarService {

    List<ClientDTO> getDataCar();

    ClientDTO addCar(ClientDTO clientDTO);

    ClientDTO updateCar(ClientDTO clientDTO,String licensePlate);

    String deleteCar(String licensePlate);
}
