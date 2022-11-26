export const setCourses = (array) => {
    return { 
        type: 'SET_COURSE', 
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