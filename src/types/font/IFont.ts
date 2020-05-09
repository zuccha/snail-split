type IFontGlyphPixel = 0 | 1

type IFontGlyph = IFontGlyphPixel[][]

interface IFont {
  height: number
  separator: IFontGlyph
  glyphs: { [glyph: string]: IFontGlyph }
}


export default IFont

export {
  IFontGlyph,
  IFontGlyphPixel,
}
