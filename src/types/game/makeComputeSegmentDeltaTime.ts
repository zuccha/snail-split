import when from '../../utils/when'
import { ISegment } from '../segment'
import { ITime, ITimeCategory, ITimeFrame } from '../time'
import IGame from './IGame'


type KeysOfType<T, TProp> = {
  [P in keyof T]: T[P] extends TProp
    ? P
    : never
}[keyof T];


const computeDelta = (
  segment: ISegment,
  leftRelativeTimeKey: KeysOfType<ISegment, ITime>,
  rightRelativeTimeKey: KeysOfType<ISegment, ITime>,
): ITime => {
  const leftRelativeTime = segment[leftRelativeTimeKey]
  const rightRelativeTime = segment[rightRelativeTimeKey]
  return leftRelativeTime === undefined || rightRelativeTime === undefined
    ? undefined
    : leftRelativeTime - rightRelativeTime
}


const makeComputeSegmentDeltaTime = (
  segmentIndex: number,
  leftTimeCategory: ITimeCategory,
  rightTimeCategory: ITimeCategory,
  timeFrame: ITimeFrame,
): ((game: IGame) => ITime) => {
  const leftRelativeTimeKey: (keyof ISegment) | undefined = when([
    [leftTimeCategory === 'current', () => 'currentRelativeTime'],
    [leftTimeCategory === 'pb',      () => 'pbRelativeTime'],
    [leftTimeCategory === 'wr',      () => 'wrRelativeTime'],
    [leftTimeCategory === 'gold',    () => 'goldRelativeTime'],
  ], undefined)

  const rightRelativeTimeKey: (keyof ISegment) | undefined = when([
    [rightTimeCategory === 'current', () => 'currentRelativeTime'],
    [rightTimeCategory === 'pb',      () => 'pbRelativeTime'],
    [rightTimeCategory === 'wr',      () => 'wrRelativeTime'],
    [rightTimeCategory === 'gold',    () => 'goldRelativeTime'],
  ], undefined)

  if (leftRelativeTimeKey === undefined || rightRelativeTimeKey === undefined) {
    return () => undefined
  }

  if (timeFrame === 'relative') {
    return game => {
      if (game.segments[segmentIndex] === undefined) {
        return undefined
      }

      return computeDelta(
        game.segments[segmentIndex],
        leftRelativeTimeKey,
        rightRelativeTimeKey,
      )
    }
  }

  if (timeFrame === 'absolute') {
    return game => {
      if (game.segments[segmentIndex] === undefined) {
        return undefined
      }

      let absoluteTime = computeDelta(
        game.segments[segmentIndex],
        leftRelativeTimeKey,
        rightRelativeTimeKey,
      )
      let index = 0

      while (index < segmentIndex && absoluteTime !== undefined) {
        const relativeTime = computeDelta(
          game.segments[index],
          leftRelativeTimeKey,
          rightRelativeTimeKey,
        )
        absoluteTime = relativeTime
          ? absoluteTime + relativeTime
          : undefined
        index = index + 1
      }

      return absoluteTime
    }
  }

  return () => undefined
}


export default makeComputeSegmentDeltaTime
