import { useEffect } from 'react'
import screen from '../../screen'
import createActionGameInvalidatePreviousSegment from '../../store/game/actions/createActionGameInvalidatePreviousSegment'
import createActionGameReset from '../../store/game/actions/createActionGameReset'
import createActionGameSplit from '../../store/game/actions/createActionGameSplit'
import createActionGameToggle from '../../store/game/actions/createActionGameToggle'
import store from '../../store'
import useDispatch from '../../store/useDispatch'
import useEnqueueSnackbar from '../../store/snackbar/hooks/useEnqueueSnackbar'
import * as EitherErrorOr from '../../types/either-error-or'
import * as Game from '../../types/game'


const useInputs = (filename: string): void => {
  const dispatch = useDispatch()
  const enqueueSnackbar = useEnqueueSnackbar()

  useEffect(() => {
    const exit = (): void => {
      process.exit(0)
    }

    const handleInvalidatePreviousSegment = (): void => {
      dispatch(createActionGameInvalidatePreviousSegment())
    }

    const handleResetGame = (): void => {
      dispatch(createActionGameReset())
    }

    const handleSaveGame = (): void => {
      const game = store.getState().game
      const eitherErrorOrUndefined = Game.save(game, filename)
      EitherErrorOr.isError(eitherErrorOrUndefined)
        ? enqueueSnackbar(`Failed to save game: ${eitherErrorOrUndefined.error}`, 'failure')
        : enqueueSnackbar(`Game successfully saved to file ${filename}`, 'success')
    }

    const handleSplitGame = (): void => {
      dispatch(createActionGameSplit())
    }

    const hanldeToggleGame = (): void => {
      dispatch(createActionGameToggle())
    }

    screen.key('escape', exit)
    screen.key('q', exit)
    screen.key('C-c', exit)
    screen.key('backspace', handleInvalidatePreviousSegment)
    screen.key('r', handleResetGame)
    screen.key('s', handleSaveGame)
    screen.key('return', handleSplitGame)
    screen.key('space', hanldeToggleGame)

    return () => {
      screen.unkey('escape', exit)
      screen.unkey('q', exit)
      screen.unkey('C-c', exit)
      screen.unkey('backspace', handleInvalidatePreviousSegment)
      screen.unkey('r', handleResetGame)
      screen.unkey('s', handleSaveGame)
      screen.unkey('return', handleSplitGame)
      screen.unkey('space', hanldeToggleGame)
    }
  }, [dispatch])
}


export default useInputs
