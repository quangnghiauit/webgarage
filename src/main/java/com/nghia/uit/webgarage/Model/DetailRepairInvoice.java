package com.nghia.uit.webgarage.Model;

import javax.persistence.*;

@Entity
@Table(name = "detailRepairInvoice")
public class DetailRepairInvoice {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "detailReInID")
    private long detailReInID;

    @Column(name = "infoInvoice")
    private String infoInvoice;

    @Column(name = "materialID")
    private long materialID;

    @Column(name = "repNum")
    private int repNum;

    @Column(name = "totalMoney")
    private long totalMoney;


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public long getDetailReInID() {
        return detailReInID;
    }

    public void setDetailReInID(long detailReInID) {
        this.detailReInID = detailReInID;
    }

    public String getInfoInvoice() {
        return infoInvoice;
    }

    public void setInfoInvoice(String infoInvoice) {
        this.infoInvoice = infoInvoice;
    }

    public long getMaterialID() {
        return materialID;
    }

    public void setMaterialID(long materialID) {
        this.materialID = materialID;
    }

    public int getRepNum() {
        return repNum;
    }

    public void setRepNum(int repNum) {
        this.repNum = repNum;
    }

    public long getTotalMoney() {
        return totalMoney;
    }

    public void setTotalMoney(long totalMoney) {
        this.totalMoney = totalMoney;
    }

    @Override
    public String toString() {
        return "DetailRepairInvoice{" +
                "id=" + id +
                ", detailReInID=" + detailReInID +
                ", infoInvoice='" + infoInvoice + '\'' +
                ", materialID=" + materialID +
                ", repNum=" + repNum +
                ", totalMoney=" + totalMoney +
                '}';
    }
}
