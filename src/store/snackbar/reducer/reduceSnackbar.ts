import { ISnackbar, defaultSnackbar } from '../../../types/snackbar'
import { IActionSnackbar, SNACKBAR_CLEAR, SNACKBAR_WRITE } from '../types'


const reduceSnackbar = (
  snackbar: ISnackbar = defaultSnackbar,
  action: IActionSnackbar,
): ISnackbar => {
  switch (action.type) {
  case SNACKBAR_CLEAR:
    return defaultSnackbar
  case SNACKBAR_WRITE:
    return action.payload
  default:
    return snackbar
  }
}


export default reduceSnackbar
