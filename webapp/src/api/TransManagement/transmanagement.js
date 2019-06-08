import {httpDelete, httpGet, httpPost} from "../index";

const BASE_URL = 'api/transmanagementbill';

// export function getAllClient() {
//     return httpGet(BASE_URL + '/getallclient');
// }

export function getInfoMaterialUser(licensePlate) {
    return httpGet(BASE_URL + '/get-info-material-user?licensePlate=' + licensePlate);
}

export function addTransMaterial(repairBillID, requestParam) {
    return httpPost(BASE_URL + '/addmaterial?repairBillID=' + repairBillID, requestParam)

}


export function updateMaterial(id, requestParam) {
    return httpPost(BASE_URL + '/updatematerial?id=' + id, requestParam);
}

export function deleteMaterial(id) {
    return httpDelete(BASE_URL + '/updatematerial?id=' + id);
}

//
// export function processStatusHandleCar(id) {
//     return httpPost(BASE_URL + '/processstatus?id=' + id)
//
// }


// export function updateClient(userID,requestParam) {
//     return httpPost(BASE_URL + '/updateclient?userID=' + userID,requestParam)
//
// }