import { ISnackbar } from '../../../types/snackbar'
import { SNACKBAR_WRITE, IActionSnackbar } from '../types'


const createActionSnackbarWrite = (snackbar: ISnackbar): IActionSnackbar => ({
  type: SNACKBAR_WRITE,
  payload: snackbar,
})


export default createActionSnackbarWrite
