package com.nghia.uit.webgarage.Model;

import javax.persistence.*;

@Entity
@Table(name = "car")
public class Car {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "licensePlate")
    private String licensePlate;

    @Column(name = "userID")
    private long userID;

    @Column(name = "carBrand")
    private String carBrand;


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getLicensePlate() {
        return licensePlate;
    }

    public void setLicensePlate(String licensePlate) {
        this.licensePlate = licensePlate;
    }

    public long getUserID() {
        return userID;
    }

    public void setUserID(long userID) {
        this.userID = userID;
    }

    public String getCarBrand() {
        return carBrand;
    }

    public void setCarBrand(String carBrand) {
        this.carBrand = carBrand;
    }

    @Override
    public String toString() {
        return "Car{" +
                "id=" + id +
                ", licensePlate='" + licensePlate + '\'' +
                ", userID=" + userID +
                ", carBrand='" + carBrand + '\'' +
                '}';
    }

    public void doMappingCar(ClientDTO clientDTO) {
        licensePlate = clientDTO.getLicensePlate();
        userID = clientDTO.getUserID();
        carBrand = clientDTO.getCarBrand();
    }
}
