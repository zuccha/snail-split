import * as Snackbar from '../../../types/snackbar'
import useSelector from '../../useSelector'
import selectSnackbar from '../selectors/selectSnackbar'


const useSnackbar = (): Snackbar.Snackbar => {
  const snackbar = useSelector(selectSnackbar)
  return snackbar
}


export default useSnackbar
