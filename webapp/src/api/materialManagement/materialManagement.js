import { httpGet, httpPost,httpDelete} from "../index";

const BASE_URL = 'api/material-management';

// export function getAllClient() {
//     return httpGet(BASE_URL + '/getallclient');
// }

export function getListMaterial() {
    return httpGet(BASE_URL + '/get-all-material');
}

export function addHistoryMaterial(requestParams) {
    return httpPost(BASE_URL+'add-material',requestParams)

}