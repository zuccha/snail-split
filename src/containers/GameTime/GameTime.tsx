import React from 'react'
import BigText from '../../components/BigText'
import font from '../../components/BigText/fonts/slim'
import BlessedBox from '../../components/BlessedBox'
import selectTime from '../../store/game/selectors/selectGameTime'
import useSelector from '../../store/useSelector'
import { isError, equalEitherErrorOr } from '../../types/either-error-or'
import ISpace from '../../types/space'
import { formatTime } from '../../types/time'


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

  return (
    <BlessedBox {...space}>
      <BigText
        text={formattedTime}
        font={font}
        space={{ right: 0 }}
      />
    </BlessedBox>
  )
}


export default GameTime
