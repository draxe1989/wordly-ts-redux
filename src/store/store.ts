import {createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {GridAreaType} from "../types";

const wordАrray =['гонка', 'шлюха', 'понос', 'гомно', 'казак', 'стопа']
const xxx = ['понос']

export type state = {
    currentString: number,
    stringCounter: number,
    grid: GridAreaType
}

const ADD_LETTER = 'ADD_LETTER'
const DEL_LETTER = 'DEL_LETTER'
const ADD_ATTEMPT = 'ADD_ATTEMPT'

const initialState : state = {
    currentString: 0,
    stringCounter: 0,
    grid: [
        [{letter:'',guessed:''},{letter:'',guessed:''},{letter:'',guessed:''},{letter:'',guessed:''},{letter:'',guessed:''}],
        [{letter:'',guessed:''},{letter:'',guessed:''},{letter:'',guessed:''},{letter:'',guessed:''},{letter:'',guessed:''}],
        [{letter:'',guessed:''},{letter:'',guessed:''},{letter:'',guessed:''},{letter:'',guessed:''},{letter:'',guessed:''}],
        [{letter:'',guessed:''},{letter:'',guessed:''},{letter:'',guessed:''},{letter:'',guessed:''},{letter:'',guessed:''}],
        [{letter:'',guessed:''},{letter:'',guessed:''},{letter:'',guessed:''},{letter:'',guessed:''},{letter:'',guessed:''}],
        [{letter:'',guessed:''},{letter:'',guessed:''},{letter:'',guessed:''},{letter:'',guessed:''},{letter:'',guessed:''}],
    ]
}



const reducer = (state: state = initialState, action: { type: string, payload?: any }):state  => {
    switch (action.type) {
        case ADD_LETTER:

            return {...state}
        case DEL_LETTER:
            return {...state}
        case ADD_ATTEMPT:
           return state
        default:
            return state
    }
}

export const writeLetterAC = (payload: string) => ({type: ADD_LETTER, payload})
export const delLetterAC = () => ({type: DEL_LETTER})
export const addAttemptAC = () => ({type: ADD_ATTEMPT})

export const store = createStore(reducer, composeWithDevTools());