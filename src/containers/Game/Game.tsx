import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Box, useStdout } from 'ink'
import createActionGameStart from '../../store/game/actions/createActionGameStart'
import createActionGameTick from '../../store/game/actions/createActionGameTick'
import GameHeader from '../GameHeader'
import GameSegments from '../GameSegments'
import GameTime from '../GameTime'


const TICK_INTERVAL = 32

const Game: React.FC<{}> = ({

}) => {
  const { stdout } = useStdout()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(createActionGameStart())
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
