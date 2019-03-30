package com.nghia.uit.webgarage.Repository;

import com.nghia.uit.webgarage.Model.Revenue;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RevenueRepository extends CrudRepository<Revenue, Integer> {
}
