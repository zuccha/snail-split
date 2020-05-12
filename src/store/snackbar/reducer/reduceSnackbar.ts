import * as Snackbar from '../../../types/snackbar'
import { IActionSnackbar, SNACKBAR_CLEAR, SNACKBAR_WRITE } from '../types'


const reduceSnackbar = (
  snackbar: Snackbar.Snackbar = Snackbar.defaultSnackbar,
  action: IActionSnackbar,
): Snackbar.Snackbar => {
  switch (action.type) {
  case SNACKBAR_CLEAR:
    return Snackbar.defaultSnackbar
  case SNACKBAR_WRITE:
    return action.payload
  default:
    return snackbar
  }
}


export default reduceSnackbar
