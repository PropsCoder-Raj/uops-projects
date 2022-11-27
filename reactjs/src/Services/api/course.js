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

export const updateCourse = async(name, semester, period, _id) => {
    const payload = { name: name, semester: semester, period: period };

    const res = await axios(`${base_url}/course/update/${_id}`, {
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

export const deleteCourse = async( _id) => {
    const res = await axios(`${base_url}/course/delete/${_id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((result) => {
        return result;
    }).catch((err) => {
        return err.response;
    });

    return res;
}


export const getCourses = async() => {
    const res = await axios(`${base_url}/course/get`, {
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


export const getSingleCourse = async(_id) => {
    const res = await axios(`${base_url}/course/get/${_id}`, {
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

export const getStudentCourseWise = async(_id) => {
    const res = await axios(`${base_url}/course/students/${_id}`, {
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