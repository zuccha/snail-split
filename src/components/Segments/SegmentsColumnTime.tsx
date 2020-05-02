import React from 'react'
import { Box, BoxProps, Text } from 'ink'
import formatTime from '../../utils/formatTime'


interface ISegmentsColumnTimeArgs {
  title: string
  values: (number | undefined)[]
  containerProps?: BoxProps
}


const SegmentsColumnTime: React.FC<ISegmentsColumnTimeArgs> = ({
  title,
  values,
  containerProps = undefined,
}) => {
  return (
    <Box
      flexDirection='column'
      alignItems='flex-end'
      {...containerProps}
    >
      <Text>{title}</Text>
      {values.map((value, valueIndex) => (
        <Text key={valueIndex}>
          {value === undefined
            ? '-'
            : formatTime(value)}
        </Text>
      ))}
    </Box>
  )
}


export default SegmentsColumnTime
