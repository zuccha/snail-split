import * as Game from '../../../types/game'
import { IStateRoot } from '../../types'


const selectGame = (state: IStateRoot): Game.Game => {
  return state.game
}


export default selectGame
