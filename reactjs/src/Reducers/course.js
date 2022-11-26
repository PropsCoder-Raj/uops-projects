const initialState = [];

const courseReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_COURSE": return action.data;
        default: return state;
    }
}

export default courseReducer;