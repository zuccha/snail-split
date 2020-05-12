import React, { useMemo } from 'react'
import * as Font from '../../types/font'
import * as Space from '../../types/space'
import BlessedBox from '../BlessedBox'
import BlessedText from '../BlessedText'


interface IBigTextProps {
  text: string
  font: Font.Font
  colorBg?: string
  colorFg?: string
  space?: Space.Space
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
    if (text === '') {
      return []
    }

    const glyphs = text
      .split('')
      .map(character => font.glyphs[character])
      .map(glyph => glyph || font.missing)
      .flatMap(glyph => [glyph, font.separator])
      .slice(0, -1)

    const glyphsAndOffsets: [Font.FontGlyph, number][] = [[glyphs[0], 0]]
    for (let i = 1; i < glyphs.length; ++i) {
      const previousGlyph = glyphsAndOffsets[i - 1][0]
      const previousGlyphWidth = previousGlyph[0].length * PIXEL_WIDTH
      const previousOffset = glyphsAndOffsets[i - 1][1]
      glyphsAndOffsets.push([glyphs[i], previousOffset + previousGlyphWidth])
    }

    return glyphsAndOffsets
  }, [text, font])

  if (glyphsAndOffsets.length === 0) {
    return null
  }

  const lastGlyph = glyphsAndOffsets[glyphsAndOffsets.length - 1][0]
  const lastGlyphWidth = lastGlyph[0].length * PIXEL_WIDTH
  const lastGlyphOffset = glyphsAndOffsets[glyphsAndOffsets.length - 1][1]
  const containerWidth = lastGlyphOffset + lastGlyphWidth

  return (
    <BlessedBox width={containerWidth} {...space}>
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
