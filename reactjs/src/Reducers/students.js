const initialState = [];

const studentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_STUDENT": return action.data;
        default: return state;
    }
}

export default studentsReducer;