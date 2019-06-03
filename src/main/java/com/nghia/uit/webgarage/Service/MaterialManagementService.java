package com.nghia.uit.webgarage.Service;

import com.nghia.uit.webgarage.Bean.ResponseDTO;
import com.nghia.uit.webgarage.Model.CarHandleDTO;
import com.nghia.uit.webgarage.Model.Material;
import com.nghia.uit.webgarage.Model.MaterialName;

import java.util.List;

public interface MaterialManagementService {

    List<Material> getAllMatetial();

    List<MaterialName> getAllMaterialByAllNum();

    List<MaterialName> getAllNameMatetial();

    ResponseDTO addMateName(String mateName,String currentUser);

    ResponseDTO addMaterial(Material material,String currentUser);

    ResponseDTO updateMaterial(Material material,String id);

    ResponseDTO deleteMaterial(String id);

}
