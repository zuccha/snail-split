import * as Config from '../../../types/config'
import useSelector from '../../useSelector'
import selectConfig from '../selectors/selectConfig'


const useConfig = (): Config.Config => {
  const config = useSelector(selectConfig)
  return config
}


export default useConfig
