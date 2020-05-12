import * as A from '../array'
import Game from './Game'


const getCurrentSegmentIndex = (game: Game): number => {
  return game.status === 'ongoing' || game.status === 'pending'
    ? A.findLastIndex(game.segments, segment => segment.currentAbsoluteTime !== undefined)
    : -1
}


export default getCurrentSegmentIndex
