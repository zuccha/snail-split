import React from 'react'
import { Box, BoxProps, Text } from 'ink'
import { ITime } from '../../types/time'
import formatTime from '../../utils/formatTime'


interface ISegmentsColumnDeltaTimesArgs {
  title: string
  deltaTimes: ITime[]
  containerProps?: BoxProps
}


const SegmentsColumnDeltaTimes: React.FC<ISegmentsColumnDeltaTimesArgs> = ({
  title,
  deltaTimes,
  containerProps = undefined,
}) => {
  return (
    <Box
      flexDirection='column'
      alignItems='flex-end'
      {...containerProps}
    >
      <Text>{title}</Text>
      {deltaTimes.map((deltaTime, deltaTimeIndex) => (
        <Text key={deltaTimeIndex}>
          {deltaTime === undefined
            ? '-'
            : formatTime(deltaTime)}
        </Text>
      ))}
    </Box>
  )
}


export default SegmentsColumnDeltaTimes
