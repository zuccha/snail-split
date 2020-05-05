import React from 'react'
import { BoxProps } from 'ink'
import { SegmentsColumnDeltaTimes } from '../../components/Segments'
import { isError, shallowEqualEitherErrorOrData } from '../../types/either-error-or'
import makeSelectGameSegmentDeltaTimes from '../../store/game/selectors/makeSelectGameSegmentDeltaTimes'
import { IColumnDefinitionDelta } from '../../types/column-definition'
import { useSelector } from 'react-redux'


interface IMakeGameSegmentDeltaTimeColumnOptions {
  containerProps?: BoxProps
}

interface IGameSegmentColumnDeltaTimesProps {
  containerProps?: BoxProps
}


const makeGameSegmentDeltaTimeColumn = (
  columnDefinitionDelta: IColumnDefinitionDelta,
  options: IMakeGameSegmentDeltaTimeColumnOptions = {},
): React.FC<IGameSegmentColumnDeltaTimesProps> => {
  const { leftTimeCategory, rightTimeCategory, timeFrame, title } = columnDefinitionDelta
  const selectGameDeltaTimes = makeSelectGameSegmentDeltaTimes(leftTimeCategory, rightTimeCategory, timeFrame)

  const GameSegmentDeltaTimesColumn: React.FC<IGameSegmentColumnDeltaTimesProps> = ({
    containerProps = undefined,
  }) => {
    const deltaTimes = useSelector(selectGameDeltaTimes, shallowEqualEitherErrorOrData)
    if (isError(deltaTimes)) {
      return null
    }

    return (
      <SegmentsColumnDeltaTimes
        title={title}
        deltaTimes={deltaTimes.data}
        containerProps={{ ...options.containerProps, ...containerProps }}
      />
    )
  }

  return GameSegmentDeltaTimesColumn
}


export default makeGameSegmentDeltaTimeColumn
