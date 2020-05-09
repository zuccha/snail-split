import immer from 'immer'
import findLastIndex from '../../utils/findLastIndex'
import IGame from './IGame'


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
      segment => segment.currentRelativeTime !== undefined,
    )

    if (currentSegmentIndex === -1) {
      return game
    }

    return immer(game, draftGame => {
      const now = Date.now()
      const elapsedTime = now - draftGame.timerStart!
      const currentSegmentDraft = draftGame.segments[currentSegmentIndex]!

      // Update time.
      currentSegmentDraft.currentRelativeTime! += elapsedTime

      // Update gold if last split was better.
      if (
        currentSegmentDraft.goldRelativeTime === undefined ||
        currentSegmentDraft.currentRelativeTime! < currentSegmentDraft.goldRelativeTime
      ) {
        currentSegmentDraft.goldRelativeTime = currentSegmentDraft.currentRelativeTime
      }

      // Is last segment, game is over.
      if (currentSegmentIndex === draftGame.segments.length - 1) {
        draftGame.timerStart = undefined
        draftGame.status = 'done'
        // Update best if last game was better.
        if (
          currentSegmentDraft.pbRelativeTime === undefined ||
          currentSegmentDraft.currentRelativeTime! < currentSegmentDraft.pbRelativeTime
        ) {
          draftGame.segments.forEach(segment => {
            segment.pbRelativeTime = segment.currentRelativeTime
          })
        }
      }
      // Is not last segment, keep the timer going and set next segment as current.
      else {
        draftGame.timerStart = now
        draftGame.segments[currentSegmentIndex + 1].currentRelativeTime = 0
      }
    })
  }

  if (game.status === 'done') {
    return game
  }

  return game
}


export default splitGame
