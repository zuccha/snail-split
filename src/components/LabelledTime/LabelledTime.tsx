import React from 'react'
import * as Space from '../../types/space'
import * as Time from '../../types/time'
import BlessedBox from '../BlessedBox'
import BlessedText from '../BlessedText'


interface ILabelledTimeProps {
  label: string
  time: Time.Time
  colorFg?: string
  colorBg?: string
  space?: Space.Space
}


const COLUMN_TIME_WIDTH = 9
const COLUMN_TIME_RIGHT = 0

const COLUMN_TEXT_WIDTH = 20
const COLUMN_TEXT_RIGHT = COLUMN_TIME_WIDTH

const LABELLED_TIME_HEIGHT = 1


const LabelledTime: React.FC<ILabelledTimeProps> = ({
  label,
  time,
  colorFg = undefined,
  colorBg = undefined,
  space = {},
}) => {
  const formattedTime = Time.format(time, {
    formatDefault: 'H:MM:SS',
    formatBelowHour: 'M:SS',
    formatBelowMinute: 'S',
    formatBelowSecond: '0',
    formatZero: '0',
  })

  const style = { bg: colorBg, fg: colorFg }

  return (
    <BlessedBox
      height={LABELLED_TIME_HEIGHT}
      style={style}
      {...space}
    >
      <BlessedText
        content={label}
        right={COLUMN_TEXT_RIGHT}
        width={COLUMN_TEXT_WIDTH}
        style={style}
      />
      <BlessedText
        content={formattedTime}
        right={COLUMN_TIME_RIGHT}
        width={COLUMN_TIME_WIDTH}
        align='right'
        style={style}
      />
    </BlessedBox>
  )
}


export default LabelledTime

export { LABELLED_TIME_HEIGHT }
