import {createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {GridAreaType, GridCellType, GridStringType, KeyboardType, state} from "../types";
import words, {hiddenWord} from "../data/words";

const wordArray = words
const xxx = hiddenWord


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

const createKeyboard = (): KeyboardType => {
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

const paintKeyboard = (letter: GridCellType, keyboard: KeyboardType): void => {
    for (let i = 0; i < keyboard.length; i++) {
        for (let j = 0; j < keyboard[i].length; j++) {
            if (keyboard[i][j].letter === letter.letter && keyboard[i][j].guessed !== 'guessed-cell') {
                keyboard[i][j].guessed = letter.guessed
            }
        }
    }
}


const ADD_LETTER = 'ADD_LETTER'
const DEL_LETTER = 'DEL_LETTER'
const ADD_ATTEMPT = 'ADD_ATTEMPT'
const CLOSE_MODAL = 'CLOSE_MODAL'

const initialState: state = {
    currentString: 0,
    stringCounter: 0,
    attempts: [],
    grid: createGridArea(),
    keyboard: createKeyboard(),
    modal: {
        visible: false,
        header: 'test',
        text: 'test',
    }
}

const reducer = (state: state = initialState, action: { type: string, payload?: any }): state => {
    switch (action.type) {
        case ADD_LETTER:
            if (state.currentString === 6) return state
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
            if (state.currentString === 6) return state
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
            const attempts = state.attempts
            const word = state.grid[state.currentString].reduce((acc,item)=>(acc+item.letter),'')
            if (wordArray.includes(word) && !attempts.includes(word)) {
                const newState = {...state}
                newState.grid = [...state.grid]
                newState.grid[state.currentString] = [...state.grid[state.currentString]]
                for (let i = 0; i < newState.grid[state.currentString].length; i++) {
                    newState.grid[state.currentString][i] = {...state.grid[state.currentString][i]}
                }
                const string =  newState.grid[state.currentString]
                const keyboard = [...state.keyboard].map(item=>[...item].map(val=>({...val})))
                for (let i = 0; i < string.length; i++) {
                    if (string[i].letter === xxx[i]) {
                        // ЕСЛИ БУКВА ЕСТЬ на том же месте, ТО ПОКРаСИТЬ В ЗЕЛЕНЫЙ
                        string[i].guessed = 'guessed-cell'
                        paintKeyboard(string[i], keyboard)
                    } else if (!xxx.includes(string[i].letter)) {
                        string[i].guessed = 'wrong-cell'
                        paintKeyboard(string[i], keyboard)
                        // ЕСЛИ буквы нет в слове, ТО ПОКРаСИТЬ В серый или Угаданных букв не меньше чем этих букв в слове, то в желтый
                    }
                }
                for (let i = 0; i < string.length; i++) {
                    const howThisLetterIsGuessed = string.filter(item=> (item.letter === string[i].letter) && (item.guessed ==='guessed-cell' || item.guessed === 'wrong-order-cell')).length
                    const howThisLetterInXXX = xxx.split('').filter(item=>item === string[i].letter).length
                    if (xxx.includes(string[i].letter) && (howThisLetterInXXX > howThisLetterIsGuessed) && !(string[i].guessed === 'guessed-cell')) {
                        string[i].guessed = 'wrong-order-cell'
                        paintKeyboard(string[i], keyboard)
                    } else if (xxx.includes(string[i].letter) && (howThisLetterInXXX === howThisLetterIsGuessed) && !(string[i].guessed === 'guessed-cell')) {
                        string[i].guessed = 'wrong-order-cell'
                        paintKeyboard(string[i], keyboard)
                        string[i].guessed = 'wrong-cell'
                    }
                }
                newState.keyboard = keyboard
                newState.currentString ++ // переход на следующую строку
                newState.stringCounter = 0 // обнуление счетчика букв
                newState.attempts = [...attempts, word] // добавление слова в массив попыток
                if (xxx === word) return {...newState, modal: { visible: true, text: 'Вы угадали слово!', header: 'Победа!'}}
                if (newState.currentString === 6) return {...newState, modal: { visible: true, text: `К сожалению, вы проиграли. Загаданное слово - ${xxx}`, header: 'Поражение!'}}
                return newState
            } else if(attempts.includes(word)) {
                return {...state, modal: { visible: true, text: 'Такое слово уже было', header: 'Ошибка'}}
            } else if (!wordArray.includes(word)) {
                return {...state, modal: { visible: true, text: 'Такого слова нет в словаре', header: 'Ошибка'}}
            } else return state
        case CLOSE_MODAL:
            return {...state, modal: {...state.modal, visible: false}}
        default:
            return state
    }
}

export const writeLetterAC = (payload: string) => ({type: ADD_LETTER, payload})
export const delLetterAC = () => ({type: DEL_LETTER})
export const addAttemptAC = () => ({type: ADD_ATTEMPT})
export const closeModalAC = () => ({type: CLOSE_MODAL})

export const store = createStore(reducer, composeWithDevTools());