import React from 'react'
import { Box, BoxProps, Color, Text } from 'ink'


interface IErrorMessageProps {
  errorMessage: string
  containerProps?: BoxProps
}


const ErrorMessage: React.FC<IErrorMessageProps> = ({
  errorMessage,
  containerProps = undefined,
}) => {
  return (
    <Box justifyContent='center' alignItems='center' {...containerProps}>
      <Color hex='#ff0000'>
        <Text>
          {errorMessage}
        </Text>
      </Color>
    </Box>
  )
}


export default ErrorMessage
