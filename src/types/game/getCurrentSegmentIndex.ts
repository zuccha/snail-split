import findLastIndex from '../../utils/findLastIndex'
import Game from './Game'


const getCurrentSegmentIndex = (game: Game): number => {
  return game.status === 'ongoing' || game.status === 'pending'
    ? findLastIndex(game.segments, segment => segment.currentAbsoluteTime !== undefined)
    : -1
}


export default getCurrentSegmentIndex
