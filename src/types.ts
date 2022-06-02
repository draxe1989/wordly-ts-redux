export type GridCellType = {
    letter: string,
    guessed: 'guessed-cell' | 'wrong-order-cell' | 'wrong-cell' | '',
    id: number
}

export type GridStringType = [GridCellType, GridCellType, GridCellType, GridCellType, GridCellType]

export type GridAreaType = [GridStringType, GridStringType, GridStringType, GridStringType, GridStringType, GridStringType]