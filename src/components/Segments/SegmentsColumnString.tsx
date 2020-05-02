import React from 'react'
import { Box, BoxProps, Text } from 'ink'


interface ISegmentsColumnStringArgs {
  title: string
  values: string[]
  containerProps?: BoxProps
}


const SegmentsColumnString: React.FC<ISegmentsColumnStringArgs> = ({
  title,
  values,
  containerProps = undefined,
}) => {
  return (
    <Box flexDirection='column' {...containerProps}>
      <Text>{title}</Text>
      {values.map((value, valueIndex) => (
        <Text key={valueIndex}>
          {value}
        </Text>
      ))}
    </Box>
  )
}


export default SegmentsColumnString
