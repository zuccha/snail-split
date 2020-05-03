import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, useInput, useStdout } from 'ink'
import ErrorMessage from '../../components/ErrorMessage'
import createActionGameLoad from '../../store/game/actions/createActionGameLoad'
import createActionGameReset from '../../store/game/actions/createActionGameReset'
import createActionGameSplit from '../../store/game/actions/createActionGameSplit'
import createActionGameToggle from '../../store/game/actions/createActionGameToggle'
import createActionGameTick from '../../store/game/actions/createActionGameTick'
import selectGameError from '../../store/game/selectors/selectGameError'
import GameHeader from '../GameHeader'
import GameSegments from '../GameSegments'
import GameTime from '../GameTime'


const TICK_INTERVAL = 1000

const Game: React.FC<{}> = ({

}) => {
  const { stdout } = useStdout()
  const dispatch = useDispatch()
  const errorMessage = useSelector(selectGameError)

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
    dispatch(createActionGameLoad('./examples/games/dark-souls.json'))
    setInterval(() => {
      dispatch(createActionGameTick())
    }, TICK_INTERVAL)
  }, [])

  if (errorMessage !== undefined) {
    return <ErrorMessage
      errorMessage={errorMessage}
      containerProps={{
        height: stdout.rows,
        width: stdout.columns,
      }}
    />
  }

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
