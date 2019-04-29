import { httpGet, httpPost} from "../index";

const BASE_URL = 'api/carmanagement';

// export function getAllClient() {
//     return httpGet(BASE_URL + '/getallclient');
// }

export function getListCarByUserID(userID) {
    return httpGet(BASE_URL + '/get-list-car-by-userID?userID=' + userID);
}

export function addCar(requestParam) {
    return httpPost(BASE_URL + '/addcar',requestParam)

}

// export function updateClient(userID,requestParam) {
//     return httpPost(BASE_URL + '/updateclient?userID=' + userID,requestParam)
//
// }