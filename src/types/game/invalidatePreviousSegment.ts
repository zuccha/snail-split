import immer from 'immer'
import Game from './Game'
import findLastIndex from '../../utils/findLastIndex'


const invalidatePreviousSegment = (game: Game): Game => {
  if (game.status === 'pending' || game.status === 'ongoing') {
    const currentSegmentIndex = findLastIndex(
      game.segments,
      segment => segment.currentAbsoluteTime !== undefined,
    )

    if (currentSegmentIndex < 1) {
      return game
    }

    return immer(game, draftGame => {
      draftGame.segments[currentSegmentIndex - 1].currentAbsoluteTime = undefined
    })
  }

  return game
}


export default invalidatePreviousSegment
