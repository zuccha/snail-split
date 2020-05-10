import immer from 'immer'
import findLastIndex from '../../utils/findLastIndex'
import IGame from './IGame'
import makeComputeSegmentTime from './makeComputeSegmentTime'


const splitGame = (game: IGame): IGame => {
  if (game.status === 'initial') {
    return game
  }

  if (game.status === 'pending') {
    return game
  }

  if (game.status === 'ongoing') {
    if (game.timerStart === undefined) {
      return game
    }

    const currentSegmentIndex = findLastIndex(
      game.segments,
      segment => segment.currentAbsoluteTime !== undefined,
    )

    if (currentSegmentIndex === -1) {
      return game
    }

    return immer(game, draftGame => {
      const now = Date.now()
      const elapsedTime = now - draftGame.timerStart!
      const currentSegmentDraft = draftGame.segments[currentSegmentIndex]!

      // Update time.
      currentSegmentDraft.currentAbsoluteTime! += elapsedTime

      // Update gold if last split was better.
      const computeSegmentCurrentRelativeTime = makeComputeSegmentTime(currentSegmentIndex, 'current', 'relative')
      const currentSegmentRelativeTime = computeSegmentCurrentRelativeTime(draftGame)
      if (
        currentSegmentRelativeTime !== undefined &&
        (
          currentSegmentDraft.goldRelativeTime === undefined ||
          currentSegmentRelativeTime < currentSegmentDraft.goldRelativeTime
        )
      ) {
        currentSegmentDraft.goldRelativeTime = currentSegmentRelativeTime
      }

      // Is last segment, game is over.
      if (currentSegmentIndex === draftGame.segments.length - 1) {
        draftGame.timerStart = undefined
        draftGame.status = 'done'
        // Update best if last game was better.
        if (
          currentSegmentDraft.pbAbsoluteTime === undefined ||
          currentSegmentDraft.currentAbsoluteTime! < currentSegmentDraft.pbAbsoluteTime
        ) {
          draftGame.segments.forEach(segment => {
            segment.pbAbsoluteTime = segment.currentAbsoluteTime
          })
        }
      }
      // Is not last segment, keep the timer going and set next segment as current.
      else {
        draftGame.timerStart = now
        draftGame.segments[currentSegmentIndex + 1].currentAbsoluteTime =
          currentSegmentDraft.currentAbsoluteTime
      }
    })
  }

  if (game.status === 'done') {
    return game
  }

  return game
}


export default splitGame
