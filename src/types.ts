export type state = {
    currentString: number,
    stringCounter: number,
    attempts: string[] ,
    grid: GridAreaType,
    keyboard: KeyboardType,
    modal: ModalType
}

export type GridCellType = {
    letter: string,
    guessed: 'guessed-cell' | 'wrong-order-cell' | 'wrong-cell' | '',
    id: number
}

export type ModalType = {
    visible: boolean,
    header: string,
    text: string,
}

export type GridStringType = [GridCellType, GridCellType, GridCellType, GridCellType, GridCellType]

export type GridAreaType = [GridStringType, GridStringType, GridStringType, GridStringType, GridStringType, GridStringType]

export type KeyboardType = Array<Array<KeyboardCell>>

export type KeyboardCell = {
    letter: string,
    guessed: 'guessed-cell' | 'wrong-order-cell' | 'wrong-cell' | ''
}