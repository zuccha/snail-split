import { createSelector } from 'reselect'
import { IStateGame } from '../types'
import selectGame from './selectGame'


const selectGameTimeGoldRelatives = createSelector(
  selectGame,
  (game: IStateGame): (number | undefined)[] => {
    return game.segments.map(segment => segment.timeGoldRelative)
  },
)


export default selectGameTimeGoldRelatives
