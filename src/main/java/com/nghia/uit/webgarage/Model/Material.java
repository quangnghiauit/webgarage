package com.nghia.uit.webgarage.Model;

import javax.persistence.*;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;

@Entity
@Table(name = "material")
public class Material {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "materialID")
    private String materialID;

    @Column(name = "materialName")
    private String materialName;

    @Column(name = "price")
    private long price;

    @Column(name = "mateNum")
    private int mateNum;

    @Column(name = "numInput")
    private int numInput;

    @Column(name = "reqDate")
    private String reqDate;


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getMaterialID() {
        return materialID;
    }

    public void setMaterialID(String materialID) {
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

    public String getReqDate() {
        return reqDate;
    }

    public void setReqDate(String reqDate) {
        this.reqDate = reqDate;
    }

    @Override
    public String toString() {
        return "Material{" +
                "id=" + id +
                ", materialID='" + materialID + '\'' +
                ", materialName='" + materialName + '\'' +
                ", price=" + price +
                ", mateNum=" + mateNum +
                ", numInput=" + numInput +
                ", reqDate='" + reqDate + '\'' +
                '}';
    }

    public void doMappingMaterial(Material material,String strID) {
        DateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
        Date date = new Date();
        reqDate = dateFormat.format(date); //2019/03/13 20:08:43
        String strName = dateFormat.format(date);

        StringBuilder stringBuilder = new StringBuilder();
        String strNameSplit= material.getMaterialName();
        String[] parts = strNameSplit.split("\\s+");

        if (parts.length != 1) {
            String firstStr = parts[0].substring(0,1).toUpperCase();
            String lastStr = parts[1].substring(0,1).toUpperCase();
            stringBuilder.append(firstStr).append(lastStr);
        } else {
            stringBuilder.append(parts[0].substring(0, 1).toUpperCase()).append("Z");
        }
        stringBuilder.append(convertData(strName));
        String strMaterialID= String.valueOf(stringBuilder);

        if(strID!=null&&strID!="") {
            materialID=strID;
        } else {
            materialID=strMaterialID;
        }

        materialName = material.getMaterialName();
        price = material.getPrice();
        numInput = material.getNumInput();
    }

    public String convertData(String strDate) {
        String[] strArr = strDate.split("\\s+");
        StringBuilder stringBuilder = new StringBuilder();
        stringBuilder.append(strArr[0]).append(strArr[1]);
        String string1 = String.valueOf(stringBuilder);
        String[] strArr1 = string1.split("/");
        StringBuilder stringBuilder1 = new StringBuilder();
        stringBuilder1.append(strArr1[0]).append(strArr1[1]).append(strArr1[2]);
        String string2 = String.valueOf(stringBuilder1);
        String[] strArr2 = string2.split(":");
        StringBuilder stringBuilder2 = new StringBuilder();
        stringBuilder2.append(strArr2[0]).append(strArr2[1]).append(strArr2[2]);
        String dateStr= String.valueOf(stringBuilder2);
        return dateStr;
    }
}
