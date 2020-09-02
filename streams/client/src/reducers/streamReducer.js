import {
    FETCH_STREAM,
    FETCH_STREAMS,
    CREATE_STREAM,
    EDIT_STREAM,
    DELETE_STREAM
} from '../actions/types'
import { actionTypes } from 'redux-form'

export default (state = {}, action) => {
    switch(action.types) {
        case FETCH_STREAM: 
            return { ...state, [action.payload.id]: action.payload }
        case CREATE_STREAM:
            return {...state, [action.payload.id]: action.payload}
        case EDIT_STREAM:
            return {...state, [action.payload.id]: action.payload}
        default: 
            return state
    }
}