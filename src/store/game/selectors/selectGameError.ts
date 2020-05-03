import { isError } from '../../../types/either-error-or'
import { IStateRoot } from '../../types'


const selectGameError = (state: IStateRoot): string | undefined => {
  return isError(state.game)
    ? state.game.error
    : undefined
}


export default selectGameError
