import React, { useMemo } from 'react'
import ISpace from '../../types/space'
import { formatTime } from '../../types/time'
import BigText from '../BigText'
import font from '../BigText/fonts/slim'


interface ITimeProps {
  time: number
  size?: 'normal' | 'large' | 'huge'
  formatEmpty?: string
  formatZero?: string
  formatBelowSecond?: string
  formatBelowMinute?: string
  formatBelowHour?: string
  formatDefault?: string
  space?: ISpace
}


const Time: React.FC<ITimeProps> = ({
  time,
  formatEmpty = '-',
  formatZero = '0.000',
  formatBelowSecond = '0.mmm',
  formatBelowMinute = 'S.mmm',
  formatBelowHour = 'M:SS.mmm',
  formatDefault = 'H:MM:SS.mmm',
  space = {},
}) => {
  const formattedTime = useMemo(() => {
    return formatTime(time, {
      formatEmpty,
      formatZero,
      formatBelowSecond,
      formatBelowMinute,
      formatBelowHour,
      formatDefault,
    })
  }, [time])

  return (
    <BigText
      text={formattedTime}
      font={font}
      space={space}
    />
  )
}


export default Time
