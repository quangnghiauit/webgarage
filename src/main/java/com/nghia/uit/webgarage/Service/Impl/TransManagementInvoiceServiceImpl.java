package com.nghia.uit.webgarage.Service.Impl;

import com.nghia.uit.webgarage.Bean.ResponseDTO;
import com.nghia.uit.webgarage.Message.MessagesConstants;
import com.nghia.uit.webgarage.Model.DetailRepairInvoice;
import com.nghia.uit.webgarage.Model.Users;
import com.nghia.uit.webgarage.Repository.DetailRepairInvoiceRepository;
import com.nghia.uit.webgarage.Service.TransManagementInvoiceService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class TransManagementInvoiceServiceImpl implements TransManagementInvoiceService {

    public static final Logger logger = LoggerFactory.getLogger(ClientManagementServiceImpl.class);

    @Autowired
    private DetailRepairInvoiceRepository detailRepairInvoiceRepository;

    @Override
    public List<DetailRepairInvoice> getDetail(String repairInvoiceID) {
        try {
            List<DetailRepairInvoice> list = detailRepairInvoiceRepository.findAllByRepairInvoiceID(repairInvoiceID);
            if(list.size()==0) {
                return new ArrayList<>();
            } else {
                return list;
            }
        }catch (Exception ex) {
            logger.error(ex.getMessage());
            return new ArrayList<>();
        }
    }

    @Override
    public ResponseDTO addMaterial(DetailRepairInvoice detailRepairInvoice,String repairInvoiceID) {
        try {
            DetailRepairInvoice detailRepairInvoice1 = new DetailRepairInvoice();
            detailRepairInvoice1.setRepairInvoiceID(repairInvoiceID);
            DateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
            Date date = new Date();
            detailRepairInvoice1.setCreatedDate(dateFormat.format(date));
            detailRepairInvoice1.doMappingDetail(detailRepairInvoice);
            detailRepairInvoiceRepository.save(detailRepairInvoice1);
            return new ResponseDTO().success(MessagesConstants.DONE_ADDMATERIALSERVICE);
        } catch (Exception ex) {
            logger.error(ex.getMessage());
            return new ResponseDTO().fail(ex.getMessage());
        }
    }

    @Override
    public ResponseDTO updateMaterial(DetailRepairInvoice detailRepairInvoice, String id) {
        try {
            DetailRepairInvoice detailRepairInvoice1 = detailRepairInvoiceRepository.findById(id);
            detailRepairInvoice1.doMappingDetail(detailRepairInvoice);
            detailRepairInvoiceRepository.save(detailRepairInvoice1);
            return new ResponseDTO().success(MessagesConstants.DONE_UPDATEMATERIALSERVICE);
        } catch (Exception ex) {
            logger.error(ex.getMessage());
            return new ResponseDTO().fail(ex.getMessage());
        }
    }

    @Override
    public ResponseDTO deleteMaterial(String id) {
        try {
            DetailRepairInvoice detailRepairInvoice1 = detailRepairInvoiceRepository.findById(id);
            detailRepairInvoiceRepository.delete(detailRepairInvoice1);
            return new ResponseDTO().success(MessagesConstants.DONE_DELETEMATERIALSERVICE);
        } catch (Exception ex) {
            logger.error(ex.getMessage());
            return new ResponseDTO().fail(ex.getMessage());
        }
    }
}
