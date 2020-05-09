import React from 'react'
import Time from '../../components/Time'
import selectTime from '../../store/game/selectors/selectGameTime'
import useSelector from '../../store/useSelector'
import { isError, equalEitherErrorOr } from '../../types/either-error-or'
import ISpace from '../../types/space'


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

  return <Time time={time.data} space={space} />
}


export default GameTime
