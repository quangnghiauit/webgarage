package com.nghia.uit.webgarage.Controller;

import com.nghia.uit.webgarage.Model.ClientDTO;
import com.nghia.uit.webgarage.Service.CarManagementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping(value = "/carmanagement")
public class CarManagementController {

    @Autowired
    private CarManagementService carManagementService;

    @GetMapping(value = "/getcar")
    public @ResponseBody
    ResponseEntity<?> getAllCar() {
        return new ResponseEntity<>(carManagementService.getDataCar(), HttpStatus.OK);
    }

    @RequestMapping(value = "/addcar",method = RequestMethod.POST)
    public @ResponseBody
    ResponseEntity<?> addCar(@RequestBody ClientDTO clientDTO) {
        return new ResponseEntity<>(carManagementService.addCar(clientDTO),HttpStatus.OK);
    }

    @RequestMapping(value = "/updatecar",method = RequestMethod.POST)
    public @ResponseBody
    ResponseEntity<?> updateCar(@RequestBody ClientDTO clientDTO,@RequestParam String licensePlate) {
        return new ResponseEntity<>(carManagementService.updateCar(clientDTO,licensePlate),HttpStatus.OK);
    }

    @RequestMapping(value = "/deletecar", method = RequestMethod.DELETE)
    public ResponseEntity<?> deleteCar(@RequestParam String licensePlate) {
        return new ResponseEntity<>(carManagementService.deleteCar(licensePlate), HttpStatus.OK);
    }

}
