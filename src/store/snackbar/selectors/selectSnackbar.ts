import { ISnackbar } from '../../../types/snackbar'
import { IStateRoot } from '../../types'


const selectSnackbar = (state: IStateRoot): ISnackbar => {
  return state.snackbar
}


export default selectSnackbar
