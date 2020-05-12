import { createSelector } from 'reselect'
import * as Game from '../../../types/game'
import selectGame from './selectGame'


const selectGameCurrentSegmentIndex = createSelector(
  selectGame,
  game => {
    return Game.getCurrentSegmentIndex(game)
  },
)


export default selectGameCurrentSegmentIndex
