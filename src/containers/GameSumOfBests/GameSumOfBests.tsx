import React from 'react'
import LabelledTime, { LABELLED_TIME_HEIGHT } from '../../components/LabelledTime'
import selectGameSumOfBests from '../../store/game/selectors/selectGameSumOfBests'
import useTheme from '../../store/theme/hooks/useTheme'
import useSelector from '../../store/useSelector'
import * as Space from '../../types/space'


interface IGameSumOfBestsProps {
  space?: Space.Space
}

const GAME_SUM_OF_BESTS = LABELLED_TIME_HEIGHT


const GameSumOfBests: React.FC<IGameSumOfBestsProps> = ({
  space = {},
}) => {
  const theme = useTheme()
  const sumOfBests = useSelector(selectGameSumOfBests)

  return (
    <LabelledTime
      label='Sum of best segments'
      time={sumOfBests}
      space={space}
      colorBg={theme.app.colorBg}
      colorFg={theme.app.colorFg}
    />
  )
}


export default GameSumOfBests

export { GAME_SUM_OF_BESTS }
