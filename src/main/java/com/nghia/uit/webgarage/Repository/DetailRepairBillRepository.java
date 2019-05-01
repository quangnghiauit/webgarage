package com.nghia.uit.webgarage.Repository;

import com.nghia.uit.webgarage.Model.DetailRepairBill;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DetailRepairBillRepository extends CrudRepository<DetailRepairBill, Integer> {

    @Query(value = "select * from detailrepairbill as d where d.id =?1",nativeQuery = true)
    DetailRepairBill findById(String id);

    @Query(value = "select * from detailrepairbill as d where d.repairBillID =?1",nativeQuery = true)
    List<DetailRepairBill> findAllByRepairBillID(String repairBillID);
}
