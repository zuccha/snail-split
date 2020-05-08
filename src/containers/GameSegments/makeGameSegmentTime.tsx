import React from 'react'
import { useSelector } from 'react-redux'
import BlessedText from '../../components/BlessedText'
import makeSelectGameSegmentTime from '../../store/game/selectors/makeSelectGameSegmentTime'
import { IColumnDefinitionTime } from '../../types/column-definition'
import { isError, shallowEqualEitherErrorOrData } from '../../types/either-error-or'
import ISpace from '../../types/space'
import { formatTime } from '../../types/time'


interface IGameSegmentTimeProps {
  space?: ISpace
}


const makeGameSegmentTime = (
  segmentIndex: number,
  columnDefinition: IColumnDefinitionTime,
): React.FC<IGameSegmentTimeProps> => {
  const selectGameSegmentTime = makeSelectGameSegmentTime(
    segmentIndex,
    columnDefinition.timeCategory,
    columnDefinition.timeFrame,
  )

  const GameSegmentTime: React.FC<IGameSegmentTimeProps> = ({
    space = {},
  }) => {
    const time = useSelector(selectGameSegmentTime, shallowEqualEitherErrorOrData)

    if (isError(time)) {
      return null
    }

    return (
      <BlessedText
        content={formatTime(time.data)}
        align='right'
        {...space}
      />
    )
  }

  return GameSegmentTime
}


export default makeGameSegmentTime
