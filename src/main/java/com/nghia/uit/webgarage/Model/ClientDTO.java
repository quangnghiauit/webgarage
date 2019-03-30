package com.nghia.uit.webgarage.Model;


public class ClientDTO {

    private int id;

    private long userID;

    private String userName;

    private String phoneNumber;

    private String address;

    private String email;

    private long debt;

    private String licensePlate;

    private String carBrand;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public long getUserID() {
        return userID;
    }

    public void setUserID(long userID) {
        this.userID = userID;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public long getDebt() {
        return debt;
    }

    public void setDebt(long debt) {
        this.debt = debt;
    }

    public String getLicensePlate() {
        return licensePlate;
    }

    public void setLicensePlate(String licensePlate) {
        this.licensePlate = licensePlate;
    }

    public String getCarBrand() {
        return carBrand;
    }

    public void setCarBrand(String carBrand) {
        this.carBrand = carBrand;
    }

    public void doMappingClientCar(Car car) {
        licensePlate = car.getLicensePlate();
        carBrand = car.getCarBrand();
    }
    public void doMappingClientDTO(Users users) {
        userID = users.getUserID();
        userName = users.getUserName();
        phoneNumber = users.getPhoneNumber();
        address = users.getAddress();
        email = users.getEmail();
        debt = users.getDebt();
    }

}
