type FontGlyphPixel = 0 | 1

type FontGlyph = FontGlyphPixel[][]

interface Font {
  height: number
  missing: FontGlyph
  separator: FontGlyph
  glyphs: { [glyph: string]: FontGlyph }
}


export default Font

export { FontGlyph, FontGlyphPixel }
