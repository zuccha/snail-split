import { IActionGame } from '../types'


const createActionGameStop = (): IActionGame => ({
  type: 'game/stop',
})


export default createActionGameStop
