import { ICharacter, IFont } from './types'


const separator: ICharacter = [
  [0],
  [0],
  [0],
  [0],
  [0],
]

const dash: ICharacter = [
  [0, 0, 0],
  [0, 0, 0],
  [1, 1, 1],
  [0, 0, 0],
  [0, 0, 0],
]

const dot: ICharacter = [
  [0],
  [0],
  [0],
  [0],
  [1],
]

const digit0: ICharacter = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 0, 1],
  [1, 0, 1],
  [1, 1, 1],
]

const digit1: ICharacter = [
  [0, 1, 0],
  [1, 1, 0],
  [0, 1, 0],
  [0, 1, 0],
  [1, 1, 1],
]

const digit2: ICharacter = [
  [1, 1, 1],
  [0, 0, 1],
  [1, 1, 1],
  [1, 0, 0],
  [1, 1, 1],
]

const digit3: ICharacter = [
  [1, 1, 1],
  [0, 0, 1],
  [0, 1, 1],
  [0, 0, 1],
  [1, 1, 1],
]

const digit4: ICharacter = [
  [1, 0, 1],
  [1, 0, 1],
  [1, 1, 1],
  [0, 0, 1],
  [0, 0, 1],
]

const digit5: ICharacter = [
  [1, 1, 1],
  [1, 0, 0],
  [1, 1, 1],
  [0, 0, 1],
  [1, 1, 1],
]

const digit6: ICharacter = [
  [1, 1, 1],
  [1, 0, 0],
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
]

const digit7: ICharacter = [
  [1, 1, 1],
  [0, 0, 1],
  [0, 0, 1],
  [0, 0, 1],
  [0, 0, 1],
]

const digit8: ICharacter = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
]

const digit9: ICharacter = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
  [0, 0, 1],
  [1, 1, 1],
]

const column: ICharacter = [
  [0],
  [1],
  [0],
  [1],
  [0],
]

const fontSmall: IFont = {
  alphabet: {
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
  },
  separator,
  height: 5,
}


export default fontSmall
