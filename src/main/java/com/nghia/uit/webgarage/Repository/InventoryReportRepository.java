package com.nghia.uit.webgarage.Repository;

import com.nghia.uit.webgarage.Model.InventoryReport;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InventoryReportRepository extends CrudRepository<InventoryReport, Integer> {
}
