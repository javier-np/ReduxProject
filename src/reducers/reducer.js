//const { lastIndexOf } = require("lodash");
import * as bugActions from '../actions/bugActionsTypes'
let lastIndexOf = 0

export default function reducer(state = [], action){
    switch(action.type){
        case bugActions.BUD_ADDED:
           return [
                ...state,
                {
                    id: ++lastIndexOf,
                    description: action.payload.description,
                    resolved: false
                }
            ]
        case bugActions.BUD_ADDED:
            return state.filter(bug => bug.id !== action.payload.id)
        default:
            return state
    }
}