import React from 'react'
import { Box, BoxProps, Text } from 'ink'
import formatTime from '../../../utils/formatTime'


interface IReactColumnArgs {
  title: string
  type: 'string' | 'time'
  values: (string | number)[]
  containerProps?: BoxProps
}


const SplitsColumn: React.FC<IReactColumnArgs> = ({
  title,
  type,
  values,
  containerProps = undefined,
}) => {
  return (
    <Box
      flexDirection='column'
      justifyContent={type === 'string' ? 'flex-start' : 'flex-end'}
      {...containerProps}
    >
      <Text>{title}</Text>
      {values.map((value, valueIndex) => (
        <Text key={valueIndex}>
          {type === 'string'
            ? (value as string)
            : formatTime(value as number)
          }
        </Text>
      ))}
    </Box>
  )
}


export default SplitsColumn
