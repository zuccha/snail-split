import React from 'react'
import { Box, BoxProps, Color, Text } from 'ink'


interface IHeaderProps {
  title: string
  colorBg?: string
  colorFg?: string
  containerProps?: BoxProps
}


const Header: React.FC<IHeaderProps> = ({
  title,
  colorBg = undefined,
  colorFg = undefined,
  containerProps = undefined,
}) => {
  return (
    <Color hex={colorFg} bgHex={colorBg}>
      <Box
        justifyContent='center'
        padding={3}
        {...containerProps}
      >
        <Text>
          {title}
        </Text>
      </Box>
    </Color>
  )
}


export default Header
