package com.nghia.uit.webgarage.Controller;

import com.nghia.uit.webgarage.Service.ReportManagementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

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
}
