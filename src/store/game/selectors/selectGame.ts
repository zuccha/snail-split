import { IStateRoot } from '../../types'
import { IStateGame } from '../types'


const selectGame = (state: IStateRoot): IStateGame => state.game


export default selectGame
