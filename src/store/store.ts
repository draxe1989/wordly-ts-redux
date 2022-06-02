import {createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {GridAreaType, GridCellType, GridStringType} from "../types";

const wordАrray = ['гонка', 'шлюха', 'понос', 'гомно', 'казак', 'стопа']
const xxx = 'гонка'

export type state = {
    currentString: number,
    stringCounter: number,
    attempts: string[]|[],
    grid: GridAreaType
}

const createCellObj = ():GridCellType=>{
    return {
        id: Math.trunc(Math.random() * 1E9),
        letter: '',
        guessed: ''
    }
}
const createGridstring = () : GridStringType => {
    return [createCellObj(), createCellObj(),createCellObj(),createCellObj(),createCellObj()]

}
const createGridArea = () : GridAreaType => {
    return [
        createGridstring(),
        createGridstring(),
        createGridstring(),
        createGridstring(),
        createGridstring(),
        createGridstring()
    ]

}


const ADD_LETTER = 'ADD_LETTER'
const DEL_LETTER = 'DEL_LETTER'
const ADD_ATTEMPT = 'ADD_ATTEMPT'

const initialState: state = {
    currentString: 0,
    stringCounter: 0,
    attempts:[],
    grid: createGridArea()
}


const reducer = (state: state = initialState, action: { type: string, payload?: any }): state => {
    switch (action.type) {
        case ADD_LETTER:
            const newState1 = JSON.parse(JSON.stringify(state))
            if(newState1.stringCounter < 5) {
                newState1.grid[newState1.currentString][newState1.stringCounter].letter = action.payload
                newState1.stringCounter ++
            }
            return newState1
        case DEL_LETTER:
            const newState2 = JSON.parse(JSON.stringify(state))
            if(newState2.stringCounter > 0) {
                newState2.stringCounter --
                newState2.grid[newState2.currentString][newState2.stringCounter].letter = ''
            }
            return newState2
        case ADD_ATTEMPT:
            let word = state.grid[state.currentString].map(letter => letter.letter).join('')
            if (wordАrray.find(item => item === word) && !state.attempts.find(item => item === word)) {
                const string: GridStringType = JSON.parse(JSON.stringify(state.grid[state.currentString]))
                word.split('').forEach((item, i)=>{
                    if (xxx[i] === word[i]){
                        string[i].guessed = 'guessed-cell'
                    } else if (xxx.includes(word[i])) {
                        string[i].guessed = 'wrong-order-cell'
                    } else {
                        string[i].guessed = 'wrong-cell'
                    }
                })
                let newState = {...state}
                newState.grid = [...state.grid]
                newState.grid[state.currentString] = string
                return {...state,
                    grid: newState.grid,
                    attempts: [...state.attempts, word],
                    currentString: state.currentString+1,
                    stringCounter: 0
                }
            } else return state
        default:
            return state
    }
}

export const writeLetterAC = (payload: string) => ({type: ADD_LETTER, payload})
export const delLetterAC = () => ({type: DEL_LETTER})
export const addAttemptAC = () => ({type: ADD_ATTEMPT})

export const store = createStore(reducer, composeWithDevTools());