import React, { useMemo } from 'react'
import { Color, Text } from 'ink'
import formatTime from '../../utils/formatTime'
import TextDisplay, { fontBig, fontSmall } from '../TextDisplay'


interface ITimeProps {
  time: number
  size?: 'normal' | 'large' | 'huge'
  colorBg?: string
  colorFg?: string
  bold?: boolean
}


const Time: React.FC<ITimeProps> = ({
  time,
  size = 'normal',
  colorBg = undefined,
  colorFg = undefined,
  bold = false,
}) => {
  const formattedTime = useMemo(() => {
    return formatTime(time)
  }, [time])

  switch (size) {
    case 'normal':
      return (
        <Color hex={colorFg} bgHex={colorBg}>
          <Text bold={bold}>
            {formattedTime}
          </Text>
        </Color>
      )
    case 'large':
      return (
        <TextDisplay
          text={formattedTime}
          colorBg={colorBg}
          colorFg={colorFg}
          font={fontSmall}
        />
      )
    case 'huge':
      return (
        <TextDisplay
          text={formattedTime}
          colorBg={colorBg}
          colorFg={colorFg}
          font={fontBig}
        />
      )
  }
}


export default Time
