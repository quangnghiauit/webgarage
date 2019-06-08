package com.nghia.uit.webgarage.Service;

import com.nghia.uit.webgarage.Bean.ResponseDTO;
import com.nghia.uit.webgarage.Model.BillDTO;
import com.nghia.uit.webgarage.Model.DetailBillDTO;
import com.nghia.uit.webgarage.Model.RepairBill;
import com.nghia.uit.webgarage.Model.RequestSearchDate;

import java.util.List;

public interface ReportManagementService {

    List<BillDTO> getAllBillHandling();

    BillDTO getDetailBill(String repairBillID);

    List<BillDTO> getAllBill();

    ResponseDTO exportBill(DetailBillDTO detailBillDTO);

    List<RepairBill> searchRevenue(RequestSearchDate requestSearchDate);
}
