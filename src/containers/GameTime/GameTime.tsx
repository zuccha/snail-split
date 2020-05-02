import React from 'react'
import { useSelector } from 'react-redux'
import { BoxProps } from 'ink'
import Time from '../../components/Time'
import selectTime from '../../store/game/selectors/selectGameTime'


interface IGameTimeProps {
  containerProps?: BoxProps
}


const GameTime: React.FC<IGameTimeProps> = ({
  containerProps = undefined,
}) => {
  const time = useSelector(selectTime)

  return (
    <Time
      time={time}
      containerProps={containerProps}
    />
  )
}


export default GameTime
