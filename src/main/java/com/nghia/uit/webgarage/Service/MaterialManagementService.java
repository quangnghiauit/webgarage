package com.nghia.uit.webgarage.Service;

import com.nghia.uit.webgarage.Model.Material;

import java.util.List;

public interface MaterialManagementService {

    List<Material> getAllMatetial();

    String addMaterial(Material material);

    String updateMaterial(Material material,String id);

    String deleteMaterial(String id);

}
