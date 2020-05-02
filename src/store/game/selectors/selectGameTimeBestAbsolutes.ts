import { createSelector } from 'reselect'
import { IStateGame } from '../types'
import selectGame from './selectGame'


const selectGameTimeBestAbsolutes = createSelector(
  selectGame,
  (game: IStateGame): (number | undefined)[] => {
    return game.segments.reduce<(number | undefined)[]>((acc, segment) => [
      ...acc,
      segment.timeBestRelative === undefined
        ? undefined
        : (acc[0] || 0) + segment.timeBestRelative,
    ], [])
  },
)


export default selectGameTimeBestAbsolutes
