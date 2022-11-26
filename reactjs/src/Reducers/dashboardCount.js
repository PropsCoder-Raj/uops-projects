const initialState = [];

const dashboardCountReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_DASHBOARD": return action;
        default: return state;
    }
}

export default dashboardCountReducer;