import React from 'react'
import { useSelector } from 'react-redux'
import { BoxProps } from 'ink'
import Time from '../../components/Time'
import selectTime from '../../store/game/selectors/selectGameTime'
import { isError } from '../../types/either-error-or'


interface IGameTimeProps {
  containerProps?: BoxProps
}


const GameTime: React.FC<IGameTimeProps> = ({
  containerProps = undefined,
}) => {
  const time = useSelector(selectTime)
  if (isError(time)) {
    return null
  }

  return (
    <Time
      time={time.data}
      containerProps={containerProps}
    />
  )
}


export default GameTime
