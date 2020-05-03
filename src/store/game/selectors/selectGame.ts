import { isError } from '../../../types/either-error-or'
import { IGame, defaultGame } from '../../../types/game'
import { IStateRoot } from '../../types'


const selectGame = (state: IStateRoot): IGame => {
  return isError(state.game)
    ? defaultGame
    : state.game.data
}


export default selectGame
