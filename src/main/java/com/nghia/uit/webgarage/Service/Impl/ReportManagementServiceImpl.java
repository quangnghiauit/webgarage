package com.nghia.uit.webgarage.Service.Impl;

import com.nghia.uit.webgarage.Model.*;
import com.nghia.uit.webgarage.Repository.DetailRepairBillRepository;
import com.nghia.uit.webgarage.Repository.MaterialNameRepository;
import com.nghia.uit.webgarage.Repository.RepairBillRepository;
import com.nghia.uit.webgarage.Repository.UserRepository;
import com.nghia.uit.webgarage.Service.ReportManagementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Service
public class ReportManagementServiceImpl implements ReportManagementService {

    @Autowired
    private RepairBillRepository repairBillRepository;

    @Autowired
    private DetailRepairBillRepository detailRepairBillRepository;

    @Autowired
    private MaterialNameRepository materialNameRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public List<BillDTO> getAllBillHandling() {
        try {
            List<RepairBill> repairBills = repairBillRepository.getAllByFilterStatusHandling();

            if(repairBills.isEmpty()) {
                return new ArrayList<>();
            }


            List<BillDTO> billDTOS = new ArrayList<>();
            for(RepairBill repairBill : repairBills) {
                BillDTO billDTO = new BillDTO();
                List<DetailBillDTO> detailBillDTOS = new ArrayList<>();

                if(!repairBill.getRepairBillID().isEmpty()) {
                    List<DetailRepairBill> detailRepairBills = detailRepairBillRepository.findAllByRepairBillID(repairBill.getRepairBillID());

                    if(!detailRepairBills.isEmpty()) {


                        for(DetailRepairBill detailRepairBill :detailRepairBills) {
                            DetailBillDTO detailBillDTO = new DetailBillDTO();
                            String strMaterialName = null;
                            if(!detailRepairBill.getMaterialID().isEmpty()) {
                                MaterialName materialName = materialNameRepository.findByMaterialID(detailRepairBill.getMaterialID());
                                if(!materialName.getMaterialName().isEmpty()){
                                    strMaterialName = materialName.getMaterialName();
                                }
                            }
                            detailBillDTO.doMappingDetailReport(detailRepairBill,strMaterialName);
                            detailBillDTOS.add(detailBillDTO);
                        }


                    }
                }
                Users users = userRepository.findByUserID(String.valueOf(repairBill.getUserID()));
                String strFullName = null;
                if(!Objects.isNull(users)) {
                    strFullName = users.getDisplayname();
                }
                billDTO.doMappingBill(repairBill,strFullName,detailBillDTOS);
                billDTOS.add(billDTO);
            }

            return billDTOS;


        }catch (Exception ex) {
            return new ArrayList<>();
        }
    }

    @Override
    public BillDTO getDetailBill(String repairBillID) {
        try {
            if(repairBillID.isEmpty()) {
                return null;
            }
            RepairBill repairBill = repairBillRepository.findByRepairBillID(repairBillID);

            if(Objects.isNull(repairBill)) {
                return null;
            }
            BillDTO billDTO = new BillDTO();
            List<DetailBillDTO> detailBillDTOS = new ArrayList<>();

            if(!repairBill.getRepairBillID().isEmpty()) {
                List<DetailRepairBill> detailRepairBills = detailRepairBillRepository.findAllByRepairBillID(repairBill.getRepairBillID());

                if(!detailRepairBills.isEmpty()) {


                    for(DetailRepairBill detailRepairBill :detailRepairBills) {
                        DetailBillDTO detailBillDTO = new DetailBillDTO();
                        String strMaterialName = null;
                        if(!detailRepairBill.getMaterialID().isEmpty()) {
                            MaterialName materialName = materialNameRepository.findByMaterialID(detailRepairBill.getMaterialID());
                            if(!materialName.getMaterialName().isEmpty()){
                                strMaterialName = materialName.getMaterialName();
                            }
                        }
                        detailBillDTO.doMappingDetailReport(detailRepairBill,strMaterialName);
                        detailBillDTOS.add(detailBillDTO);
                    }


                }
            }
            Users users = userRepository.findByUserID(String.valueOf(repairBill.getUserID()));
            String strFullName = null;
            if(!Objects.isNull(users)) {
                strFullName = users.getDisplayname();
            }
            billDTO.doMappingBill(repairBill,strFullName,detailBillDTOS);
            return  billDTO;
        }catch (Exception ex) {
            return null;
        }
    }

    @Override
    public List<BillDTO> getAllBill() {
        try {
            List<RepairBill> repairBills = repairBillRepository.getAllByFilter();

            if(repairBills.isEmpty()) {
                return new ArrayList<>();
            }


            List<BillDTO> billDTOS = new ArrayList<>();
            for(RepairBill repairBill : repairBills) {
                BillDTO billDTO = new BillDTO();
                List<DetailBillDTO> detailBillDTOS = new ArrayList<>();

                if(!repairBill.getRepairBillID().isEmpty()) {
                    List<DetailRepairBill> detailRepairBills = detailRepairBillRepository.findAllByRepairBillID(repairBill.getRepairBillID());

                    if(!detailRepairBills.isEmpty()) {


                        for(DetailRepairBill detailRepairBill :detailRepairBills) {
                            DetailBillDTO detailBillDTO = new DetailBillDTO();
                            String strMaterialName = null;
                            if(!detailRepairBill.getMaterialID().isEmpty()) {
                                MaterialName materialName = materialNameRepository.findByMaterialID(detailRepairBill.getMaterialID());
                                if(!materialName.getMaterialName().isEmpty()){
                                    strMaterialName = materialName.getMaterialName();
                                }
                            }
                            detailBillDTO.doMappingDetailReport(detailRepairBill,strMaterialName);
                            detailBillDTOS.add(detailBillDTO);
                        }


                    }
                }
                Users users = userRepository.findByUserID(String.valueOf(repairBill.getUserID()));
                String strFullName = null;
                if(!Objects.isNull(users)) {
                    strFullName = users.getDisplayname();
                }
                billDTO.doMappingBill(repairBill,strFullName,detailBillDTOS);
                billDTOS.add(billDTO);
            }

            return billDTOS;


        }catch (Exception ex) {
            return new ArrayList<>();
        }
    }
}
