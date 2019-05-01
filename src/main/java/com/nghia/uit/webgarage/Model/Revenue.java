package com.nghia.uit.webgarage.Model;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "revenue")
public class Revenue {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "revenueID")
    private long revenueID;

    @Column(name = "reqDate")
    private Date reqDate;

    @Column(name = "licensePlate")
    private String licensePlate;

    @Column(name = "reqNumber")
    private int reqNumber;

    @Column(name = "totalMoney")
    private long totalMoney;

    @Column(name = "repairBillID")
    private String repairBillID;


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public long getRevenueID() {
        return revenueID;
    }

    public void setRevenueID(long revenueID) {
        this.revenueID = revenueID;
    }

    public Date getReqDate() {
        return reqDate;
    }

    public void setReqDate(Date reqDate) {
        this.reqDate = reqDate;
    }

    public String getLicensePlate() {
        return licensePlate;
    }

    public void setLicensePlate(String licensePlate) {
        this.licensePlate = licensePlate;
    }

    public int getReqNumber() {
        return reqNumber;
    }

    public void setReqNumber(int reqNumber) {
        this.reqNumber = reqNumber;
    }

    public long getTotalMoney() {
        return totalMoney;
    }

    public void setTotalMoney(long totalMoney) {
        this.totalMoney = totalMoney;
    }

    public String getRepairBillID() {
        return repairBillID;
    }

    public void setRepairBillID(String repairBillID) {
        this.repairBillID = repairBillID;
    }
}
