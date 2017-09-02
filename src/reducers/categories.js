function categories(state = [], action) {
    console.log(state, action);

    switch (action.type) {
        case 'EDIT_CATEGORY':
            console.log('canduterio');
            break;
        case 'ADD_CATEGORY':
        case 'DELETE_CATEGORY':
        default:

    }

    return state;
}

export default categories;
