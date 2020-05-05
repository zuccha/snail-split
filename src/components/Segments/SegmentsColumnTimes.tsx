import React from 'react'
import { Box, BoxProps, Text } from 'ink'
import { ITime } from '../../types/time'
import formatTime from '../../utils/formatTime'


interface ISegmentsColumnTimesArgs {
  title: string
  times: ITime[]
  containerProps?: BoxProps
}


const SegmentsColumnTimes: React.FC<ISegmentsColumnTimesArgs> = ({
  title,
  times,
  containerProps = undefined,
}) => {
  return (
    <Box
      flexDirection='column'
      alignItems='flex-end'
      {...containerProps}
    >
      <Text>{title}</Text>
      {times.map((time, timeIndex) => (
        <Text key={timeIndex}>
          {time === undefined
            ? '-'
            : formatTime(time)}
        </Text>
      ))}
    </Box>
  )
}


export default SegmentsColumnTimes
