import { httpGet, httpPost,httpDelete} from "../index";

const BASE_URL = 'api/materialmanagement';

// export function getAllClient() {
//     return httpGet(BASE_URL + '/getallclient');
// }

export function getListMaterial() {
    return httpGet(BASE_URL + '/getallmaterial');
}

