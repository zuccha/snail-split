import useSelector from '../../useSelector'
import selectSavefile from '../selectors/selectSavefile'


const useSavefile = (): string => {
  const savefile = useSelector(selectSavefile)
  return savefile
}


export default useSavefile
