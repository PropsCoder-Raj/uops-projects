const initialState = {
    data:
        [{
            teacherCount: 0,
            studentCount: 0,
            courseCount: 0
        }]
};

const dashboardCountReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_DASHBOARD": return action;
        default: return state;
    }
}

export default dashboardCountReducer;