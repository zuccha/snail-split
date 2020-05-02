import { createSelector } from 'reselect'
import { IStateGame } from '../types'
import selectGame from './selectGame'


const selectGameTitle = createSelector(
  selectGame,
  (game: IStateGame): string => game.title,
)


export default selectGameTitle
