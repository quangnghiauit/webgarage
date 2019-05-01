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

    @Query(value = "select * from material as m where m.materialID = ?1 order by id desc",nativeQuery = true)
    List<Material> findAllByMaterialID(String materialID);

    @Query(value = "select * from material as m where m.id = ?1",nativeQuery = true)
    Material findById(String id);



}
