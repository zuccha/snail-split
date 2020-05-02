import range from '../../../utils/range'
import { IStateGame } from '../types'
import selectTimeBestAbsolutes from './selectTimeBestAbsolutes'
import selectTimeLastAbsolutes from './selectTimeLastAbsolutes'


const selectDeltaLastBestAbsolutes = (game: IStateGame): (number | undefined)[] => {
  const timeBestAbsolutes = selectTimeBestAbsolutes(game)
  const timeLastAbsolutes = selectTimeLastAbsolutes(game)
  return range(Math.max(timeBestAbsolutes.length, timeLastAbsolutes.length))
    .map(index => (
      timeLastAbsolutes[index] === undefined || timeBestAbsolutes[index] === undefined
        ? undefined
        : timeLastAbsolutes[index]! - timeBestAbsolutes[index]!
    ))
}


export default selectDeltaLastBestAbsolutes
