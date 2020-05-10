import { ISnackbar } from '../../../types/snackbar'
import useSelector from '../../useSelector'
import selectSnackbar from '../selectors/selectSnackbar'


const useSnackbar = (): ISnackbar => {
  const snackbar = useSelector(selectSnackbar)
  return snackbar
}


export default useSnackbar
