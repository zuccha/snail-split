import { Action, Dispatch } from 'redux'
import store from './store'


const useDispatch = (): Dispatch<Action> => {
  return store.dispatch
}


export default useDispatch
