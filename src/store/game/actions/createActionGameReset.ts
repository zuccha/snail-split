import { IActionGame } from '../types'


const createActionGameReset = (): IActionGame => ({
  type: 'game/reset',
})


export default createActionGameReset
