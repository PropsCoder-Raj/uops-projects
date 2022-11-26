const initialState = [];

const teachersReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_TEACHER": return action.data;
        default: return state;
    }
}

export default teachersReducer;