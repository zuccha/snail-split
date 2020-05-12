import { useCallback } from 'react'
import useKeybinding from '../../hooks/useKeybinding'
import createActionGameInvalidatePreviousSegment from '../../store/game/actions/createActionGameInvalidatePreviousSegment'
import createActionGameReset from '../../store/game/actions/createActionGameReset'
import createActionGameSplit from '../../store/game/actions/createActionGameSplit'
import createActionGameToggle from '../../store/game/actions/createActionGameToggle'
import store from '../../store'
import useDispatch from '../../store/useDispatch'
import useEnqueueSnackbar from '../../store/snackbar/hooks/useEnqueueSnackbar'
import * as EitherErrorOr from '../../types/either-error-or'
import * as Game from '../../types/game'


const useGameInputs = (filename: string): void => {
  const dispatch = useDispatch()
  const enqueueSnackbar = useEnqueueSnackbar()

  const handleInvalidatePreviousSegment = useCallback(() => {
    dispatch(createActionGameInvalidatePreviousSegment())
  }, [dispatch])

  const handleResetGame = useCallback(() => {
    dispatch(createActionGameReset())
  }, [dispatch])

  const handleSaveGame = useCallback(() => {
    const game = store.getState().game
    const eitherErrorOrUndefined = Game.save(game, filename)
    EitherErrorOr.isError(eitherErrorOrUndefined)
      ? enqueueSnackbar(`Failed to save game: ${eitherErrorOrUndefined.error}`, 'failure')
      : enqueueSnackbar(`Game successfully saved to file ${filename}`, 'success')
  }, [dispatch])

  const handleSplitGame = useCallback(() => {
    dispatch(createActionGameSplit())
  }, [dispatch])

  const hanldeToggleGame = useCallback(() => {
    dispatch(createActionGameToggle())
  }, [dispatch])

  useKeybinding('backspace', handleInvalidatePreviousSegment)
  useKeybinding('r', handleResetGame)
  useKeybinding('s', handleSaveGame)
  useKeybinding('return', handleSplitGame)
  useKeybinding('space', hanldeToggleGame)
}


export default useGameInputs
