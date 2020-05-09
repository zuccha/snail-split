import React from 'react'
import BlessedText from '../../components/BlessedText'
import makeSelectGameSegmentTime from '../../store/game/selectors/makeSelectGameSegmentTime'
import useSelector from '../../store/useSelector'
import theme from '../../theme'
import { IColumnDefinitionTime } from '../../types/column-definition'
import { isError, equalEitherErrorOr } from '../../types/either-error-or'
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

  const style = segmentIndex % 2 === 0
    ? {
      bg: theme.segments.itemEvenColorBg,
      fg: theme.segments.itemEvenColorFg,
    }
    : {
      bg: theme.segments.itemOddColorBg,
      fg: theme.segments.itemOddColorFg,
    }

  const GameSegmentTime: React.FC<IGameSegmentTimeProps> = ({
    space = {},
  }) => {
    const time = useSelector(selectGameSegmentTime, equalEitherErrorOr)

    if (isError(time)) {
      return null
    }

    return (
      <BlessedText
        content={formatTime(time.data)}
        align='right'
        {...space}
        style={style}
      />
    )
  }

  return GameSegmentTime
}


export default makeGameSegmentTime
