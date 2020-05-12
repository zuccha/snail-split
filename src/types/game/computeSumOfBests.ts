import * as Time from '../time'
import IGame from './IGame'


const computeSumOfBests = (game: IGame): Time.Time => {
  let sumOfBests = 0
  for (const segment of game.segments) {
    if (segment.goldRelativeTime === undefined) {
      return undefined
    }
    sumOfBests += segment.goldRelativeTime
  }
  return sumOfBests
}


export default computeSumOfBests
