import React from 'react'
import BigText from '../../components/BigText'
import fontSlim from '../../components/BigText/fonts/fontSlim'
import fontFat from '../../components/BigText/fonts/fontFat'
import BlessedBox from '../../components/BlessedBox'
import selectGameBestTime from '../../store/game/selectors/selectGameBestTime'
import selectGameCurrentTime from '../../store/game/selectors/selectGameCurrentTime'
import selectGameStatus from '../../store/game/selectors/selectGameStatus'
import useSelector from '../../store/useSelector'
import theme from '../../theme'
import ISpace from '../../types/space'
import { formatTime } from '../../types/time'
import when from '../../utils/when'
import useConfig from '../../store/config/hooks/useConfig'


interface IGameTimeProps {
  space?: ISpace
}


const GAME_TIME_HEIGHT = 5


const GameTime: React.FC<IGameTimeProps> = ({
  space = {},
}) => {
  const config = useConfig()
  const bestTime = useSelector(selectGameBestTime)
  const currentTime = useSelector(selectGameCurrentTime)
  const status = useSelector(selectGameStatus)

  const formattedTime = formatTime(currentTime, {
    formatDefault: config.timeFormatDefault,
    formatBelowHour: config.timeFormatBelowHour,
    formatBelowMinute: config.timeFormatBelowMinute,
    formatBelowSecond: config.timeFormatBelowSecond,
    formatZero: config.timeFormatZero,
    formatEmpty: config.timeFormatEmpty,
  })

  const colorFg = when([
    [status !== 'ongoing', () => theme.time.colorFgPaused],
    [currentTime === undefined, () => theme.time.colorFgNeutral],
    [bestTime === undefined, () => theme.time.colorFgPositive],
    [currentTime! < bestTime!, () => theme.time.colorFgPositive],
    [currentTime! > bestTime!, () => theme.time.colorFgNegative],
  ], theme.time.colorFgNeutral)

  const font = config.timeFont === 'slim'
    ? fontSlim
    : fontFat

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

export { GAME_TIME_HEIGHT }
