import React, { useMemo } from 'react'
import IFont, { IFontGlyph } from '../../types/font'
import ISpace from '../../types/space'
import BlessedBox from '../BlessedBox'
import BlessedText from '../BlessedText'


interface IBigTextProps {
  text: string
  font: IFont
  colorBg?: string
  colorFg?: string
  space?: ISpace
}


const PIXEL_WIDTH = 1

const BigText: React.FC<IBigTextProps> = ({
  text,
  font,
  colorBg = '#000000',
  colorFg = '#ffffff',
  space = {},
}) => {
  const glyphsAndOffsets = useMemo(() => {
    const glyphs = text
      .split('')
      .map(character => font.glyphs[character])
      .flatMap(glyph => [glyph, font.separator])
      .slice(0, -1)

    const glyphsAndOffsets: [IFontGlyph, number][] = [[glyphs[0], 0]]
    for (let i = 1; i < glyphs.length; ++i) {
      const previousGlyph = glyphsAndOffsets[i - 1][0]
      const previousGlyphWidth = previousGlyph[0].length * PIXEL_WIDTH
      const previousOffset = glyphsAndOffsets[i - 1][1]
      glyphsAndOffsets.push([glyphs[i], previousOffset + previousGlyphWidth])
    }

    return glyphsAndOffsets
  }, [text, font])

  return (
    <BlessedBox {...space}>
      {glyphsAndOffsets.map(([glyph, glyphOffset], glyphIndex) => (
        <BlessedBox key={glyphIndex} left={glyphOffset}>
          {glyph.map((line, lineIndex) => (
            line.map((pixel, pixelIndex) => (
              <BlessedText
                key={`${lineIndex}-${pixelIndex}`}
                left={pixelIndex * PIXEL_WIDTH}
                top={lineIndex}
                content={' '.repeat(PIXEL_WIDTH)}
                style={{ bg: pixel === 0 ? colorBg : colorFg }}
              />
            ))
          ))}
        </BlessedBox>
      ))}
    </BlessedBox>
  )
}


export default BigText
