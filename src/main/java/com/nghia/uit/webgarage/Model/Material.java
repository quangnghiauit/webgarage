package com.nghia.uit.webgarage.Model;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "material")
public class Material {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "materialID")
    private long materialID;

    @Column(name = "materialName")
    private String materialName;

    @Column(name = "price")
    private long price;

    @Column(name = "mateNum")
    private int mateNum;

    @Column(name = "numInput")
    private int numInput;

    @Column(name = "reqDate")
    private Date reqDate;


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public long getMaterialID() {
        return materialID;
    }

    public void setMaterialID(long materialID) {
        this.materialID = materialID;
    }

    public String getMaterialName() {
        return materialName;
    }

    public void setMaterialName(String materialName) {
        this.materialName = materialName;
    }

    public long getPrice() {
        return price;
    }

    public void setPrice(long price) {
        this.price = price;
    }

    public int getMateNum() {
        return mateNum;
    }

    public void setMateNum(int mateNum) {
        this.mateNum = mateNum;
    }

    public int getNumInput() {
        return numInput;
    }

    public void setNumInput(int numInput) {
        this.numInput = numInput;
    }

    public Date getReqDate() {
        return reqDate;
    }

    public void setReqDate(Date reqDate) {
        this.reqDate = reqDate;
    }

    @Override
    public String toString() {
        return "Material{" +
                "id=" + id +
                ", materialID=" + materialID +
                ", materialName='" + materialName + '\'' +
                ", price=" + price +
                ", mateNum=" + mateNum +
                ", numInput=" + numInput +
                ", reqDate=" + reqDate +
                '}';
    }
}
