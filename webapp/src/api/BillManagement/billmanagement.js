import { httpGet, httpPost} from "../index";

const BASE_URL = 'api/report-management';

export function getBillHandling() {
    return httpGet(BASE_URL+'/get-all-bill-handling')
}

export function getDetailBill(repairBillID) {
    return httpGet(BASE_URL+'/get-detail-bill?repairBillID='+repairBillID)
}