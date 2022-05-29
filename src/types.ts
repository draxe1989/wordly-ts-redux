export type GridCellType = {
    letter: string,
    guessed: 'guessed-cell' | 'wrong-order-cell' | 'wrong-cell' | ''
}

export type GridStringType = [GridCellType, GridCellType, GridCellType, GridCellType, GridCellType]

export type GridAreaType = [GridStringType, GridStringType, GridStringType, GridStringType, GridStringType, GridStringType]