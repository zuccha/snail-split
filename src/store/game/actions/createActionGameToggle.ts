import { IActionGame, GAME_TOGGLE } from '../types'


const createActionGameToggle = (): IActionGame => ({
  type: GAME_TOGGLE,
})


export default createActionGameToggle
