import { createSelector } from 'reselect'
import { IStateRoot } from '../../types'
import selectGame from './selectGame'


type ISelectGameSegmentName = (state: IStateRoot) => string


const makeSelectGameSegmentName = (
  segmentIndex: number,
): ISelectGameSegmentName => {
  return createSelector(
    selectGame,
    game => {
      return game.segments[segmentIndex] === undefined
        ? ''
        : game.segments[segmentIndex].name
    },
  )
}


export default makeSelectGameSegmentName
