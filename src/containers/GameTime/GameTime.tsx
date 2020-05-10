import React from 'react'
import BigText from '../../components/BigText'
import font from '../../components/BigText/fonts/slim'
import BlessedBox from '../../components/BlessedBox'
import selectTime from '../../store/game/selectors/selectGameTime'
import useSelector from '../../store/useSelector'
import theme from '../../theme'
import ISpace from '../../types/space'
import { formatTime } from '../../types/time'
import when from '../../utils/when'
import useConfig from '../../store/config/hooks/useConfig'


interface IGameTimeProps {
  space?: ISpace
}


const GameTime: React.FC<IGameTimeProps> = ({
  space = {},
}) => {
  const config = useConfig()
  const time = useSelector(selectTime)

  const formattedTime = formatTime(time, {
    formatDefault: config.timeFormatDefault,
    formatBelowHour: config.timeFormatBelowHour,
    formatBelowMinute: config.timeFormatBelowMinute,
    formatBelowSecond: config.timeFormatBelowSecond,
    formatZero: config.timeFormatZero,
    formatEmpty: config.timeFormatEmpty,
  })

  const colorFg = when([
    [time < 0, () => theme.time.colorFgNegative],
    [time > 0, () => theme.time.colorFgPositive],
  ], theme.time.colorFgNeutral)

  return (
    <BlessedBox
      height={font.height}
      {...space}
      style={{ bg: theme.time.colorBg }}
    >
      <BigText
        text={formattedTime}
        font={font}
        space={{ right: 0 }}
        colorBg={theme.time.colorBg}
        colorFg={colorFg}
      />
    </BlessedBox>
  )
}


export default GameTime
