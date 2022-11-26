import { base_url } from "./baseurl";
import axios from "axios";

export const loginAuth = async(email, password) => {
    const payload = { email: email, password: password };

    const res = await axios(base_url+`/user/signin`, {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        data: payload,
    }).then((result) => {
        return result;
    }).catch((err) => {
        return err.response;
    });

    return res;
}