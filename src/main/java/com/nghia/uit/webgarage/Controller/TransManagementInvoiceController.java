package com.nghia.uit.webgarage.Controller;

import com.nghia.uit.webgarage.Model.ClientDTO;
import com.nghia.uit.webgarage.Model.DetailRepairInvoice;
import com.nghia.uit.webgarage.Service.ClientManagementService;
import com.nghia.uit.webgarage.Service.TransManagementInvoiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping(value = "/transmanagementinvoice")
public class TransManagementInvoiceController {


    @Autowired
    private TransManagementInvoiceService transManagementInvoiceService;

    @GetMapping(value = "/getdetail")
    public @ResponseBody
    ResponseEntity<?> getdetail(@RequestParam String repairInvoiceID) {
        return new ResponseEntity<>(transManagementInvoiceService.getDetail(repairInvoiceID), HttpStatus.OK);
    }

    @RequestMapping(value = "/addmaterial", method = RequestMethod.POST)
    public @ResponseBody
    ResponseEntity<?> addmaterial(@RequestBody DetailRepairInvoice detailRepairInvoice, @RequestParam String repairInvoiceID) {
        return new ResponseEntity<>(transManagementInvoiceService.addMaterial(detailRepairInvoice,repairInvoiceID), HttpStatus.OK);
    }

    @RequestMapping(value = "/updatematerial", method = RequestMethod.POST)
    public @ResponseBody
    ResponseEntity<?> updatematerial(@RequestBody DetailRepairInvoice detailRepairInvoice, @RequestParam String id) {
        return new ResponseEntity<>(transManagementInvoiceService.updateMaterial(detailRepairInvoice,id), HttpStatus.OK);
    }

    @RequestMapping(value = "/deletematerial", method = RequestMethod.DELETE)
    public ResponseEntity<?> deletematerial(@RequestParam String id) {
        return new ResponseEntity<>(transManagementInvoiceService.deleteMaterial(id), HttpStatus.OK);
    }
}
