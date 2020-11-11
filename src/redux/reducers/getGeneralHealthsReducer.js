const getGeneralHealthsReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_GENERAL_HEALTHS':
            return action.payload
        default: 
        return state
    }
}


export default getGeneralHealthsReducer;
