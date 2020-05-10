import { SNACKBAR_CLEAR, IActionSnackbar } from '../types'


const createActionSnackbarClear = (): IActionSnackbar => ({
  type: SNACKBAR_CLEAR,
})


export default createActionSnackbarClear
