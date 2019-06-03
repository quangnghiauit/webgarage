package com.nghia.uit.webgarage.Service.Impl;

import com.nghia.uit.webgarage.Bean.ResponseDTO;
import com.nghia.uit.webgarage.Message.Constants;
import com.nghia.uit.webgarage.Model.Material;
import com.nghia.uit.webgarage.Model.MaterialName;
import com.nghia.uit.webgarage.Repository.MaterialNameRepository;
import com.nghia.uit.webgarage.Repository.MaterialRepository;
import com.nghia.uit.webgarage.Service.MaterialManagementService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Service
public class MaterialManagementServiceImpl implements MaterialManagementService {

    public final static Logger logger = LoggerFactory.getLogger(MaterialManagementServiceImpl.class);

    @Autowired
    private MaterialRepository materialRepository;

    @Autowired
    private MaterialNameRepository materialNameRepository;

    @Override
    public List<Material> getAllMatetial() {
        return materialRepository.findAllByFilter();
    }

    @Override
    public List<MaterialName> getAllMaterialByAllNum() {
        try {
            List<MaterialName> materialNames = materialNameRepository.findAllByFilter();

            if(materialNames.isEmpty()) {
                return new ArrayList<>();
            }

            return materialNames;

        }catch (Exception ex) {
            return new ArrayList<>();
        }
    }

    @Override
    public List<MaterialName> getAllNameMatetial() {
        return materialNameRepository.findAllByFilter();
    }

    @Override
    public ResponseDTO addMateName(String mateName, String currentUser) {
        try {
            if(!mateName.isEmpty()) {
                MaterialName checkDuplicateMateID = materialNameRepository.findByName(mateName);
                if(checkDuplicateMateID!=null) {
                    return new ResponseDTO().fail("Dữ liệu bị trùng lặp.");
                }
                MaterialName materialName = new MaterialName();
                materialName.setCreatedBy(currentUser);
                materialName.doMappingMaterial(mateName);
                materialNameRepository.save(materialName);
                return new ResponseDTO().success(Constants.DONE_ADDREQUESTMATERIAL);
            }
            return new ResponseDTO().fail("No message");

        } catch (Exception ex) {
            logger.error(ex.getMessage());
            return new ResponseDTO().fail(ex.getMessage());
        }
    }

    @Override
    public ResponseDTO addMaterial(Material material,String currentUser) {
        try {
            String strID= null;
            String strMaterialName = null;
            if(material.getMaterialID()!=null&&material.getMaterialID()!="") {
                MaterialName materialName = materialNameRepository.findByMaterialID(material.getMaterialID());
                if(!Objects.isNull(materialName)) {
                    strID= materialName.getMaterialID();
                    strMaterialName = materialName.getMaterialName();
                    if(Integer.valueOf(material.getNumInput()) > 0) {
                        long totalNum = materialName.getTotalNum();
                        long numInput = Long.valueOf(material.getNumInput());
                        materialName.setTotalNum(totalNum + numInput);
                        materialNameRepository.save(materialName);
                    }
                }
            }
            Material material1 = new Material();
            material.setCreatedBy(currentUser);
            material1.doMappingMaterial(material,strID,strMaterialName);
            materialRepository.save(material1);
            return new ResponseDTO().success(Constants.DONE_ADDREQUESTMATERIAL);
        } catch (Exception ex) {
            logger.error(ex.getMessage());
            return new ResponseDTO().fail(ex.getMessage());
        }

    }

    @Override
    public ResponseDTO updateMaterial(Material material, String id) {
        try{
            if(id!=null&&id!="") {
                Material material1 = materialRepository.findById(id);
                material1.doMappingMaterial(material,material.getMaterialID(),material.getMaterialName());
                materialRepository.save(material1);
                return new ResponseDTO().success(Constants.DONE_UPDATEREQUESTMATERIAL);
            }
        }catch (Exception ex){
            logger.error(ex.getMessage());
            return new ResponseDTO().fail(ex.getMessage());
        }
        return null;
    }

    @Override
    public ResponseDTO deleteMaterial(String id) {
        try{

            Material material = materialRepository.findById(id);
            if(material!=null) {
                materialRepository.delete(material);
                return new ResponseDTO().success(Constants.DONE_DELETEREQUESTMATERIAL);
            }
        }catch (Exception e){
            logger.error(e.getMessage());
            return  new ResponseDTO().fail(e.getMessage());
        }
        return null;
    }
}
