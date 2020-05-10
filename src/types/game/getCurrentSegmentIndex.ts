import findLastIndex from '../../utils/findLastIndex'
import IGame from './IGame'


const getCurrentSegmentIndex = (game: IGame): number => {
  return game.status === 'ongoing' || game.status === 'pending'
    ? findLastIndex(game.segments, segment => segment.currentAbsoluteTime !== undefined)
    : -1
}


export default getCurrentSegmentIndex
