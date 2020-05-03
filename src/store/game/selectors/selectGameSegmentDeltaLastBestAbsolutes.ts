import { createSelector } from 'reselect'
import range from '../../../utils/range'
import selectGame from './selectGame'
import selectGameTimeBestAbsolutes from './selectGameSegmentTimeBestAbsolutes'
import selectGameTimeLastAbsolutes from './selectGameSegmentTimeLastAbsolutes'


const selectGameSegmentDeltaLastBestAbsolutes = createSelector(
  selectGame,
  selectGameTimeBestAbsolutes,
  selectGameTimeLastAbsolutes,
  (game, timeBestAbsolutes, timeLastAbsolutes) => {
    return range(Math.max(timeBestAbsolutes.length, timeLastAbsolutes.length))
      .map(index => (
        timeLastAbsolutes[index] === undefined || timeBestAbsolutes[index] === undefined
          ? undefined
          : timeLastAbsolutes[index]! - timeBestAbsolutes[index]!
      ))
  },
)


export default selectGameSegmentDeltaLastBestAbsolutes
