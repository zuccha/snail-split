import React from 'react'
import { BoxProps } from 'ink'
import { SegmentsColumnTimes } from '../../components/Segments'
import { isError, shallowEqualEitherErrorOrData } from '../../types/either-error-or'
import makeSelectGameSegmentTimes from '../../store/game/selectors/makeSelectGameSegmentTimes'
import { IColumnDefinitionTime } from '../../types/column-definition'
import { useSelector } from 'react-redux'


interface IMakeGameSegmentTimesColumnOptions {
  containerProps?: BoxProps
}

interface IGameSegmentColumnTimesProps {
  containerProps?: BoxProps
}


const makeGameSegmentTimesColumn = (
  columnDefinitionTime: IColumnDefinitionTime,
  options: IMakeGameSegmentTimesColumnOptions = {},
): React.FC<IGameSegmentColumnTimesProps> => {
  const { timeCategory, timeFrame, title } = columnDefinitionTime
  const selectGameTimes = makeSelectGameSegmentTimes(timeCategory, timeFrame)

  const GameSegmentTimesColumn: React.FC<IGameSegmentColumnTimesProps> = ({
    containerProps = undefined,
  }) => {
    const times = useSelector(selectGameTimes, shallowEqualEitherErrorOrData)
    if (isError(times)) {
      return null
    }

    return (
      <SegmentsColumnTimes
        title={title}
        times={times.data}
        containerProps={{ ...options.containerProps, ...containerProps }}
      />
    )
  }

  return GameSegmentTimesColumn
}


export default makeGameSegmentTimesColumn
