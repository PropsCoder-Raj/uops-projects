import { base_url } from "./baseurl";
import axios from "axios";

export const createStudent = async(name, email, password, phoneNumber, courseId, role, status) => {
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

export const updateStudent = async(name, email, phoneNumber, courseId, _id) => {
    const payload = { name: name, email: email, phoneNumber: phoneNumber, courseId: courseId, status: 1 };

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

export const getStudents = async() => {
    const res = await axios(`${base_url}/user/students`, {
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