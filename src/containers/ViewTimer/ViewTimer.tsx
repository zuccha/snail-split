import React, { useCallback, useState } from 'react'
import BlessedBox from '../../components/BlessedBox'
import useConfig from '../../store/config/hooks/useConfig'
import theme from '../../theme'
import GameBestPossibleTime, { GAME_BEST_POSSIBLE_TIME_HEIGHT } from '../GameBestPossibleTime'
import GameCurrentTime, { GAME_CURRENT_TIME_HEIGHT } from '../GameCurrentTime'
import GameHeader, { GAME_HEADER_HEIGHT } from '../GameHeader'
import GameSegments, { GAME_SEGMENTS_HEIGHT } from '../GameSegments'
import GameSumOfBests from '../GameSumOfBests'
import Snackbar from '../Snackbar'
import useInputs from './useInputs'
import useLoop from './useLoop'


interface ViewTimerProps {
  filename: string
}


const PADDING_H = 2
const PADDING_V = 1

const GAME_HEADER_TOP = PADDING_V
const GAME_SEGMENTS_TOP = GAME_HEADER_TOP + GAME_HEADER_HEIGHT + 1
const GAME_CURRENT_TIME_TOP = GAME_SEGMENTS_TOP + GAME_SEGMENTS_HEIGHT + 1
const GAME_BEST_POSSIBLE_TIME_TOP = GAME_CURRENT_TIME_TOP + GAME_CURRENT_TIME_HEIGHT + 3
const GAME_SUM_OF_BESTS_TOP = GAME_BEST_POSSIBLE_TIME_TOP + GAME_BEST_POSSIBLE_TIME_HEIGHT
const SNACKBAR_BOTTOM = PADDING_V


const ViewTimer: React.FC<ViewTimerProps> = ({ filename }) => {
  const config = useConfig()
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

  const width = screenSize.width - PADDING_H * 2

  return (
    <BlessedBox
      height={screenSize.height}
      width={screenSize.width}
      style={{ bg: theme.app.colorBg }}
      onResize={handleResize}
    >
      <GameHeader
        space={{
          width,
          left: PADDING_H,
          top: GAME_HEADER_TOP,
        }}
      />
      <GameSegments
        space={{
          width,
          left: PADDING_H,
          top: GAME_SEGMENTS_TOP,
        }}
      />
      <GameCurrentTime
        space={{
          width,
          left: PADDING_H,
          top: GAME_CURRENT_TIME_TOP,
        }} />
      {config.showBestPossibleTime && (
        <GameBestPossibleTime
          space={{
            width,
            left: PADDING_H,
            top: GAME_BEST_POSSIBLE_TIME_TOP,
          }}
        />
      )}
      {config.showSumOfBests && (
        <GameSumOfBests
          space={{
            width,
            left: PADDING_H,
            top: GAME_SUM_OF_BESTS_TOP,
          }}
        />
      )}
      <Snackbar
        space={{
          width,
          left: PADDING_H,
          bottom: SNACKBAR_BOTTOM,
        }}
      />
    </BlessedBox>
  )
}


export default ViewTimer
