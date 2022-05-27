import {createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";

const WRITE_LETTER = 'WRITE_LETTER'

const initialState = {
    letter: ''
}

const reducer = (state=initialState, action: {type:string, payload?: any})=> {
    switch (action.type) {
        case WRITE_LETTER:
            return {...state, letter: action.payload}
        default:
            return state
    }
}

export const writeLetterAC = (payload:string) => ({type: WRITE_LETTER, payload})

export const store = createStore(reducer, composeWithDevTools());