import { httpGet, httpPost} from "../index";

const BASE_URL = 'api/role';

export function getRole(param) {
    return httpGet(BASE_URL,param);
}
