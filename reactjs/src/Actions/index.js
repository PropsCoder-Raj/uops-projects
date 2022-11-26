export const setCourses = (array) => {
    return { 
        type: 'SET_COURSE', 
        data: array
    }
}

export const setTeachers = (array) => {
    return { 
        type: 'SET_TEACHER', 
        data: array
    }
}

export const setDashboardCount = (tecaherCount, studentCount, courseCount) => {
    return { 
        type: 'SET_DASHBOARD', 
        data: [{
            teacherCount: tecaherCount,
            studentCount: studentCount,
            courseCount: courseCount,
        }]
    }
}