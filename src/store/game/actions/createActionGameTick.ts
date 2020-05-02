import { IActionGame } from '../types'


const createActionGameTick = (): IActionGame => ({
  type: 'game/tick',
})


export default createActionGameTick
