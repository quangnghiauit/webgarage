package com.nghia.uit.webgarage.Controller;

import com.nghia.uit.webgarage.Model.Material;
import com.nghia.uit.webgarage.Service.MaterialManagementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping(value = "/materialmanagement")
public class MaterialManagementController {

    @Autowired
    private MaterialManagementService materialManagementService;

    @GetMapping(value = "/getallmaterial")
    public @ResponseBody
    ResponseEntity<?> getAllMaterial() {
        return new ResponseEntity<>(materialManagementService.getAllMatetial(), HttpStatus.OK);
    }

    @RequestMapping(value = "/addmaterial",method = RequestMethod.POST)
    public @ResponseBody
    ResponseEntity<?> addMaterial(@RequestBody Material material) {
        return new ResponseEntity<>(materialManagementService.addMaterial(material),HttpStatus.OK);
    }
}
