import React, { useEffect } from 'react'
import BlessedBox from '../../components/BlessedBox'
import ErrorMessage from '../../components/ErrorMessage'
import createActionGameLoad from '../../store/game/actions/createActionGameLoad'
import createActionGameTick from '../../store/game/actions/createActionGameTick'
import selectGameError from '../../store/game/selectors/selectGameError'
import useDispatch from '../../store/useDispatch'
import useSelector from '../../store/useSelector'
import GameHeader, { GAME_HEADER_HEIGHT } from '../GameHeader'
import GameSegments, { GAME_SEGMENTS_HEIGHT } from '../GameSegments'
import GameTime from '../GameTime'
import useInputs from './useInputs'


const TICK_INTERVAL = 100

const GAME_SEGMENTS_TOP = GAME_HEADER_HEIGHT
const GAME_TIME_TOP = GAME_SEGMENTS_TOP + GAME_SEGMENTS_HEIGHT

const Game: React.FC = () => {
  const dispatch = useDispatch()
  const errorMessage = useSelector(selectGameError)

  useInputs()

  useEffect(() => {
    dispatch(createActionGameLoad('./examples/games/dark-souls.json'))
    const tickIntervalId = setInterval(() => {
      dispatch(createActionGameTick())
    }, TICK_INTERVAL)

    return () => {
      clearInterval(tickIntervalId)
    }
  }, [dispatch])

  const windowWidth = process.stdout.columns
  const windowHeight = process.stdout.rows

  if (errorMessage !== undefined) {
    return (
      <ErrorMessage
        errorMessage={errorMessage}
        space={{ height: windowHeight, width: windowWidth }}
      />
    )
  }

  return (
    <BlessedBox
      height={windowHeight}
      width={windowWidth}
    >
      <GameHeader space={{ width: windowWidth }} />
      <GameSegments space={{ width: windowWidth, top: GAME_SEGMENTS_TOP }} />
      <GameTime space={{ width: windowWidth, top: GAME_TIME_TOP }} />
    </BlessedBox>
  )
}


export default Game
