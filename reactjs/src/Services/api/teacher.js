import { base_url } from "./baseurl";
import axios from "axios";

export const getTeachers = async() => {
    const res = await axios(`${base_url}/user/teachers`, {
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