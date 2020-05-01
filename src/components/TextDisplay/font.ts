type ICharacter = (0 | 1)[][]

type IFont = {
  [character: string]: ICharacter
}

const height = 7

const separator: ICharacter = [
  [0],
  [0],
  [0],
  [0],
  [0],
  [0],
  [0],
]

const dash: ICharacter = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [1, 1, 1, 1],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
]

const dot: ICharacter = [
  [0],
  [0],
  [0],
  [0],
  [0],
  [0],
  [1],
]

const digit0: ICharacter = [
  [0, 1, 1, 0],
  [1, 0, 0, 1],
  [1, 0, 0, 1],
  [1, 0, 0, 1],
  [1, 0, 0, 1],
  [1, 0, 0, 1],
  [0, 1, 1, 0],
]

const digit1: ICharacter = [
  [0, 0, 1, 0],
  [1, 1, 1, 0],
  [0, 0, 1, 0],
  [0, 0, 1, 0],
  [0, 0, 1, 0],
  [0, 0, 1, 0],
  [1, 1, 1, 1],
]

const digit2: ICharacter = [
  [0, 1, 1, 0],
  [1, 0, 0, 1],
  [0, 0, 0, 1],
  [0, 0, 1, 0],
  [0, 1, 0, 0],
  [1, 0, 0, 0],
  [1, 1, 1, 1],
]

const digit3: ICharacter = [
  [0, 1, 1, 0],
  [1, 0, 0, 1],
  [0, 0, 0, 1],
  [0, 0, 1, 0],
  [0, 0, 0, 1],
  [1, 0, 0, 1],
  [0, 1, 1, 0],
]

const digit4: ICharacter = [
  [0, 0, 0, 1],
  [1, 0, 0, 1],
  [1, 0, 0, 1],
  [1, 1, 1, 1],
  [0, 0, 0, 1],
  [0, 0, 0, 1],
  [0, 0, 0, 1],
]

const digit5: ICharacter = [
  [1, 1, 1, 1],
  [1, 0, 0, 0],
  [1, 0, 0, 0],
  [1, 1, 1, 0],
  [0, 0, 0, 1],
  [0, 0, 0, 1],
  [1, 1, 1, 0],
]

const digit6: ICharacter = [
  [0, 1, 1, 0],
  [1, 0, 0, 0],
  [1, 0, 0, 0],
  [1, 1, 1, 0],
  [1, 0, 0, 1],
  [1, 0, 0, 1],
  [0, 1, 1, 0],
]

const digit7: ICharacter = [
  [1, 1, 1, 1],
  [0, 0, 0, 1],
  [0, 0, 1, 0],
  [0, 0, 1, 0],
  [0, 1, 0, 0],
  [0, 1, 0, 0],
  [0, 1, 0, 0],
]

const digit8: ICharacter = [
  [0, 1, 1, 0],
  [1, 0, 0, 1],
  [1, 0, 0, 1],
  [0, 1, 1, 0],
  [1, 0, 0, 1],
  [1, 0, 0, 1],
  [0, 1, 1, 0],
]

const digit9: ICharacter = [
  [0, 1, 1, 0],
  [1, 0, 0, 1],
  [1, 0, 0, 1],
  [0, 1, 1, 1],
  [0, 0, 0, 1],
  [0, 0, 0, 1],
  [0, 1, 1, 0],
]

const column: ICharacter = [
  [0],
  [0],
  [1],
  [0],
  [1],
  [0],
  [0],
]

const font: IFont = {
  '-': dash,
  '.': dot,
  '0': digit0,
  '1': digit1,
  '2': digit2,
  '3': digit3,
  '4': digit4,
  '5': digit5,
  '6': digit6,
  '7': digit7,
  '8': digit8,
  '9': digit9,
  ':': column,
}


export default font

export { height }
export { separator }

export { ICharacter }
export { IFont }
