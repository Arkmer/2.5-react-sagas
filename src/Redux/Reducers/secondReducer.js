const secondReducer = (state = 100, action) => {
    if (action.type === 'BUTTON_TWO') {
        return state - 1;
    }
    return state;
};

export default secondReducer;