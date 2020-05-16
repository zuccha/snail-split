import * as Theme from '../../../types/theme'
import useSelector from '../../useSelector'
import selectTheme from '../selectors/selectTheme'


const useTheme = (): Theme.Theme => {
  const theme = useSelector(selectTheme)
  return theme
}


export default useTheme
