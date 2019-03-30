package com.nghia.uit.webgarage.Repository;

import com.nghia.uit.webgarage.Model.RepairInvoice;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RepairInvoiceRepository extends CrudRepository<RepairInvoice, Integer> {
}
