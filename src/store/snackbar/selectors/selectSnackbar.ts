import * as Snackbar from '../../../types/snackbar'
import { IStateRoot } from '../../types'


const selectSnackbar = (state: IStateRoot): Snackbar.Snackbar => {
  return state.snackbar
}


export default selectSnackbar
