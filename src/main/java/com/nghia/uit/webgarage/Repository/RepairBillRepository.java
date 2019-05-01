package com.nghia.uit.webgarage.Repository;

import com.nghia.uit.webgarage.Model.RepairBill;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RepairBillRepository extends CrudRepository<RepairBill, Integer> {

    @Query(value = "select * from repairbill as r where r.licensePlate = ?1 and r.status = 1",nativeQuery = true)
    RepairBill findByLicensePlate(String licensePlate);
}
