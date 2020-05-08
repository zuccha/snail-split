import React, { useMemo } from 'react'
import ISpace from '../../types/space'
import formatTime from '../../utils/formatTime'
import when from '../../utils/when'
import BlessedText from '../BlessedText'


interface ITimeProps {
  time: number
  size?: 'normal' | 'large' | 'huge'
  formatZero?: string
  formatBelowSecond?: string
  formatBelowMinute?: string
  formatBelowHour?: string
  formatDefault?: string
  space?: ISpace
}


const Time: React.FC<ITimeProps> = ({
  time,
  size = 'normal',
  formatZero = '0.000',
  formatBelowSecond = '0.mmm',
  formatBelowMinute = 'S.mmm',
  formatBelowHour = 'M:SS.mmm',
  formatDefault = 'H:MM:SS.mmm',
  space = {},
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

  return when([
    [size === 'normal', () => (<BlessedText content={formattedTime} {...space} />)],
    [size === 'large', () => null],
    [size === 'huge', () => null],
  ], null)
}


export default Time
