package com.nghia.uit.webgarage.Service.Impl;

import com.nghia.uit.webgarage.Bean.ResponseDTO;
import com.nghia.uit.webgarage.Message.Constants;
import com.nghia.uit.webgarage.Model.Material;
import com.nghia.uit.webgarage.Repository.MaterialRepository;
import com.nghia.uit.webgarage.Service.MaterialManagementService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MaterialManagementServiceImpl implements MaterialManagementService {

    public final static Logger logger = LoggerFactory.getLogger(MaterialManagementServiceImpl.class);

    @Autowired
    private MaterialRepository materialRepository;

    @Override
    public List<Material> getAllMatetial() {
        return materialRepository.findAllByFilter();
    }

    @Override
    public ResponseDTO addMaterial(Material material) {
        try {
            String strID= null;
            if(material.getMaterialID()!=null&&material.getMaterialID()!="") {
                List<Material> checkDuplicateMateID = materialRepository.findAllByMaterialID(material.getMaterialID());
                if(checkDuplicateMateID!=null&&checkDuplicateMateID.size()!=0) {
                    strID= checkDuplicateMateID.get(0).getMaterialID();
                }
            }
            Material material1 = new Material();
            material1.doMappingMaterial(material,strID);
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
                material1.doMappingMaterial(material,material.getMaterialID());
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
