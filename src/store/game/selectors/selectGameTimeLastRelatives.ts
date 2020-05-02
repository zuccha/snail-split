import { createSelector } from 'reselect'
import { IStateGame } from '../types'
import selectGame from './selectGame'


const selectGameTimeLastRelatives = createSelector(
  selectGame,
  (game: IStateGame): (number | undefined)[] => {
    return game.segments.map(segment => segment.timeLastRelative)
  },
)


export default selectGameTimeLastRelatives
