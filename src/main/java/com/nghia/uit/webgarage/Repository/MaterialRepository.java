package com.nghia.uit.webgarage.Repository;

import com.nghia.uit.webgarage.Model.Material;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MaterialRepository extends CrudRepository<Material, Integer> {
}
