import React from 'react'
import LabelledTime, { LABELLED_TIME_HEIGHT } from '../../components/LabelledTime'
import selectGameBestPossibleTime from '../../store/game/selectors/selectGameBestPossibleTime'
import useSelector from '../../store/useSelector'
import theme from '../../theme'
import ISpace from '../../types/space'


interface IGameBestPossibleTimeProps {
  space?: ISpace
}

const GAME_BEST_POSSIBLE_TIME_HEIGHT = LABELLED_TIME_HEIGHT


const GameBestPossibleTime: React.FC<IGameBestPossibleTimeProps> = ({
  space = {},
}) => {
  const bestPossibleTime = useSelector(selectGameBestPossibleTime)

  return (
    <LabelledTime
      label='Best possible time'
      time={bestPossibleTime}
      space={space}
      colorBg={theme.app.colorBg}
      colorFg={theme.app.colorFg}
    />
  )
}


export default GameBestPossibleTime

export { GAME_BEST_POSSIBLE_TIME_HEIGHT }
