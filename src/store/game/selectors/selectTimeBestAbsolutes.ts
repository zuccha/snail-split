import { IStateGame } from '../types'


const selectTimeBestAbsolutes = (game: IStateGame): (number | undefined)[] => {
  return game.segments.reduce<(number | undefined)[]>((acc, segment) => [
    ...acc,
    segment.timeBestRelative === undefined
      ? undefined
      : (acc[0] || 0) + segment.timeBestRelative,
  ], [])
}


export default selectTimeBestAbsolutes
