package com.nghia.uit.webgarage.Service;

import com.nghia.uit.webgarage.Bean.ResponseDTO;
import com.nghia.uit.webgarage.Model.Material;

import java.util.List;

public interface MaterialManagementService {

    List<Material> getAllMatetial();

    ResponseDTO addMaterial(Material material);

    ResponseDTO updateMaterial(Material material,String id);

    ResponseDTO deleteMaterial(String id);

}
