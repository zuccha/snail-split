import { IEitherErrorOr, isError } from '../../../types/either-error-or'
import { IGame, defaultGame } from '../../../types/game'
import { IStateRoot } from '../../types'


const selectGame = (state: IStateRoot): IEitherErrorOr<IGame> => {
  return state.game
}


export default selectGame
