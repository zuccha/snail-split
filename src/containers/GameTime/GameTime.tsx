import React from 'react'
import { useSelector } from 'react-redux'
import Time from '../../components/Time'
import selectTime from '../../store/game/selectors/selectGameTime'
import { isError } from '../../types/either-error-or'
import ISpace from '../../types/space'


interface IGameTimeProps {
  space?: ISpace
}


const GameTime: React.FC<IGameTimeProps> = ({
  space = {},
}) => {
  const time = useSelector(selectTime)

  if (isError(time)) {
    return null
  }

  return <Time time={time.data} space={space} />
}


export default GameTime
