import findLast from '../../../utils/findLast'
import { IStateGame } from '../types'


const selectTime = (game: IStateGame): number => {
  const currentSegment = findLast(
    game.segments,
    segment => segment.timeLastRelative !== undefined,
  )

  return currentSegment?.timeLastRelative || 0
}


export default selectTime
