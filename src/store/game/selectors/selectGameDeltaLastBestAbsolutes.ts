import { createSelector } from 'reselect'
import range from '../../../utils/range'
import { IStateGame } from '../types'
import selectGame from './selectGame'
import selectGameTimeBestAbsolutes from './selectGameTimeBestAbsolutes'
import selectGameTimeLastAbsolutes from './selectGameTimeLastAbsolutes'


const selectGameDeltaLastBestAbsolutes = createSelector(
  selectGame,
  selectGameTimeBestAbsolutes,
  selectGameTimeLastAbsolutes,
  (game, timeBestAbsolutes, timeLastAbsolutes): (number | undefined)[] => {
    return range(Math.max(timeBestAbsolutes.length, timeLastAbsolutes.length))
      .map(index => (
        timeLastAbsolutes[index] === undefined || timeBestAbsolutes[index] === undefined
          ? undefined
          : timeLastAbsolutes[index]! - timeBestAbsolutes[index]!
      ))
  },
)


export default selectGameDeltaLastBestAbsolutes
