import IGame from './IGame'


const defaultGame: IGame = {
  title: '',
  category: '',
  segments: [],
  timerStart: undefined,
  status: 'initial',
  bestPossibleTime: undefined,
  sumOfBests: undefined,
}


export default defaultGame
