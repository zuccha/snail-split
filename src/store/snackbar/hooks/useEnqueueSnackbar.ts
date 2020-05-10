import { useCallback } from 'react'
import { ISnackbarVariant } from '../../../types/snackbar-variant'
import useDispatch from '../../useDispatch'
import createActionSnackbarWrite from '../actions/createActionSnackbarWrite'
import createActionSnackbarClear from '../actions/createActionSnackbarClear'
import useConfig from '../../config/hooks/useConfig'


type IEnqueueSnackbar = (message: string, variant: ISnackbarVariant) => void


let timeoutId: NodeJS.Timeout

const useEnqueueSnackbar = (): IEnqueueSnackbar => {
  const config = useConfig()
  const dispatch = useDispatch()

  const enqueueSnackbar = useCallback((message: string, variant: ISnackbarVariant) => {
    // Enqueue message
    dispatch(createActionSnackbarWrite({ message, variant }))

    // Reset timeout
    if (timeoutId) clearTimeout(timeoutId)

    // Start new timeout to clear the snackbar
    timeoutId = setTimeout(() => {
      dispatch(createActionSnackbarClear())
    }, config.snackbarDuration)
  }, [config, dispatch])

  return enqueueSnackbar
}


export default useEnqueueSnackbar
