package com.nghia.uit.webgarage.Repository;

import com.nghia.uit.webgarage.Model.Material;
import com.nghia.uit.webgarage.Model.MaterialName;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MaterialNameRepository extends CrudRepository<MaterialName,Integer> {


    @Query(value = "select * from material_name", nativeQuery = true)
    List<MaterialName> findAllByFilter();

    @Query(value = "select * from material_name as m where m.materialName =?1",nativeQuery = true)
    MaterialName findByName(String materialName);

    @Query(value = "select * from material_name as m where m.materialID =?1",nativeQuery = true)
    MaterialName findByMaterialID(String materialID);
}
