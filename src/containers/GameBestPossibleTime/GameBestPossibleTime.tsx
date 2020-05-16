import React from 'react'
import LabelledTime, { LABELLED_TIME_HEIGHT } from '../../components/LabelledTime'
import selectGameBestPossibleTime from '../../store/game/selectors/selectGameBestPossibleTime'
import useTheme from '../../store/theme/hooks/useTheme'
import useSelector from '../../store/useSelector'
import * as Space from '../../types/space'


interface IGameBestPossibleTimeProps {
  space?: Space.Space
}

const GAME_BEST_POSSIBLE_TIME_HEIGHT = LABELLED_TIME_HEIGHT


const GameBestPossibleTime: React.FC<IGameBestPossibleTimeProps> = ({
  space = {},
}) => {
  const theme = useTheme()
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
