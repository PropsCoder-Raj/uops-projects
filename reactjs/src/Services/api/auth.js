import { base_url } from "./baseurl";
import axios from "axios";

export const loginAuth = async(email, password) => {
    const payload = { email: email, password: password };

    const res = await axios(`${base_url}/user/signin`, {
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

export const createUser = async(name, email, password, phoneNumber, courseId, role, status) => {
    const payload = { name: name, email: email, password: password, phoneNumber: phoneNumber, courseId: courseId, role: role, status: status};

    const res = await axios(`${base_url}/user/create`, {
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


export const getSingleUser = async(_id) => {
    const res = await axios(`${base_url}/user/single/${_id}`, {
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


export const updateSingleUser = async(name, email, phoneNumber, courseId, status, _id) => {
    const payload = { name: name, email: email, phoneNumber: phoneNumber, courseId: courseId, status: status};
    const res = await axios(`${base_url}/user/single/${_id}`, {
        method: 'PUT',
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