import { httpGet, httpPost, httpDelete} from "../../index";

const BASE_URL = 'api/adminmanagement';

export function getUsers(){
    return httpGet(BASE_URL+"/get-users");
}
export function getUsersRole(){
    return httpGet(BASE_URL+"/get-users-role");
}
export function addUser(reqPara){
    return httpPost(BASE_URL+"/add-user",reqPara);
}
export function updateUser(reqPara){
    return httpPost(BASE_URL+"/update-user",reqPara);
}
export function deleteUser(reqPara){
    return httpDelete(BASE_URL+"/delete-user",reqPara);
}