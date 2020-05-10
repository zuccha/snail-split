import React, { useEffect } from 'react'
import BlessedBox from '../../components/BlessedBox'
import useConfig from '../../store/config/hooks/useConfig'
import createActionGameTick from '../../store/game/actions/createActionGameTick'
import useDispatch from '../../store/useDispatch'
import theme from '../../theme'
import GameHeader, { GAME_HEADER_HEIGHT } from '../GameHeader'
import GameSegments, { GAME_SEGMENTS_HEIGHT } from '../GameSegments'
import GameTime from '../GameTime'
import useInputs from './useInputs'


const PADDING_H = 2
const PADDING_V = 1

const GAME_HEADER_TOP = PADDING_V
const GAME_SEGMENTS_TOP = GAME_HEADER_TOP + GAME_HEADER_HEIGHT + 1
const GAME_TIME_TOP = GAME_SEGMENTS_TOP + GAME_SEGMENTS_HEIGHT + 1


const Game: React.FC = () => {
  const dispatch = useDispatch()
  const config = useConfig()

  useInputs()

  useEffect(() => {
    const tickIntervalId = setInterval(() => {
      dispatch(createActionGameTick())
    }, 1000 / config.fps)

    return () => {
      clearInterval(tickIntervalId)
    }
  }, [dispatch])

  const windowWidth = process.stdout.columns
  const windowHeight = process.stdout.rows

  return (
    <BlessedBox
      height={windowHeight}
      width={windowWidth}
      style={{
        bg: theme.app.colorBg,
      }}
    >
      <GameHeader
        space={{
          width: windowWidth - PADDING_H * 2,
          left: PADDING_H,
          top: GAME_HEADER_TOP,
        }}
      />
      <GameSegments
        space={{
          width: windowWidth - PADDING_H * 2,
          left: PADDING_H,
          top: GAME_SEGMENTS_TOP,
        }}
      />
      <GameTime
        space={{
          width: windowWidth - PADDING_H * 2,
          left: PADDING_H,
          top: GAME_TIME_TOP,
        }} />
    </BlessedBox>
  )
}


export default Game
