import {httpGet, httpPost} from "../index";

const BASE_URL = 'api/report-management';

export function getBillHandling() {
    return httpGet(BASE_URL + '/get-all-bill-handling')
}

export function getDetailBill(repairBillID) {
    return httpGet(BASE_URL + '/get-detail-bill?repairBillID=' + repairBillID)
}

export function getHistoryBill() {
    return httpGet(BASE_URL + '/get-all-bill')
}

export function searchRevenue(requestParams) {
    return httpPost(BASE_URL + '/search-revenue',requestParams);
}

export function searchInventory(requestParams) {
    return httpPost(BASE_URL + '/search-inventory',requestParams);
}