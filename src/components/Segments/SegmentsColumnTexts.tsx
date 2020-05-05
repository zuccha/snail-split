import React from 'react'
import { Box, BoxProps, Text } from 'ink'


interface ISegmentsColumnTextsArgs {
  title: string
  texts: string[]
  containerProps?: BoxProps
}


const SegmentsColumnTexts: React.FC<ISegmentsColumnTextsArgs> = ({
  title,
  texts,
  containerProps = undefined,
}) => {
  return (
    <Box flexDirection='column' {...containerProps}>
      <Text>{title}</Text>
      {texts.map((text, textIndex) => (
        <Text key={textIndex}>
          {text}
        </Text>
      ))}
    </Box>
  )
}


export default SegmentsColumnTexts
