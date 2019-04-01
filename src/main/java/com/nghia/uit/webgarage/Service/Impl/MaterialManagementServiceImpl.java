package com.nghia.uit.webgarage.Service.Impl;

import com.nghia.uit.webgarage.Model.Material;
import com.nghia.uit.webgarage.Repository.MaterialRepository;
import com.nghia.uit.webgarage.Service.MaterialManagementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MaterialManagementServiceImpl implements MaterialManagementService {

    @Autowired
    private MaterialRepository materialRepository;


    @Override
    public List<Material> getAllMatetial() {
        return materialRepository.findAllByFilter();
    }

    @Override
    public Material addMaterial(Material material) {
        Material material1 = new Material();
        material1.doMappingMaterial(material);
        materialRepository.save(material1);
        return material;
    }

    @Override
    public Material updateMaterial(Material material, String materialID) {
        return null;
    }

    @Override
    public String deleteMaterial(String materialID) {
        return null;
    }
}
