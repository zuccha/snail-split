import React, { useMemo } from 'react'
import { Color } from 'ink'
import formatTime from '../../utils/formatTime'
import TextDisplay from '../TextDisplay'


interface TimeProps {
  time: number
  size?: 'normal' | 'large'
  colorBg?: string
  colorFg?: string
}


const Time: React.FC<TimeProps> = ({
  time,
  size = 'normal',
  colorBg = undefined,
  colorFg = undefined,
}) => {
  const formattedTime = useMemo(() => {
    return formatTime(time)
  }, [time])

  switch (size) {
    case 'normal':
      return (
        <Color hex={colorFg} bgHex={colorBg}>
          {formattedTime}
        </Color>
      )
    case 'large':
      return (
        <TextDisplay
          text={formattedTime}
          colorBg={colorBg}
          colorFg={colorFg}
        />
      )
  }
}


export default Time
