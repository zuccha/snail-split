import React, { useCallback, useEffect, useState } from 'react'
import BlessedBox from '../../components/BlessedBox'
import theme from '../../theme'
import GameHeader, { GAME_HEADER_HEIGHT } from '../GameHeader'
import GameSegments, { GAME_SEGMENTS_HEIGHT } from '../GameSegments'
import GameSnackbar from '../GameSnackbar/GameSnackbar'
import GameTime from '../GameTime'
import useInputs from './useInputs'
import useLoop from './useLoop'


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
  const [screenSize, setScreenSize] = useState({
    width: process.stdout.columns,
    height: process.stdout.rows,
  })

  useInputs(filename)
  useLoop(filename)

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
