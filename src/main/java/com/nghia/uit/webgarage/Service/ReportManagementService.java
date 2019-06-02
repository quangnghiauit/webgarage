package com.nghia.uit.webgarage.Service;

import com.nghia.uit.webgarage.Model.BillDTO;

import java.util.List;

public interface ReportManagementService {

    List<BillDTO> getAllBillHandling();

    BillDTO getDetailBill(String repairBillID);

    List<BillDTO> getAllBill();
}
