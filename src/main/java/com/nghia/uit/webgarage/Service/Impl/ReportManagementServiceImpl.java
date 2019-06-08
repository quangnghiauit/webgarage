package com.nghia.uit.webgarage.Service.Impl;

import com.nghia.uit.webgarage.Bean.ResponseDTO;
import com.nghia.uit.webgarage.Model.*;
import com.nghia.uit.webgarage.Repository.*;
import com.nghia.uit.webgarage.Service.ReportManagementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Objects;

@Service
public class ReportManagementServiceImpl implements ReportManagementService {

    @Autowired
    private RepairBillRepository repairBillRepository;

    @Autowired
    private DetailRepairBillRepository detailRepairBillRepository;

    @Autowired
    private MaterialReportRepository materialReportRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CarRepository carRepository;

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
                                MaterialReport materialReport = materialReportRepository.findByMaterialID(detailRepairBill.getMaterialID());
                                if(!materialReport.getMaterialName().isEmpty()){
                                    strMaterialName = materialReport.getMaterialName();
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
                            MaterialReport materialReport = materialReportRepository.findByMaterialID(detailRepairBill.getMaterialID());
                            if(!materialReport.getMaterialName().isEmpty()){
                                strMaterialName = materialReport.getMaterialName();
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
                                MaterialReport materialReport = materialReportRepository.findByMaterialID(detailRepairBill.getMaterialID());
                                if(!materialReport.getMaterialName().isEmpty()){
                                    strMaterialName = materialReport.getMaterialName();
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
    public ResponseDTO exportBill(DetailBillDTO detailBillDTO) {
        try {
            long totalMoney = detailBillDTO.getTotalMoney();
            String repairBillID = detailBillDTO.getRepairBillID();

            RepairBill repairBill = repairBillRepository.findByRepairBillID(repairBillID);

            if(Objects.isNull(repairBill)) {
                return new ResponseDTO().fail("Xuất hóa đơn không thành công");
            }
            repairBill.setStatus(2);

            if(totalMoney >= 0) {
                repairBill.setTotalMoney(totalMoney);
            }

            repairBill.setExportDate(convertDate());

            Car car = carRepository.findCarByLicensePlate(repairBill.getLicensePlate());
            if(Objects.isNull(car))  {
                return new ResponseDTO().fail("Xuất hóa đơn không thành công");
            }

            car.setStatus(2);
            carRepository.save(car);


            repairBillRepository.save(repairBill);
            return new ResponseDTO().success("Xuất hóa đơn thành công");
        }catch (Exception ex) {
            return new ResponseDTO().fail("Xuất hóa đơn không thành công");
        }
    }

    @Override
    public List<RepairBill> searchRevenue(RequestSearchDate requestSearchDate) {
        try {
            String startDate = requestSearchDate.getStartDate();
            String endDate = requestSearchDate.getEndDate();

            List<RepairBill> repairBills = repairBillRepository.searchRevenueByDate(startDate,endDate);

            if(repairBills.isEmpty()) {
                return new ArrayList<>();
            }
            return repairBills;

        } catch (Exception ex) {
            return new ArrayList<>();
        }
    }

    private String convertDate() {
        DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        Date date = new Date();
        return dateFormat.format(date); //2019/03/13 20:08:43
    }
}
