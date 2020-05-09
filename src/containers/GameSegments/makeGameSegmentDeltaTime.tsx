import React from 'react'
import BlessedText from '../../components/BlessedText'
import makeSelectGameSegmentDeltaTime from '../../store/game/selectors/makeSelectGameSegmentDeltaTime'
import useSelector from '../../store/useSelector'
import theme from '../../theme'
import { IColumnDefinitionDelta } from '../../types/column-definition'
import { isError, equalEitherErrorOr } from '../../types/either-error-or'
import ISpace from '../../types/space'
import { formatTime } from '../../types/time'


interface IGameSegmentDeltaTimeProps {
  space?: ISpace
}


const makeGameSegmentDeltaTime = (
  segmentIndex: number,
  columnDefinition: IColumnDefinitionDelta,
): React.FC<IGameSegmentDeltaTimeProps> => {
  const selectGameSegmentDeltaTime = makeSelectGameSegmentDeltaTime(
    segmentIndex,
    columnDefinition.leftTimeCategory,
    columnDefinition.rightTimeCategory,
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

  const GameSegmentDeltaTime: React.FC<IGameSegmentDeltaTimeProps> = ({
    space = {},
  }) => {
    const time = useSelector(selectGameSegmentDeltaTime, equalEitherErrorOr)

    if (isError(time)) {
      return null
    }

    return (
      <BlessedText
        content={formatTime(time.data)}
        align='right'
        style={style}
        {...space}
      />
    )
  }

  return GameSegmentDeltaTime
}


export default makeGameSegmentDeltaTime
