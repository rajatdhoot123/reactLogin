import * as action from '../actions/actions'

export const userLogin = (state= { auth: false , id : null}, action) => {
    switch(action.type) {
        case 'USER_LOGIN' :
        return Object.assign({}, state, {
            auth: action.auth,
            id : action.id
        })
        default:
        return state;
    }
}