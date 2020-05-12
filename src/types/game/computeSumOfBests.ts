import * as Time from '../time'
import Game from './Game'


const computeSumOfBests = (game: Game): Time.Time => {
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
