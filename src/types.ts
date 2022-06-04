export type state = {
    currentString: number,
    stringCounter: number,
    attempts: string[] | [],
    grid: GridAreaType,
    keyboard: Keyboard
}

export type GridCellType = {
    letter: string,
    guessed: 'guessed-cell' | 'wrong-order-cell' | 'wrong-cell' | '',
    id: number
}

export type GridStringType = [GridCellType, GridCellType, GridCellType, GridCellType, GridCellType]

export type GridAreaType = [GridStringType, GridStringType, GridStringType, GridStringType, GridStringType, GridStringType]

export type Keyboard = Array<Array<KeyboardCell>>

export type KeyboardCell = {
    letter: string,
    guessed: 'wrong-letter' | 'wrong-order' | 'guessed-letter' | ''
}