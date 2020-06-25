import * as actions from './bugActionsTypes'

export function bugAdded(description){
    return{
        type: actions.BUD_ADDED,
        payload: {
            description: description
        }
    }
}