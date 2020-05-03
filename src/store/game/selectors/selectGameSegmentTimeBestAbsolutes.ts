import { createSelector } from 'reselect'
import selectGame from './selectGame'


const selectGameSegmentTimeBestAbsolutes = createSelector(
  selectGame,
  game => {
    return game.segments.reduce<(number | undefined)[]>((acc, segment, index) => [
      ...acc,
      segment.timeBestRelative === undefined
        ? undefined
        : (acc[index - 1] || 0) + segment.timeBestRelative,
    ], [])
  },
)


export default selectGameSegmentTimeBestAbsolutes
