import { httpGet, httpPost} from "../index";

const BASE_URL = 'api/role';

export function login(requestParams) {
    return httpPost('login' , requestParams);
}

// export function getInfoRole() {
//     return httpGet(BASE_URL);
// }

// export function getAppName() {
//     return httpGet(BASE_URL + '/appName');
// }
//
// export function getPmcId() {
//     return httpGet(BASE_URL + '/pmc');
// }
//
// export function getTransStatus() {
//     return httpGet(BASE_URL + '/transStatus');
// }
//
// export function getTransLogDetails(transId) {
//     return httpGet(BASE_URL + '/detail?transId='+transId);
// }
//
// export function exportTransLogFile(type, requestParams) {
//     let params = '';
//     Object.keys(requestParams).map(i => params += i+'='+requestParams[i]+'&');
//     return httpGet(BASE_URL + '/exporttranslog?type=' + type + '&' + params.substring(0, params.length - 1));
// }
//
// export function searchCardProfileLogByFilter(requestParams) {
//     return httpPost(BASE_URL + '/cardprofilelog', requestParams);
// }


