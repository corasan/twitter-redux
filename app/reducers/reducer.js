const tweets = (state = [], action) => {
    switch(action.type) {
        case 'ADD_TWEET':
            Object.assign({}, state, {
                text: action.text
            }, ...state);
        default:
            return state;
    }
}
