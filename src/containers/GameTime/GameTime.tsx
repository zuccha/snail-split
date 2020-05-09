import React from 'react'
import BigText from '../../components/BigText'
import font from '../../components/BigText/fonts/slim'
import BlessedBox from '../../components/BlessedBox'
import selectTime from '../../store/game/selectors/selectGameTime'
import useSelector from '../../store/useSelector'
import theme from '../../theme'
import { isError, equalEitherErrorOr } from '../../types/either-error-or'
import ISpace from '../../types/space'
import { formatTime } from '../../types/time'
import when from '../../utils/when'


interface IGameTimeProps {
  space?: ISpace
}


const GameTime: React.FC<IGameTimeProps> = ({
  space = {},
}) => {
  const time = useSelector(selectTime, equalEitherErrorOr)

  if (isError(time)) {
    return null
  }

  const formattedTime = formatTime(time.data)

  const colorFg = when([
    [time.data < 0, () => theme.time.colorFgNegative],
    [time.data > 0, () => theme.time.colorFgPositive],
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
