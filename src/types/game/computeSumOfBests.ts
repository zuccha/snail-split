import ITime from '../time/ITime'
import IGame from './IGame'


const computeSumOfBests = (game: IGame): ITime => {
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
