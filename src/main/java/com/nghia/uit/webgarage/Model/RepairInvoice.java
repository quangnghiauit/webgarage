package com.nghia.uit.webgarage.Model;

import org.hibernate.exception.DataException;
import org.springframework.dao.DataAccessException;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "repairInvoice")
public class RepairInvoice {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "repairInvoiceID")
    private long repairInvoiceID;

    @Column(name = "licensePlate")
    private String licensePlate;

    @Column(name = "reqDate")
    private Date reqDate;

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

    public long getRepairInvoiceID() {
        return repairInvoiceID;
    }

    public void setRepairInvoiceID(long repairInvoiceID) {
        this.repairInvoiceID = repairInvoiceID;
    }

    public String getLicensePlate() {
        return licensePlate;
    }

    public void setLicensePlate(String licensePlate) {
        this.licensePlate = licensePlate;
    }

    public Date getReqDate() {
        return reqDate;
    }

    public void setReqDate(Date reqDate) {
        this.reqDate = reqDate;
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

    @Override
    public String toString() {
        return "RepairInvoice{" +
                "id=" + id +
                ", repairInvoiceID=" + repairInvoiceID +
                ", licensePlate='" + licensePlate + '\'' +
                ", reqDate=" + reqDate +
                ", userID=" + userID +
                ", totalMoney=" + totalMoney +
                '}';
    }
}
