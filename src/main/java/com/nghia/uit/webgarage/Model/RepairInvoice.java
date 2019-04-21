package com.nghia.uit.webgarage.Model;

import com.nghia.uit.webgarage.Service.ServiceUtils;
import org.hibernate.exception.DataException;
import org.springframework.dao.DataAccessException;

import javax.persistence.*;
import java.sql.Timestamp;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

@Entity
@Table(name = "repairInvoice")
public class RepairInvoice {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "repairInvoiceID")
    private String repairInvoiceID;

    @Column(name = "licensePlate")
    private String licensePlate;

    /*
     * 0: chua xu ly
     * 1: dang xu ly
     * 2: da xu ly
     * */
    @Column(name = "status")
    private int status;

    @Column(name = "createdDate")
    private String createdDate;

    @Column(name = "createdBy")
    private String createdBy;

    @Column(name = "regDate")
    private Date regDate;

    @Column(name = "regBy")
    private String regBy;

    @Column(name = "userID")
    private long userID;

    @Column(name = "totalMoney")
    private long totalMoney;


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getRepairInvoiceID() {
        return repairInvoiceID;
    }

    public void setRepairInvoiceID(String repairInvoiceID) {
        this.repairInvoiceID = repairInvoiceID;
    }

    public String getLicensePlate() {
        return licensePlate;
    }

    public void setLicensePlate(String licensePlate) {
        this.licensePlate = licensePlate;
    }

    public String getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(String createdDate) {
        this.createdDate = createdDate;
    }

    public String getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(String createdBy) {
        this.createdBy = createdBy;
    }

    public Date getRegDate() {
        return regDate;
    }

    public void setRegDate(Date regDate) {
        this.regDate = regDate;
    }

    public String getRegBy() {
        return regBy;
    }

    public void setRegBy(String regBy) {
        this.regBy = regBy;
    }

    public long getUserID() {
        return userID;
    }

    public void setUserID(long userID) {
        this.userID = userID;
    }

    public long getTotalMoney() {
        return totalMoney;
    }

    public void setTotalMoney(long totalMoney) {
        this.totalMoney = totalMoney;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public void doMappingRepairInvoice(String strLicensePlate, long strUserID ) {
        DateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
        Date date = new Date();
        createdDate = dateFormat.format(date); //2019/03/13 20:08:43
        String strName = dateFormat.format(date);

        StringBuilder stringBuilder = new StringBuilder();
        stringBuilder.append("NN");
        stringBuilder.append(ServiceUtils.convertData(strName));

        repairInvoiceID = String.valueOf(stringBuilder);
        licensePlate = strLicensePlate;
        userID = strUserID;
    }
}
