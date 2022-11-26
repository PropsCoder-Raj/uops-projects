import { base_url } from "./baseurl";
import axios from "axios";

export const getDashboardCount = async() => {
    const res = await axios(`${base_url}/admin/dashboard-count`, {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
        }
    }).then((result) => {
        return result;
    }).catch((err) => {
        return err.response;
    });

    return res;
}