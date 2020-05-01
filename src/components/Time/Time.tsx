import React, { useMemo } from 'react'
import { Box, Color, Text, BoxProps } from 'ink'
import formatTime from '../../utils/formatTime'
import when from '../../utils/when'
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
  containerProps?: BoxProps
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
  containerProps = undefined,
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

  return (
    <Box {...containerProps}>
      {when([
        [size === 'normal', () => (
          <Color hex={colorFg} bgHex={colorBg}>
            <Text bold={bold}>
              {formattedTime}
            </Text>
          </Color>
        )],
        [size === 'large', () => (
          <TextDisplay
            text={formattedTime}
            colorBg={colorBg}
            colorFg={colorFg}
            font={fontSmall}
          />
        )],
        [size === 'huge', () => (
          <TextDisplay
            text={formattedTime}
            colorBg={colorBg}
            colorFg={colorFg}
            font={fontBig}
          />
        )],
      ], null)}
    </Box>
  )
}


export default Time
