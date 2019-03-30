package com.nghia.uit.webgarage.Repository;

import com.nghia.uit.webgarage.Model.DetailRepairInvoice;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DetailRepairInvoiceRepository extends CrudRepository<DetailRepairInvoice, Integer> {
}
