import { base_url } from "./baseurl";
import axios from "axios";

export const createCourse = async(name, semester, period) => {
    const payload = { name: name, semester: semester, period: period };

    const res = await axios(`${base_url}/course/create`, {
        method: 'POST',
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