package com.nghia.uit.webgarage.Repository;

import com.nghia.uit.webgarage.Model.Car;
import com.nghia.uit.webgarage.Model.Material;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MaterialRepository extends CrudRepository<Material, Integer> {

    @Query(value = "select * from material", nativeQuery = true)
    List<Material> findAllByFilter();

    @Query(value = "select * from material as m where m.materialID = ?",nativeQuery = true)
    Material findAllByMaterialID(String materialID);
}
