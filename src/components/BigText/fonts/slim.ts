import IFont, { IFontGlyph } from '../../../types/font'


const separator: IFontGlyph = [
  [ 0 ],
  [ 0 ],
  [ 0 ],
  [ 0 ],
  [ 0 ],
]

const missing: IFontGlyph = [
  [ 1 ,  1 ,  1 ],
  [ 1 ,  1 ,  1 ],
  [ 1 ,  1 ,  1 ],
  [ 1 ,  1 ,  1 ],
  [ 1 ,  1 ,  1 ],
]

const digit0: IFontGlyph = [
  [ 1 ,  1 ,  1 ],
  [ 1 ,  0 ,  1 ],
  [ 1 ,  0 ,  1 ],
  [ 1 ,  0 ,  1 ],
  [ 1 ,  1 ,  1 ],
]

const digit1: IFontGlyph = [
  [ 0 ,  1 ,  0 ],
  [ 1 ,  1 ,  0 ],
  [ 0 ,  1 ,  0 ],
  [ 0 ,  1 ,  0 ],
  [ 1 ,  1 ,  1 ],
]

const digit2: IFontGlyph = [
  [ 1 ,  1 ,  1 ],
  [ 0 ,  0 ,  1 ],
  [ 1 ,  1 ,  1 ],
  [ 1 ,  0 ,  0 ],
  [ 1 ,  1 ,  1 ],
]

const digit3: IFontGlyph = [
  [ 1 ,  1 ,  1 ],
  [ 0 ,  0 ,  1 ],
  [ 0 ,  1 ,  1 ],
  [ 0 ,  0 ,  1 ],
  [ 1 ,  1 ,  1 ],
]

const digit4: IFontGlyph = [
  [ 1 ,  0 ,  1 ],
  [ 1 ,  0 ,  1 ],
  [ 1 ,  1 ,  1 ],
  [ 0 ,  0 ,  1 ],
  [ 0 ,  0 ,  1 ],
]

const digit5: IFontGlyph = [
  [ 1 ,  1 ,  1 ],
  [ 1 ,  0 ,  0 ],
  [ 1 ,  1 ,  1 ],
  [ 0 ,  0 ,  1 ],
  [ 1 ,  1 ,  1 ],
]

const digit6: IFontGlyph = [
  [ 1 ,  1 ,  1 ],
  [ 1 ,  0 ,  0 ],
  [ 1 ,  1 ,  1 ],
  [ 1 ,  0 ,  1 ],
  [ 1 ,  1 ,  1 ],
]

const digit7: IFontGlyph = [
  [ 1 ,  1 ,  1 ],
  [ 0 ,  0 ,  1 ],
  [ 0 ,  0 ,  1 ],
  [ 0 ,  0 ,  1 ],
  [ 0 ,  0 ,  1 ],
]

const digit8: IFontGlyph = [
  [ 1 ,  1 ,  1 ],
  [ 1 ,  0 ,  1 ],
  [ 1 ,  1 ,  1 ],
  [ 1 ,  0 ,  1 ],
  [ 1 ,  1 ,  1 ],
]

const digit9: IFontGlyph = [
  [ 1 ,  1 ,  1 ],
  [ 1 ,  0 ,  1 ],
  [ 1 ,  1 ,  1 ],
  [ 0 ,  0 ,  1 ],
  [ 1 ,  1 ,  1 ],
]

const dot: IFontGlyph = [
  [ 0 ],
  [ 0 ],
  [ 0 ],
  [ 0 ],
  [ 1 ],
]

const column: IFontGlyph = [
  [ 0 ],
  [ 1 ],
  [ 0 ],
  [ 1 ],
  [ 0 ],
]

const dash: IFontGlyph = [
  [ 0 ,  0 ,  0 ],
  [ 0 ,  0 ,  0 ],
  [ 1 ,  1 ,  1 ],
  [ 0 ,  0 ,  0 ],
  [ 0 ,  0 ,  0 ],
]


const slim: IFont = {
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


export default slim
