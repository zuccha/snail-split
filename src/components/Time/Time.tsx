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
  formatZero?: string
  formatBelowSecond?: string
  formatBelowMinute?: string
  formatBelowHour?: string
  formatDefault?: string
}


const Time: React.FC<ITimeProps> = ({
  time,
  size = 'normal',
  colorBg = undefined,
  colorFg = undefined,
  bold = false,
  formatZero = '0.000',
  formatBelowSecond = '0.mmm',
  formatBelowMinute = 'S.mmm',
  formatBelowHour = 'M:SS.mmm',
  formatDefault = 'H:MM:SS.mmm',
}) => {
  const formattedTime = useMemo(() => {
    return formatTime(time, {
      formatZero,
      formatBelowSecond,
      formatBelowMinute,
      formatBelowHour,
      formatDefault,
    })
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
