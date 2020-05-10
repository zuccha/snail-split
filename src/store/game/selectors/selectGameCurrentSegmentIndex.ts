import { createSelector } from 'reselect'
import { getCurrentSegmentIndex } from '../../../types/game'
import selectGame from './selectGame'


const selectGameCurrentSegmentIndex = createSelector(
  selectGame,
  game => {
    return getCurrentSegmentIndex(game)
  },
)


export default selectGameCurrentSegmentIndex
