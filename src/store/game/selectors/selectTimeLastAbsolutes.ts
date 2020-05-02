import { IStateGame } from '../types'


const selectTimeLastAbsolutes = (game: IStateGame): (number | undefined)[] => {
  return game.segments.reduce<(number | undefined)[]>((acc, segment) => [
    ...acc,
    segment.timeLastRelative === undefined
      ? undefined
      : (acc[0] || 0) + segment.timeLastRelative,
  ], [])
}


export default selectTimeLastAbsolutes
