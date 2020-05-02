import React from 'react'
import { Box, BoxProps } from 'ink'


interface ISegmentsProps {
  children: React.ReactNode
  containerProps?: BoxProps
}


const Segments: React.FC<ISegmentsProps> = ({
  children,
  containerProps = undefined,
}) => {
  return (
    <Box {...containerProps}>
      {children}
    </Box>
  )
}


export default Segments
