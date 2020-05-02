import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Box, useInput, useStdout } from 'ink'
import createActionGameReset from '../../store/game/actions/createActionGameReset'
import createActionGameSplit from '../../store/game/actions/createActionGameSplit'
import createActionGameToggle from '../../store/game/actions/createActionGameToggle'
import createActionGameTick from '../../store/game/actions/createActionGameTick'
import GameHeader from '../GameHeader'
import GameSegments from '../GameSegments'
import GameTime from '../GameTime'


const TICK_INTERVAL = 32

const Game: React.FC<{}> = ({

}) => {
  const { stdout } = useStdout()

  const dispatch = useDispatch()

  useInput((input, key) => {
    if (input === 'q') {
      process.exit()
    }
    if (input === 'r') {
      dispatch(createActionGameReset())
    }
    if (input === ' ') {
      dispatch(createActionGameToggle())
    }
    if (key.return) {
      dispatch(createActionGameSplit())
    }
  })

  useEffect(() => {
    setInterval(() => {
      dispatch(createActionGameTick())
    }, TICK_INTERVAL)
  }, [])

  return (
    <Box
      height={stdout.rows}
      width={stdout.columns}
      flexDirection='column'
    >
      <GameHeader
        containerProps={{ flexGrow: 1 }}
      />
      <GameSegments />
      <GameTime
        containerProps={{
          flexGrow: 1,
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
        }}
      />
    </Box>
  )
}


export default Game
