import findLastIndex from '../../utils/findLastIndex'
import IGame from './IGame'


const getCurrentSegmentIndex = (game: IGame): number => {
  return findLastIndex(game.segments, segment => segment.currentRelativeTime !== undefined)
}


export default getCurrentSegmentIndex
