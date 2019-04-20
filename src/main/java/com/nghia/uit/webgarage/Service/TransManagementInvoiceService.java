package com.nghia.uit.webgarage.Service;

import com.nghia.uit.webgarage.Bean.ResponseDTO;
import com.nghia.uit.webgarage.Model.DetailRepairInvoice;

import java.util.List;

public interface TransManagementInvoiceService {

    List<DetailRepairInvoice> getDetail(String repairInvoiceID);

    ResponseDTO addMaterial(DetailRepairInvoice detailRepairInvoice,String repairInvoiceID);

    ResponseDTO updateMaterial(DetailRepairInvoice detailRepairInvoice,String id);

    ResponseDTO deleteMaterial(String id);
}
