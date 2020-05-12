import * as Snackbar from '../../types/snackbar'


const SNACKBAR_CLEAR = 'snackbar/clear'
const SNACKBAR_WRITE = 'snackbar/write'

interface IActionSnackbarClear {
  type: typeof SNACKBAR_CLEAR
}

interface IActionSnackbarWrite {
  type: typeof SNACKBAR_WRITE
  payload: Snackbar.Snackbar
}

type IActionSnackbar = IActionSnackbarClear | IActionSnackbarWrite


export {
  SNACKBAR_CLEAR,
  SNACKBAR_WRITE,
  IActionSnackbar,
  IActionSnackbarClear,
  IActionSnackbarWrite,
}
