import * as Snackbar from '../../../types/snackbar'
import { SNACKBAR_WRITE, IActionSnackbar } from '../types'


const createActionSnackbarWrite = (snackbar: Snackbar.Snackbar): IActionSnackbar => ({
  type: SNACKBAR_WRITE,
  payload: snackbar,
})


export default createActionSnackbarWrite
