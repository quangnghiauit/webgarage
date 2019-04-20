package com.nghia.uit.webgarage.Model;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
@Table(name = "detailRepairInvoice")
public class DetailRepairInvoice {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "repairInvoiceID")
    private String repairInvoiceID;

    @Column(name = "infoInvoice")
    private String infoInvoice;

    @Column(name = "createdDate")
    private String createdDate;

    @Column(name = "createdBy")
    private String createdBy;

    @Column(name = "materialID")
    private long materialID;

    @Column(name = "reqNum")
    private int reqNum;


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

    public String getInfoInvoice() {
        return infoInvoice;
    }

    public void setInfoInvoice(String infoInvoice) {
        this.infoInvoice = infoInvoice;
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

    public long getMaterialID() {
        return materialID;
    }

    public void setMaterialID(long materialID) {
        this.materialID = materialID;
    }

    public int getReqNum() {
        return reqNum;
    }

    public void setReqNum(int reqNum) {
        this.reqNum = reqNum;
    }

    public void doMappingDetail(DetailRepairInvoice detailRepairInvoice) {
        this.infoInvoice = detailRepairInvoice.getInfoInvoice();
        this.materialID = detailRepairInvoice.getMaterialID();
        this.reqNum = detailRepairInvoice.getReqNum();
    }

}
