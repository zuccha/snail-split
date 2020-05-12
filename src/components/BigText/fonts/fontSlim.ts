import * as Font from '../../../types/font'


const separator: Font.FontGlyph = [
  [ 0 ],
  [ 0 ],
  [ 0 ],
  [ 0 ],
  [ 0 ],
]

const missing: Font.FontGlyph = [
  [ 1 ,  1 ,  1 ],
  [ 1 ,  1 ,  1 ],
  [ 1 ,  1 ,  1 ],
  [ 1 ,  1 ,  1 ],
  [ 1 ,  1 ,  1 ],
]

const digit0: Font.FontGlyph = [
  [ 1 ,  1 ,  1 ],
  [ 1 ,  0 ,  1 ],
  [ 1 ,  0 ,  1 ],
  [ 1 ,  0 ,  1 ],
  [ 1 ,  1 ,  1 ],
]

const digit1: Font.FontGlyph = [
  [ 0 ,  1 ,  0 ],
  [ 1 ,  1 ,  0 ],
  [ 0 ,  1 ,  0 ],
  [ 0 ,  1 ,  0 ],
  [ 1 ,  1 ,  1 ],
]

const digit2: Font.FontGlyph = [
  [ 1 ,  1 ,  1 ],
  [ 0 ,  0 ,  1 ],
  [ 1 ,  1 ,  1 ],
  [ 1 ,  0 ,  0 ],
  [ 1 ,  1 ,  1 ],
]

const digit3: Font.FontGlyph = [
  [ 1 ,  1 ,  1 ],
  [ 0 ,  0 ,  1 ],
  [ 0 ,  1 ,  1 ],
  [ 0 ,  0 ,  1 ],
  [ 1 ,  1 ,  1 ],
]

const digit4: Font.FontGlyph = [
  [ 1 ,  0 ,  1 ],
  [ 1 ,  0 ,  1 ],
  [ 1 ,  1 ,  1 ],
  [ 0 ,  0 ,  1 ],
  [ 0 ,  0 ,  1 ],
]

const digit5: Font.FontGlyph = [
  [ 1 ,  1 ,  1 ],
  [ 1 ,  0 ,  0 ],
  [ 1 ,  1 ,  1 ],
  [ 0 ,  0 ,  1 ],
  [ 1 ,  1 ,  1 ],
]

const digit6: Font.FontGlyph = [
  [ 1 ,  1 ,  1 ],
  [ 1 ,  0 ,  0 ],
  [ 1 ,  1 ,  1 ],
  [ 1 ,  0 ,  1 ],
  [ 1 ,  1 ,  1 ],
]

const digit7: Font.FontGlyph = [
  [ 1 ,  1 ,  1 ],
  [ 0 ,  0 ,  1 ],
  [ 0 ,  0 ,  1 ],
  [ 0 ,  0 ,  1 ],
  [ 0 ,  0 ,  1 ],
]

const digit8: Font.FontGlyph = [
  [ 1 ,  1 ,  1 ],
  [ 1 ,  0 ,  1 ],
  [ 1 ,  1 ,  1 ],
  [ 1 ,  0 ,  1 ],
  [ 1 ,  1 ,  1 ],
]

const digit9: Font.FontGlyph = [
  [ 1 ,  1 ,  1 ],
  [ 1 ,  0 ,  1 ],
  [ 1 ,  1 ,  1 ],
  [ 0 ,  0 ,  1 ],
  [ 1 ,  1 ,  1 ],
]

const dot: Font.FontGlyph = [
  [ 0 ],
  [ 0 ],
  [ 0 ],
  [ 0 ],
  [ 1 ],
]

const column: Font.FontGlyph = [
  [ 0 ],
  [ 1 ],
  [ 0 ],
  [ 1 ],
  [ 0 ],
]

const dash: Font.FontGlyph = [
  [ 0 ,  0 ,  0 ],
  [ 0 ,  0 ,  0 ],
  [ 1 ,  1 ,  1 ],
  [ 0 ,  0 ,  0 ],
  [ 0 ,  0 ,  0 ],
]


const fontSlim: Font.Font = {
  height: 5,
  missing,
  separator,
  glyphs: {
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
    '.': dot,
    ':': column,
    '-': dash,
  },
}


export default fontSlim
