import React from 'react'
import chalk from 'chalk'
import { Box, Text } from 'ink'
import zip from '../../utils/zip'
import font, { height, separator } from './font'


interface ITextDisplayProps {
  text: string
  colorBg?: string
  colorFg?: string
}


const TextDisplay: React.FC<ITextDisplayProps> = ({
  text,
  colorBg = undefined,
  colorFg = undefined,
}) => {
  const fontCharacters = text
    // Convert string to array.
    .split('')
    // Take font character for each character.
    .map(character => font[character])
    // Remove characters that don't have a representation within the font.
    .filter(fontCharacter => fontCharacter !== undefined)
    // Separate characters with a small space.
    .flatMap(fontCharacter => [fontCharacter, separator])
    // Remove separator at the end.
    .slice(0, -1)

  const formattedText =
    // Group all characters' pixels by line.
    zip(fontCharacters)
    .map(lines => lines.flat())
    // Color each pixel of the right color, depending whether it is a background
    // pixel (0) or a foreground pixel (1). Use `chalk` directly for performance
    // reasons.
    .map(line => (
      line
        .map(pixel => {
          const color = pixel === 1 ? colorFg : undefined
          return color !== undefined
            ? chalk.bgHex(color)('  ')
            : '  '
        })
        .join('')
    ))
    .join('\n')

  return (
    <Box height={height}>
      <Text>
        {formattedText}
      </Text>
    </Box>
  )
}


export default TextDisplay
