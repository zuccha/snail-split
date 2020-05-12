import React, { useCallback, useState } from 'react'
import BlessedBox from '../../components/BlessedBox'
import useConfig from '../../store/config/hooks/useConfig'
import theme from '../../theme'
import * as Space from '../../types/space'
import GameBestPossibleTime, { GAME_BEST_POSSIBLE_TIME_HEIGHT } from '../GameBestPossibleTime'
import GameCurrentTime, { GAME_CURRENT_TIME_HEIGHT } from '../GameCurrentTime'
import GameHeader, { GAME_HEADER_HEIGHT } from '../GameHeader'
import GameSegments, { GAME_SEGMENTS_HEIGHT } from '../GameSegments'
import GameSumOfBests from '../GameSumOfBests'
import Snackbar from '../Snackbar'
import useInputs from './useInputs'
import useLoop from './useLoop'


interface ViewTimerProps {
  space?: Space.Space
}


const PADDING_H = 2
const PADDING_V = 1

const GAME_HEADER_TOP = PADDING_V
const GAME_SEGMENTS_TOP = GAME_HEADER_TOP + GAME_HEADER_HEIGHT + 1
const GAME_CURRENT_TIME_TOP = GAME_SEGMENTS_TOP + GAME_SEGMENTS_HEIGHT + 1
const GAME_BEST_POSSIBLE_TIME_TOP = GAME_CURRENT_TIME_TOP + GAME_CURRENT_TIME_HEIGHT + 3
const GAME_SUM_OF_BESTS_TOP = GAME_BEST_POSSIBLE_TIME_TOP + GAME_BEST_POSSIBLE_TIME_HEIGHT
const SNACKBAR_BOTTOM = PADDING_V

// TODO: Move to store.
const gameFilenameOutput = './examples/games/dark-souls-save.json'


const ViewTimer: React.FC<ViewTimerProps> = ({
  space = {},
}) => {
  const config = useConfig()

  useInputs(gameFilenameOutput)
  useLoop(gameFilenameOutput)

  const contentWidth = space.width !== undefined && space.width >= PADDING_H * 2
    ? space.width - PADDING_H * 2
    : 0

  return (
    <BlessedBox {...space} style={{ bg: theme.app.colorBg }}>
      <GameHeader
        space={{
          width: contentWidth,
          left: PADDING_H,
          top: GAME_HEADER_TOP,
        }}
      />
      <GameSegments
        space={{
          width: contentWidth,
          left: PADDING_H,
          top: GAME_SEGMENTS_TOP,
        }}
      />
      <GameCurrentTime
        space={{
          width: contentWidth,
          left: PADDING_H,
          top: GAME_CURRENT_TIME_TOP,
        }} />
      {config.showBestPossibleTime && (
        <GameBestPossibleTime
          space={{
            width: contentWidth,
            left: PADDING_H,
            top: GAME_BEST_POSSIBLE_TIME_TOP,
          }}
        />
      )}
      {config.showSumOfBests && (
        <GameSumOfBests
          space={{
            width: contentWidth,
            left: PADDING_H,
            top: GAME_SUM_OF_BESTS_TOP,
          }}
        />
      )}
      <Snackbar
        space={{
          width: contentWidth,
          left: PADDING_H,
          bottom: SNACKBAR_BOTTOM,
        }}
      />
    </BlessedBox>
  )
}


export default ViewTimer
