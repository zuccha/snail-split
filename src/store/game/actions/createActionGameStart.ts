import { IActionGame } from '../types'


const createActionGameStart = (): IActionGame => ({
  type: 'game/start',
})


export default createActionGameStart
