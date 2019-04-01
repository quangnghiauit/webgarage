package com.nghia.uit.webgarage.Service;

import com.nghia.uit.webgarage.Model.Material;

import java.util.List;

public interface MaterialManagementService {

    List<Material> getAllMatetial();

    Material addMaterial(Material material);

    Material updateMaterial(Material material,String materialID);

    String deleteMaterial(String materialID);

}
