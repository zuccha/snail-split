import { IActionGame, GAME_INVALIDATE_PREVIOUS_SEGMENT } from '../types'


const createActionGameInvalidatePreviousSegment = (): IActionGame => ({
  type: GAME_INVALIDATE_PREVIOUS_SEGMENT,
})


export default createActionGameInvalidatePreviousSegment
