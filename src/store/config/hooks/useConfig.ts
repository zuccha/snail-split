import { IConfig } from '../../../types/config'
import useSelector from '../../useSelector'
import selectConfig from '../selectors/selectConfig'


const useConfig = (): IConfig => {
  const config = useSelector(selectConfig)
  return config
}


export default useConfig
