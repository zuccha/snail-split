import { IGame } from '../../../types/game'
import { IStateRoot } from '../../types'


const selectGame = (state: IStateRoot): IGame => state.game


export default selectGame
