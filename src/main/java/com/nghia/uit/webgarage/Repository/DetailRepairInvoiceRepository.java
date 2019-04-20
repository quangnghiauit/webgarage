package com.nghia.uit.webgarage.Repository;

import com.nghia.uit.webgarage.Model.Car;
import com.nghia.uit.webgarage.Model.DetailRepairInvoice;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DetailRepairInvoiceRepository extends CrudRepository<DetailRepairInvoice, Integer> {

    @Query(value = "select * from detailrepairinvoice as d where d.id =?1",nativeQuery = true)
    DetailRepairInvoice findById(String id);

    @Query(value = "select * from detailrepairinvoice as d where d.repairInvoiceID =?1",nativeQuery = true)
    List<DetailRepairInvoice> findAllByRepairInvoiceID(String repairInvoiceID);
}
