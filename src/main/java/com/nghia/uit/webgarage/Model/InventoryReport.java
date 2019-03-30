package com.nghia.uit.webgarage.Model;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "inventoryReport")
public class InventoryReport {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "invReportID")
    private long invReportID;

    @Column(name = "reqDate")
    private Date reqDate;

    @Column(name = "materialID")
    private long materialID;

    @Column(name = "initInv")
    private int initInv;

    @Column(name = "invInput")
    private int invInput;

    @Column(name = "lastInv")
    private int lastInv;


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public long getInvReportID() {
        return invReportID;
    }

    public void setInvReportID(long invReportID) {
        this.invReportID = invReportID;
    }

    public Date getReqDate() {
        return reqDate;
    }

    public void setReqDate(Date reqDate) {
        this.reqDate = reqDate;
    }

    public long getMaterialID() {
        return materialID;
    }

    public void setMaterialID(long materialID) {
        this.materialID = materialID;
    }

    public int getInitInv() {
        return initInv;
    }

    public void setInitInv(int initInv) {
        this.initInv = initInv;
    }

    public int getInvInput() {
        return invInput;
    }

    public void setInvInput(int invInput) {
        this.invInput = invInput;
    }

    public int getLastInv() {
        return lastInv;
    }

    public void setLastInv(int lastInv) {
        this.lastInv = lastInv;
    }

    @Override
    public String toString() {
        return "InventoryReport{" +
                "id=" + id +
                ", invReportID=" + invReportID +
                ", reqDate=" + reqDate +
                ", materialID=" + materialID +
                ", initInv=" + initInv +
                ", invInput=" + invInput +
                ", lastInv=" + lastInv +
                '}';
    }
}
