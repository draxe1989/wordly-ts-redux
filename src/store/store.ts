import {createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {GridAreaType, GridCellType, GridStringType, Keyboard, state} from "../types";

const wordАrray = ['гонка', 'шлюха', 'понос', 'гомно', 'казак', 'стопа']
const xxx = 'гонка'


const createGridArea = (): GridAreaType => {
    const createGridstring = (): GridStringType => {
        const createCellObj = (): GridCellType => {
            return {
                id: Math.trunc(Math.random() * 1E9),
                letter: '',
                guessed: ''
            }
        }
        return [createCellObj(), createCellObj(), createCellObj(), createCellObj(), createCellObj()]

    }
    return [
        createGridstring(),
        createGridstring(),
        createGridstring(),
        createGridstring(),
        createGridstring(),
        createGridstring()
    ]
}

const createKeyboard = () : Keyboard => {
    let str = 'йцукенгшщзхъ фывапролджэ -ячсмитьбю+'
    return str.split(' ').map(item => {
        return item.split('').map(val => {
            return {
                letter: val,
                guessed: ''
            }
        })
    })
}



const ADD_LETTER = 'ADD_LETTER'
const DEL_LETTER = 'DEL_LETTER'
const ADD_ATTEMPT = 'ADD_ATTEMPT'

const initialState: state = {
    currentString: 0,
    stringCounter: 0,
    attempts: [],
    grid: createGridArea(),
    keyboard: createKeyboard()
}

const reducer = (state: state = initialState, action: { type: string, payload?: any }): state => {
    switch (action.type) {
        case ADD_LETTER:
            if (state.stringCounter < 5) {
                const newState = {...state}
                newState.grid = [...state.grid]
                newState.grid[state.currentString] = [...state.grid[state.currentString]]
                newState.grid[state.currentString][state.stringCounter] = {...state.grid[state.currentString][state.stringCounter]}
                newState.grid[newState.currentString][newState.stringCounter].letter = action.payload
                newState.stringCounter++
                return newState
            } else return state
        case DEL_LETTER:
            if (state.stringCounter > 0) {
                const newState = {...state}
                newState.stringCounter--
                newState.grid = [...state.grid]
                newState.grid[newState.currentString] = [...state.grid[newState.currentString]]
                newState.grid[newState.currentString][newState.stringCounter] = {...state.grid[newState.currentString][newState.stringCounter]}
                newState.grid[newState.currentString][newState.stringCounter].letter = ''
                return newState
            } else return state

        case ADD_ATTEMPT:
            let word = state.grid[state.currentString].map(letter => letter.letter).join('')
            if (wordАrray.find(item => item === word) && !state.attempts.find(item => item === word)) {
                const string: GridStringType = JSON.parse(JSON.stringify(state.grid[state.currentString]))
                word.split('').forEach((item, i) => {
                    if (xxx[i] === word[i]) {
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
                return {
                    ...state,
                    grid: newState.grid,
                    attempts: [...state.attempts, word],
                    currentString: state.currentString + 1,
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