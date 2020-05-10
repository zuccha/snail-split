import { useEffect } from 'react'
import fs from 'fs'
import screen from '../../screen'
import createActionGameReset from '../../store/game/actions/createActionGameReset'
import createActionGameSplit from '../../store/game/actions/createActionGameSplit'
import createActionGameToggle from '../../store/game/actions/createActionGameToggle'
import store from '../../store'
import useDispatch from '../../store/useDispatch'
import useEnqueueSnackbar from '../../store/snackbar/hooks/useEnqueueSnackbar'
import { isError } from '../../types/either-error-or'
import { saveGame } from '../../types/game'


const useInputs = (filename: string): void => {
  const dispatch = useDispatch()
  const enqueueSnackbar = useEnqueueSnackbar()

  useEffect(() => {
    const exit = (): void => {
      process.exit(0)
    }

    const hanldeToggleGame = (): void => {
      dispatch(createActionGameToggle())
    }

    const handleResetGame = (): void => {
      dispatch(createActionGameReset())
    }

    const handleSaveGame = (): void => {
      const game = store.getState().game
      const eitherErrorOrUndefined = saveGame(game, filename)
      isError(eitherErrorOrUndefined)
        ? enqueueSnackbar(`Failed to save game: ${eitherErrorOrUndefined.error}`, 'failure')
        : enqueueSnackbar(`Game successfully saved to file ${filename}`, 'success')
    }

    const handleSplitGame = (): void => {
      dispatch(createActionGameSplit())
    }

    screen.key('escape', exit)
    screen.key('q', exit)
    screen.key('C-c', exit)
    screen.key('space', hanldeToggleGame)
    screen.key('r', handleResetGame)
    screen.key('s', handleSaveGame)
    screen.key('return', handleSplitGame)

    return () => {
      screen.unkey('escape', exit)
      screen.unkey('q', exit)
      screen.unkey('C-c', exit)
      screen.unkey('space', hanldeToggleGame)
      screen.unkey('s', handleSaveGame)
      screen.unkey('r', handleResetGame)
      screen.unkey('return', handleSplitGame)
    }
  }, [dispatch])
}


export default useInputs
