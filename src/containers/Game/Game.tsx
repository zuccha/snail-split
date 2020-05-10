import React, { useCallback, useEffect, useState } from 'react'
import BlessedBox from '../../components/BlessedBox'
import useConfig from '../../store/config/hooks/useConfig'
import createActionGameTick from '../../store/game/actions/createActionGameTick'
import useDispatch from '../../store/useDispatch'
import theme from '../../theme'
import GameHeader, { GAME_HEADER_HEIGHT } from '../GameHeader'
import GameSegments, { GAME_SEGMENTS_HEIGHT } from '../GameSegments'
import GameSnackbar from '../GameSnackbar/GameSnackbar'
import GameTime from '../GameTime'
import useInputs from './useInputs'


interface IGameProps {
  filename: string
}


const PADDING_H = 2
const PADDING_V = 1

const GAME_HEADER_TOP = PADDING_V
const GAME_SEGMENTS_TOP = GAME_HEADER_TOP + GAME_HEADER_HEIGHT + 1
const GAME_TIME_TOP = GAME_SEGMENTS_TOP + GAME_SEGMENTS_HEIGHT + 1
const GAME_SNACKBAR_BOTTOM = PADDING_V


const Game: React.FC<IGameProps> = ({ filename }) => {
  const dispatch = useDispatch()
  const config = useConfig()
  const [screenSize, setScreenSize] = useState({
    width: process.stdout.columns,
    height: process.stdout.rows,
  })

  useInputs(filename)

  useEffect(() => {
    const tickIntervalId = setInterval(() => {
      dispatch(createActionGameTick())
    }, 1000 / config.fps)

    return () => {
      clearInterval(tickIntervalId)
    }
  }, [dispatch])

  const handleResize = useCallback(() => {
    setScreenSize({
      width: process.stdout.columns,
      height: process.stdout.rows,
    })
  }, [process])

  return (
    <BlessedBox
      height={screenSize.height}
      width={screenSize.width}
      style={{ bg: theme.app.colorBg }}
      onResize={handleResize}
    >
      <GameHeader
        space={{
          width: screenSize.width - PADDING_H * 2,
          left: PADDING_H,
          top: GAME_HEADER_TOP,
        }}
      />
      <GameSegments
        space={{
          width: screenSize.width - PADDING_H * 2,
          left: PADDING_H,
          top: GAME_SEGMENTS_TOP,
        }}
      />
      <GameTime
        space={{
          width: screenSize.width - PADDING_H * 2,
          left: PADDING_H,
          top: GAME_TIME_TOP,
        }} />
      <GameSnackbar
        space={{
          width: screenSize.width - PADDING_H * 2,
          left: PADDING_H,
          bottom: GAME_SNACKBAR_BOTTOM,
        }}
      />
    </BlessedBox>
  )
}


export default Game
