const firstReducer = (state = 0, action) => {
    if (action.type === 'BUTTON_ONE') {
        return state + 1;
    }
    return state;
};

export default firstReducer;