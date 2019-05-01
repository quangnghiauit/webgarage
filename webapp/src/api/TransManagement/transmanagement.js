import { httpGet, httpPost} from "../index";

const BASE_URL = 'api/transmanagementbill';

// export function getAllClient() {
//     return httpGet(BASE_URL + '/getallclient');
// }

export function getInfoMaterialUser(licensePlate) {
    return httpGet(BASE_URL + '/get-info-material-user?licensePlate=' + licensePlate);
}

// export function addCar(userID,requestParam) {
//     return httpPost(BASE_URL + '/addcar?userID=' + userID,requestParam)
//
// }
//
// export function processStatusHandleCar(id) {
//     return httpPost(BASE_URL + '/processstatus?id=' + id)
//
// }


// export function updateClient(userID,requestParam) {
//     return httpPost(BASE_URL + '/updateclient?userID=' + userID,requestParam)
//
// }