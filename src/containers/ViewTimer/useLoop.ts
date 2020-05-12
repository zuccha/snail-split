import { useEffect } from 'react'
import store from '../../store'
import useConfig from '../../store/config/hooks/useConfig'
import createActionGameTick from '../../store/game/actions/createActionGameTick'
import useDispatch from '../../store/useDispatch'
import useEnqueueSnackbar from '../../store/snackbar/hooks/useEnqueueSnackbar'
import * as EitherErrorOr from '../../types/either-error-or'
import * as Game from '../../types/game'


const SECOND = 1000

const useLoop = (filename: string): void => {
  const config = useConfig()
  const dispatch = useDispatch()
  const enqueueSnackbar = useEnqueueSnackbar()

  useEffect(() => {
    const tickIntervalId = setInterval(() => {
      dispatch(createActionGameTick())
    }, SECOND / config.fps)

    let autosaveIntervalId: NodeJS.Timeout
    if (config.autosave) {
      autosaveIntervalId = setInterval(() => {
        const game = store.getState().game
        const eitherErrorOrUndefined = Game.save(game, filename)
        if (EitherErrorOr.isError(eitherErrorOrUndefined)) {
          enqueueSnackbar(`Failed to autosave game: ${eitherErrorOrUndefined.error}`, 'failure')
        } else if (config.autosaveShowMessage) {
          enqueueSnackbar('Autosave', 'success')
        }
      }, config.autosaveInterval)
    }

    return () => {
      clearInterval(tickIntervalId)
      clearInterval(autosaveIntervalId)
    }
  }, [config, dispatch])
}


export default useLoop