package com.nghia.uit.webgarage.Model;

import org.hibernate.exception.DataException;
import org.springframework.dao.DataAccessException;

import javax.persistence.*;
import java.sql.Timestamp;
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

    @Column(name = "createdDate")
    private Timestamp createdDate;

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

    public Timestamp getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Timestamp createdDate) {
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
}
