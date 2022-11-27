import { base_url } from "./baseurl";
import axios from "axios";

export const getCheckAttendanceWithCourseIdAndTeacherIdAndDate = async(_id, teacher, date) => {
    const res = await axios(`${base_url}/attendance/course/${_id}/${teacher}/${date}`, {
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

export const createAttendance = async(course, teacher, student, status) => {
    const payload = { course: course, teacher: teacher, student: student, status: status};

    const res = await axios(`${base_url}/attendance/create`, {
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