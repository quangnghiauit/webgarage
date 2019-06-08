package com.nghia.uit.webgarage.Controller;

import com.nghia.uit.webgarage.Model.DetailBillDTO;
import com.nghia.uit.webgarage.Model.RequestSearchDate;
import com.nghia.uit.webgarage.Service.ReportManagementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping(value = "/api/report-management")
public class ReportManagementController {

    @Autowired
    private ReportManagementService reportManagementService;

    @GetMapping(value = "/get-all-bill-handling")
    public ResponseEntity<?> getAllBillHandling() {
        return new ResponseEntity<>(reportManagementService.getAllBillHandling(), HttpStatus.OK);
    }

    @GetMapping(value = "/get-detail-bill")
    public ResponseEntity<?> getAllBill(@RequestParam String repairBillID) {
        return new ResponseEntity<>(reportManagementService.getDetailBill(repairBillID), HttpStatus.OK);
    }

    @GetMapping(value = "/get-all-bill")
    public ResponseEntity<?> getAllBill() {
        return new ResponseEntity<>(reportManagementService.getAllBill(), HttpStatus.OK);
    }

    @RequestMapping(value = "/export-bill",method = RequestMethod.POST)
    public ResponseEntity<?> exportBill(@RequestBody DetailBillDTO detailBillDTO) {
        return new ResponseEntity<>(reportManagementService.exportBill(detailBillDTO),HttpStatus.OK);
    }

    @RequestMapping(value = "/search-revenue",method = RequestMethod.GET)
    public ResponseEntity<?> searchRevenue(@RequestBody RequestSearchDate requestSearchDate) {
        return new ResponseEntity<>(reportManagementService.searchRevenue(requestSearchDate),HttpStatus.OK);
    }

    @RequestMapping(value = "/search-inventory",method = RequestMethod.GET)
    public ResponseEntity<?> searchInventory(@RequestBody RequestSearchDate requestSearchDate) {
        return new ResponseEntity<>(reportManagementService.searchInventory(requestSearchDate),HttpStatus.OK);
    }

}
